import { setNewEndDate } from "../actions/endDates";
import { createUser, getUsers } from "../actions/users";
import { useState, useEffect } from "react";
import { getScore } from "./business_logic/Button.businessLogic";
const Form = ({ passClicked }) => {
  const [address, setAddress] = useState("");
  const [highScore, setHighScore] = useState(0);
  let [isWaiting, setWaiting] = useState(false);

  //this function is called on load and when clicking button. to set score in case button is pressed
  //after a round of the game has ended.
  const buttonTurn = () => {
    setWaiting(true);
    getUsers((users) => {
      if (users.length === 0) {
        setHighScore(1000000000000000);
      } else {
        let score = users.reduce((prev, curr) => prev.score <= curr.score);
        setHighScore(score.score);
      }
      setWaiting(false)
    });
  };

 const passClick = ()=>{
    passClicked();
  }

  const buttonHandler = (e) => {
    setWaiting(true);
    //button handler fetches end date to generate a score to send to server and gets address from input and creates a user.
    //finally it sets a new end date
    e.preventDefault();
    buttonTurn();
    getScore()
      .then((score) => {
        //only sends score/user to server if it's better than best previous score
        if (score < highScore) {
          setHighScore(score);
          createUser(score, address);
        }
      })
      .then(() => {
          setTimeout(setWaiting(false), 2000);
          passClick();
          setNewEndDate();
      });
  };

  //on load gets current high score and sets it in component's state;
  useEffect(() => {
    buttonTurn();
  }, []);

  return (
    <div className="submission-content">
      <div className="content-container">
        <div className="button__content">
          <form className="form">
            <input
              type="text"
              className="text-input"
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Enter your public address"
            />
            <button
              className="button"
              disabled={isWaiting === true ? true : false}
              onClick={buttonHandler}
            >
              Save the button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
