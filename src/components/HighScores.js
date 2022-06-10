import HighScoresCard from "./HighScoresCard";

const HighScores = ({ highScores }) => {
  return (
    <section className="highscores">
      <div className="content-container">
        <div className="highscores__content">
        <h2>People Responsible for Saving the Button</h2>

          {highScores.length !== 0 ? (
            highScores.map((element, index) => {
              return (
              <div>

              <HighScoresCard content={element} key={index} />
              </div>)
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
