import React from "react";

const CountdownDisplay = (props) => {

  return (
    <div className="countdown-display">
        <div className="bar-parent">
            <div className="bar-child" style={{width: props.startEnd[1]>0 ? `${(props.startEnd[1] / props.startEnd[0]) * 100}%` : 0}}>

            </div>
        </div>

        </div>
  );
};

export default CountdownDisplay;
