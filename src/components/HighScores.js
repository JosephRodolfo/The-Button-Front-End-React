import HighScoresCard from "./HighScoresCard";

const HighScores = ({ highScores }) => {
  return (
    <section className="highscores">
      <div className="content-container">
        <div className="highscores__content">
          <h2>People Responsible For Saving The Button</h2>

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
