import React from "react";
import { useEffect, useState } from "react";
import { fetchButtonCreatedDate } from "../actions/endDates";
import {
  calculateTime,
  resetUsers,
  resetEndDate,
} from "./business_logic/CountdownBar.businessLogic";
import { timer } from "./Timer";
// import { unixToHuman } from "../utils/unixToHuman";
import CountdownDisplay from "./CountdownDisplay";

const CountdownBar = ({ passReset, clickSignal }) => {
  const buttonTimeout = -7;
  //state stores start date and end date in unix, for the purpose of visualization;
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");
  const [buttonRechargeStatus, setRechargeStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  //gets current time and subtracts that from future time to get time left to start countdown. If time is up starts new game, else updates state;
  const passUp = (callback) => {
    callback();
  };

  const gameTurn = (callback) => {
    calculateTime().then((timeArray) => {
      // if (timeArray==false){
      //   return;
      // }
      if (timeArray[1] <= 0 && timeArray[1] > buttonTimeout) {
        setDate(timeArray);
        setRechargeStatus(true);
        setLoadingStatus(true);
      }
      // what remains to do here is get winner data to display on page, trigger whatever action will happen
      else if (timeArray[1] <= buttonTimeout) {
        timer.stop();
        
        
        setRechargeStatus(false);
        setLoadingStatus(true);
        setDate([0, 0]);

        // fetchButtonCreatedDate().then((data) => {
        //   if (!data) {
        //     setDate([0, 0]);
        //     callback();
        //   } else {
            resetUsers().then(() => {
              resetEndDate().then(() => {
                  setLoadingStatus(false);
                  callback()
              });
            });
        //   }
        // });
      } else {
        setLoadingStatus(false);
        setRechargeStatus(false);
        setDate(timeArray);

      }
    }, (e)=>{
      //if there's an error it means another client beat the client to reseting the game. The only thing the 
      //client needs to do to catch back up is get the butt created date, which it does here; 
      //collisions are rare at 2 seconds (at least locally) but this seems to fix the problem when setting it lower
      //this callback triggers refresh of high scores and button created_date
  setDate([100, 100])

  setTimeout(()=>{

    callback();
    console.log('timeout callback fired')
  }, 100000)
    });
  };

  // on load gets end date;
  useEffect(() => {
    fetchButtonCreatedDate().then((data) => {
      setCreatedDate(data.created_at);
    }, (e)=>{
      return;
    });
    timer.start(() => {
      gameTurn(() => {
        passUp(() => {
          passReset();
        });
      });
    }, 1000);
  }, [passReset]);

  // useEffect(() => {

  //           setLoadingStatus(false);
  //     timer.stop();
  //     setNewEndDate().then((data) => {
  //       if (data) {
  //         setLoadingStatus(true);

  //         timer.start(() => {
  //           gameTurn(() => {
  //             passUp(() => {
  //               passReset();
  //             });
  //           });
  //         }, 1000);
  //       }
  //     });
  // }, [clickSignal, passReset]);

  return (
    <main className="countdown-bar">
      <div className="content-container">
        {/* <p>{unixToHuman(count[1])}</p> */}

        <div className="countdown-content">
          {loadingStatus ? (
            <img
              alt="loading hourglass"
              className="loader__image"
              src="/images/loader.gif"
            />
          ) : (
            <CountdownDisplay startEnd={count} />
          )}

          {buttonRechargeStatus ? (
            <p>
              The button has regretfully died. It will return in
              {(count[1] * -1 + buttonTimeout) * -1} seconds
            </p>
          ) : (
            <p>The button has been alive since {buttonCreatedDate}</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
