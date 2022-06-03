import React from "react";
import { useEffect, useState } from "react";
import { deleteUsers } from "../actions/users";
import { fetchEndDate, setNewEndDate, deleteEndDates } from "../actions/endDates";
import { timer } from "./Timer";
import { unixToHuman } from "../utils/unixToHuman";

const CountdownBar = (props) => {
  const [count, setDate] = useState(0);
  //gets current time and subtracts that from future time to get time left to start countdown. If time is up starts new game, else updates state;
  const gameTurn = () => {
    fetchEndDate((data) => {
      const unix = Math.round(+new Date() / 1000);
      const remainingTime = (data.datedata - unix);
      //if the end date has passed when going to fetch new date do this,delete users and enddate data,  tell server to set new enddate, and return
      //what remains to do here is get winner data to display on page, trigger whatever action will happen
      if (remainingTime <= 0) {
        deleteUsers()
        deleteEndDates()
        setNewEndDate();
      }
      setDate(remainingTime);
    });
  };
  //on load gets end date;
  useEffect(() => {
    gameTurn();
  }, []);

  //polls server on interval for end date
  timer.start(() => {
    gameTurn();
  }, 1000);

  return (
    <main className="countdown-bar">
      <p>{unixToHuman(count)}</p>
      <div className="content-container">
        <div className="countdown-content">
          {props.array.map((element, index) => {
            return (
              <div
                key={index}
                className="countdownSquare"
                id={"square-" + index}
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
