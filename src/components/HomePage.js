import CountdownBar from "./CountdownBar";
import Header from "./Header";
import Form from "./Button";
import HighScores from "./HighScores";
import "../styles/styles.scss";
import { useState } from "react";

function HomePage() {
  const [resetSignal, setReset] = useState(false);
  const [clickSignal, setClickSignal] = useState(false);

  const passReset = () => {
    setReset((resetSignal) => !resetSignal);
    console.log(resetSignal)
  };

  const passClicked = () => {
    setClickSignal((clickSignal) => !clickSignal);
  };

  return (
    <div className="home-page">
      <Header />
      <CountdownBar click={clickSignal} passReset={passReset}/>
      <Form passClicked={passClicked}/>
      <HighScores reset={resetSignal} />
    </div>
  );
}

export default HomePage;
