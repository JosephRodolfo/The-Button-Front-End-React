import React from "react";
import CountdownDisplay from "./CountdownDisplay";

const CountdownBar = ({
  loadingStatus,
  count,
  buttonCreatedDate,
  buttonPressed,
}) => {
  return (
    <main className="countdown-bar">
      <div className="content-container">
        <div className="countdown-content">
          {loadingStatus ? (
            <div>
              {!buttonPressed ? (
                <div>
                  {" "}
                  <img
                    alt="loading hourglass"
                    className="loader__image"
                    src="/images/loader.gif"
                  />
                  <p>The button will return soon.</p>{" "}
                </div>
              ) : (
                <div>
                  <img src="images/channels-3.png" alt="button pressed gif" />
                  <p>The button has been pressed</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <CountdownDisplay startEnd={count} />
              <div className="countdown-display-subcontent">
              <p>The button has been alive since {buttonCreatedDate}</p>
              <img alt="spinning earth gif" src="images/earth.gif"/>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
