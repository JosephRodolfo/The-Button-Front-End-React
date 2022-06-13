import CountdownBar from "./CountdownBar";
import Form from "./Button";
import HighScores from "./HighScores";
import "../styles/styles.scss";
import { useState, useEffect } from "react";
import { timer } from "./Timer";
import { controller } from "../controller/game.controller";
import { adminController } from "../controller/admin.controller";

function HomePage() {
  const [count, setDate] = useState([0, 0]);
  const [buttonCreatedDate, setCreatedDate] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [buttonPressed, setButtonPressed] = useState(false);
 const  [settings, setCallFrequency] = useState({callFrequency:1000});

 

  const passClicked = () => {
    controller.recieveClickSignal();
  };


  useEffect(()=>{
    adminController.getConfigData(setCallFrequency)
    timer.set_interval(settings.callFrequency)
  }, [loadingStatus, settings.callFrequency])

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
    <div>
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
