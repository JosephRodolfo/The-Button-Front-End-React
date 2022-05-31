const CountdownBar = (props) => {

//probably use state here and make call to server. I suppose this can host all the countdown logic. 




  return (
    <main className="countdown-bar">
      <div className="content-container">
        <div className="countdown-content">
          {
          props.array.map((element, index) => {
            return <div className="countdownSquare" id={"square-" + index}></div>;
          })}
        </div>
      </div>
    </main>
  );
};

export default CountdownBar;
