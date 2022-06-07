const HighScoresCard = (props) => {



  return (
    <div className="highscores-card">
      <div className="content-container">
        <div className="highscores-card__content">
          <p>Player: {props.content.ethereum_address}</p>
          <p>Score: {props.content.score}</p>
        </div>
      </div>
    </div>
  );
};

export default HighScoresCard;
