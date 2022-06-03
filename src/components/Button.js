import { setNewEndDate, fetchEndDate } from "../actions/endDates";
import { createUser, getUsers } from "../actions/users";
import { useState, useEffect } from "react";
const Form = () => {
  const [address, setAddress] = useState("");
  const [highScore, setHighScore] = useState(0);

  //this function is called on load and when clicking button. to set score in case button is pressed
  //after a round of the game has ended.
  const buttonTurn = () => {
    getUsers((users) => {
      if (users.length === 0) {
        setHighScore(1000000000000000);
      } else {
        let score = users.reduce((prev, curr) => prev.score <= curr.score);
        setHighScore(score.score);
      }
    });
  };

  const buttonHandler = (e) => {
    //button handler fetches end date to generate a score to send to server and gets address from input and creates a user.
    //finally it sets a new end date
    e.preventDefault();
    buttonTurn();
    fetchEndDate((data) => {
      const unix = Math.round(+new Date() / 1000);
      //if time has expired it sends an alert. The page will update as it's polling every couple seconds via the countdown component
      if (data.datedada - unix <= 0) {
        alert("Sorry, but you were too late. The button died!");
        // setNewEndDate();
      }

      const score = data.datedata - unix;
      //only sends score/user to server if it's better than best previous score
      if (score < highScore) {
        setHighScore(score);
        createUser(score, address);
      }
    });

    setNewEndDate();
  };
  //on load gets current high score and sets it in component's state;
  useEffect(() => {
    buttonTurn();
  }, []);

  return (
    <div className="submission-content">
      <div className="content-container">
        <div className="button__content">
          <form>
            <input
              type="text"
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Enter your public address"
            />
            <button onClick={buttonHandler} type="submit">
              Save the button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
