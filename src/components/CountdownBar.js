import React from "react";
import { useEffect, useState } from "react";
import { fetchEndDate } from "../actions/endDates";
import { timer } from "./Timer";
import { unixToHuman } from "../utils/unixToHuman";

const CountdownBar = (props) => {
  const [count, setDate] = useState(0);

  //on initial load gets current time and subtracts that from future time to get time left to start countdown
  useEffect(() => {
    fetchEndDate((data) => {
      const unix = Math.round(+new Date() / 1000);
      setDate(data.datedata - unix);
    });
  }, [props.refreshEndDate]);

  timer.start(() => {
    let newCount = count - 1;
    setDate(newCount);
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
