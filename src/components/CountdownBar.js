import React from "react";
import CountdownDisplay from "./CountdownDisplay";

const CountdownBar = ({ loadingStatus, count, buttonCreatedDate }) => {

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
