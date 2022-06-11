import CountdownBar from "./CountdownBar";
import Header from "./Header";
import Form from "./Button";
import HighScores from "./HighScores";
import ConnectedClientsCard from "./ConnectedClientsCard";
import "../styles/styles.scss";
import { useState, useEffect } from "react";
import { timer } from "./Timer";
import { controller } from "../controller/game.controller";

function HomePage() {
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [buttonPressed, setButtonPressed] = useState(false);


 

  const passClicked = () => {
    controller.recieveClickSignal();
  };

  useEffect(() => {
    controller.getHighScores(setHighScores);
    controller.setCreated(setCreatedDate);

    timer.start(() => {
      controller.hitServer(
        setLoadingStatus,
        setDate,
        setCreatedDate,
        setHighScores,
        setButtonPressed
      );
    }, 1000);
  }, []);

  return (
    <div className="whole-page">
      <Header />

          <ConnectedClientsCard  />
   
      <CountdownBar
        count={count}
        buttonCreatedDate={buttonCreatedDate}
        loadingStatus={loadingStatus}
        buttonPressed={buttonPressed}
      />
      <Form passClicked={passClicked} />
      <HighScores highScores={highScores} />
    </div>
  );
}

export default HomePage;
