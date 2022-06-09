import { useEffect, useState } from "react";
import { getHighScores } from "../actions/highScores";
import HighScoresCard from "./HighScoresCard";

const HighScores = ({ reset }) => {
  const [highScores, setHighScores] = useState([]);

  
  useEffect(() => {
    getHighScores().then(
      //data is an array;
      (data) => {
        if (Array.isArray(data)) {
          setHighScores(data);
        } 
      },
      //ATTEMPTED ERROR HANDLING
      (e) => {
        console.log(e);
        // setHighScores([]);
      }
    );
  }, [reset]);
  return (
    <section className="highscores">
      <div className="content-container">
        <div className="highscores__content">
          <h2>People Responsible For Saving The Button Last Game</h2>

          {highScores.length !== 0 ? (
            highScores.map((element, index) => {
              return <HighScoresCard content={element} key={index} />;
            })
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HighScores;
