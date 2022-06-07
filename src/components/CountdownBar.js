import React from "react";
import { useEffect, useState } from "react";
import { deleteUsers } from "../actions/users";
import {
  fetchEndDate,
  setNewEndDate,
  deleteEndDates,
  fetchButtonCreatedDate,
} from "../actions/endDates";
import { timer } from "./Timer";
import { unixToHuman } from "../utils/unixToHuman";
import CountdownDisplay from "./CountdownDisplay";

const CountdownBar = (props) => {
  //state stores start date and end date in unix, for the purpose of visualization;
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");

  //gets current time and subtracts that from future time to get time left to start countdown. If time is up starts new game, else updates state;
  const gameTurn = () => {
    fetchEndDate((data) => {
      const unix = Math.round(+new Date() / 1000);
      const remainingTime = data.datedata - unix;
      const creationTime = data.created_at;
      const unixCreationTime =
        data.datedata - Math.round(new Date(creationTime) / 1000);

      //if the end date has passed when going to fetch new date do this,delete users and enddate data,  tell server to set new enddate, and return
      //what remains to do here is get winner data to display on page, trigger whatever action will happen
      if (remainingTime <= 0) {
        setDate([0, 0]);
        deleteUsers();
        //need to revist this to make it nicer; there were some confounding factors but I'm sure they're surmountable
        deleteEndDates().then(() => {
          setNewEndDate(() => {
            fetchButtonCreatedDate((date) => {
              setCreatedDate(date.created_at);
            });
          });
        });
      } else {
        const createdEndArray = [0, 0];

        createdEndArray[0] = unixCreationTime;
        createdEndArray[1] = remainingTime;
        setDate(createdEndArray);
      }
    });
  };

  //on load gets end date;
  useEffect(() => {
    fetchButtonCreatedDate((date) => {
      setCreatedDate(date.created_at);
    });
    timer.start(() => {
      gameTurn();
    }, 4000);
  }, []);

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
