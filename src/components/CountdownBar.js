import React from "react";
import { useEffect, useState } from "react";
import { fetchEndDate, setNewEndDate } from "../actions/endDates";
import { timer } from "./Timer";
import { unixToHuman } from "../utils/unixToHuman";

const CountdownBar = (props) => {
  const [count, setDate] = useState(0);

  //on initial load gets current time and subtracts that from future time to get time left to start countdown
  useEffect(() => {
    fetchEndDate((data) => {
      const unix = Math.round(+new Date() / 1000);
      //if the end date has passed when going to fetch new date do this, tell server to set new enddate
        if(data.datedata - unix <= 0 ){
          setNewEndDate();

        }
      setDate(data.datedata - unix);
    });
  }, []);

//polls server on interval for end date
  timer.start(() => {
    fetchEndDate((data) => {
      const unix = Math.round(+new Date() / 1000);
        if(data.datedada - unix <= 0 ){
          setNewEndDate();

        }
      setDate(data.datedata - unix);
    });


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
