import React from "react";
import { useEffect, useState } from "react";
import {
  calculateTime,
  resetGame,
  getCreatedDate,
} from "./business_logic/CountdownBar.businessLogic";
import { timer } from "./Timer";
import CountdownDisplay from "./CountdownDisplay";

const CountdownBar = ({ passReset }) => {
  //state stores start date and end date in unix, for the purpose of visualization;
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  //gets current time and subtracts that from future time to get time left to start countdown. If time is up starts new game, else updates state;
  useEffect(() => {
    const buttonTimeout = -5;

    const gameTurn = () => {
      calculateTime().then(
        (timeArray) => {
          if (timeArray[1] <= 0 && timeArray[1] > buttonTimeout) {
            setDate(timeArray);
            setLoadingStatus(true);
          } else if (timeArray[1] <= buttonTimeout) {
            timer.stop();
            setLoadingStatus(true);
            setDate([0, 0]);
            resetGame().then(() => {
              setLoadingStatus(false);
              passReset();
              //this callback restarts the timer, hits the useeffect hook for passReset (which is there to trigger an update of highscores component)
            });
          } else {
            setLoadingStatus(false);
            setDate(timeArray);

            //This sets a new button creation date. The division ensures it only calls server in the first seconds
            //in case someone watched the button die and be reset.
            if (timeArray[1] / timeArray[0] > 0.9) {
              passReset()
              getCreatedDate(setCreatedDate);
            }
          }
        },
        (e) => {
          console.log(e);
        }
      );
    };

    timer.start(() => {
      gameTurn();
    }, 1000);
  }, [passReset]);

  useEffect(() => {
    getCreatedDate(setCreatedDate);
  }, []);

  return (
    <main className="countdown-bar">
      <div className="content-container">
        <div className="countdown-content">
          {loadingStatus ? (
           <div> <img
              alt="loading hourglass"
              className="loader__image"
              src="/images/loader.gif"
            />
            <p>
            The button will return soon.
            {/* {(count[1] * -1 + buttonTimeout) * -1} seconds */}
          </p> </div>
          ) : (
            <div>
            <CountdownDisplay startEnd={count} />
            <p>The button has been alive since {buttonCreatedDate}</p>
            </div>
          )}
           
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
