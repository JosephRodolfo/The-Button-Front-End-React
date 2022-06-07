import React from "react";
import { useEffect, useState } from "react";
import {
  setNewEndDate,
  deleteEndDates,
  fetchButtonCreatedDate,
} from "../actions/endDates";
import { calculateTime, resetUsers } from "./CountdownBar.businessLogic";
import { timer } from "./Timer";
import { unixToHuman } from "../utils/unixToHuman";
import CountdownDisplay from "./CountdownDisplay";

const CountdownBar = ({ passReset }) => {
  //state stores start date and end date in unix, for the purpose of visualization;
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");

  //gets current time and subtracts that from future time to get time left to start countdown. If time is up starts new game, else updates state;
const passUp = (callback)=>{
callback()
}

  const gameTurn = (callback) => {
    calculateTime().then((timeArray) => {
      // what remains to do here is get winner data to display on page, trigger whatever action will happen
      if (timeArray[1] <= 0) {
        setDate([0, 0]);
        // need to revist this to make it nicer; there were some confounding factors but I'm sure they're surmountable
        resetUsers().then(() => {
          deleteEndDates().then(() => {
            setNewEndDate((data) => {
              fetchButtonCreatedDate((date) => {
                setCreatedDate(date.created_at);
                callback();
              });
            });
          });
        });
      } else {
        setDate(timeArray);
      }
    });
  };

  //on load gets end date;
  useEffect(() => {
    fetchButtonCreatedDate((date) => {
      setCreatedDate(date.created_at);
    });
    timer.start(() => {
      gameTurn(()=>{
        passUp(()=>{
          passReset()
        })
      });
    }, 2000);
  }, [passReset]);

  return (
    <main className="countdown-bar">
      <div className="content-container">
        <p>{unixToHuman(count[1])}</p>

        <div className="countdown-content">
          <CountdownDisplay startEnd={count} />
          <p>The button has been alive since {buttonCreatedDate}</p>
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
