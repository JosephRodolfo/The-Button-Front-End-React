import { fetchEndDate } from "../../actions/endDates";
import {  getUsers } from "../../actions/users";

export const getScore = () => {
  let promise = fetchEndDate().then((data) => {
    const unix = Math.round(+new Date() / 1000);
    //if time has expired it sends an alert. The page will update as it's polling every couple seconds via the countdown component
    if (data.datedata - unix <= 0) {
      alert("Sorry, but you were too late. The button died!");
    }
    const score = data.datedata - unix;
 


    return score;
  });

  return promise;
};
//gets and sets a high (lowest number) score using callback, if no high score, sets it impossibly high
export const getSetHighScore = (setHighScoreCallback)=>{
  getUsers((users) => {
    if (users.length === 0) {
      setHighScoreCallback(1000000000000000);
    } else {
      let score = users.reduce((prev, curr) => prev.score <= curr.score);
      setHighScoreCallback(score.score);
    }
  });

}
