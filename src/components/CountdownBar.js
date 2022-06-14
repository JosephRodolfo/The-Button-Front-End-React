import React from "react";
import pressed from "../assets/images/pressed.png";
import loader from "../assets/images/loader.gif";
import CountdownDisplay from "./CountdownDisplay";
import earth from "../assets/images/earth.gif"
// import {unixToHuman} from "../utils/unixToHuman"
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
                    src={loader}
                  />
                  <p>The button will return soon.</p>{" "}
                </div>
              ) : (
                <div>
                  <img src={pressed} alt="button pressed gif" />
                  <p>The button has been pressed</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* <p>{unixToHuman(count[1])}</p> */}
              <CountdownDisplay startEnd={count} />
              <div className="countdown-display-subcontent">
              <p>The button has been alive since {buttonCreatedDate}</p>
              <img alt="spinning earth gif" src={earth}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
