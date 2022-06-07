import { useEffect, useState } from "react";
import { getHighScores } from "../actions/highScores";
import HighScoresCard from "./HighScoresCard";



const HighScores = ({reset}) => {

    const [highScores, setHighScores] = useState([]);

useEffect(() => {
  getHighScores((data)=>{
    setHighScores(data);
  });
}, []);
useEffect(() => {
  getHighScores((data)=>{
    setHighScores(data);
  });
}, [reset]);
  return (
    <section className="highscores">
      <div className="content-container">
        <div className="highscores__content">
        <h2>High Scores From Last Game</h2>

          {highScores.length !== 0 ? highScores.map((element, index) => {
            return (
              <HighScoresCard content={element} key={index}/>
              );
          }): <p></p>}
        </div>
      </div>
    </section>
  );
};

export default HighScores;
