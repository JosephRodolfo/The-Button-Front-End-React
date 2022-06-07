import { useEffect, useState } from "react";
import { getHighScores } from "../actions/highScores";
import HighScoresCard from "./HighScoresCard";



const HighScores = () => {

    const [highScores, setHighScores] = useState([]);

useEffect(() => {
  getHighScores(setHighScores);
}, []);
  return (
    <section className="highscores">
      <div className="content-container">
        <div className="highscores__content">
          <h2>High Scores From Last Game</h2>

          {highScores.map((element, index) => {
            return <HighScoresCard content={element} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HighScores;
