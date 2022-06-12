import HighScoresCard from "./HighScoresCard";

const HighScores = ({ highScores }) => {
  return (
    <section className="highscores">
      {highScores.length !== 0 ? (
        <div className="content-container">
          <div className="highscores__content">
            <div>
              <h2>People Responsible for Saving the Button</h2>

              {highScores.map((element, index) => {
                return (
                  <HighScoresCard content={element} key={element + index} />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default HighScores;
