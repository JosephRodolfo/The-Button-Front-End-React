import CountdownBar from "./CountdownBar";
import Header from "./Header";
import Form from "./Button";
import HighScores from "./HighScores";
import "../styles/styles.scss";
import { useState, useEffect } from "react";
import { timer } from "./Timer";
import { controller } from "../controller/game.controller";

function HomePage() {
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [resetSignal, setReset] = useState(false);
  const [highScores, setHighScores] = useState([]);

  function passReset() {
    setReset((resetSignal) => !resetSignal);
  }

  const passClicked = () => {
    controller.recieveClickSignal();
  };

  useEffect(() => {
    controller.getHighScores(setHighScores)
    controller.setCreated(setCreatedDate);
    timer.start(() => {
      controller.hitServer(
        setLoadingStatus,
        setDate,
        setCreatedDate,
        passReset,
        setHighScores
      );
    }, 1000);
  }, []);


  useEffect(() => {



  }, []);


  return (
    <div className="home-page">
      <Header />
      <CountdownBar
        count={count}
        buttonCreatedDate={buttonCreatedDate}
        loadingStatus={loadingStatus}
        passReset={passReset}
      />
      <Form passClicked={passClicked} />
      <HighScores highScores={highScores} reset={resetSignal} />
    </div>
  );
}

export default HomePage;
