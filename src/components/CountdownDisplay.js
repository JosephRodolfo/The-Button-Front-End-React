import React from "react";

const CountdownDisplay = (props) => {

console.log(props.startEnd)
  return (
    <div className="countdown-display">
        <div className="bar-parent">
            <div className="bar-child" style={{width: (props.startEnd[1]/props.startEnd[0]) * 100 + '%'}}>

            </div>
        </div>

        </div>
  );
};

export default CountdownDisplay;
