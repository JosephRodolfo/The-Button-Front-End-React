import { fetchEndDate } from "../actions/endDates";
export const getScore = () => {
  let promise = fetchEndDate().then((data) => {
    const unix = Math.round(+new Date() / 1000);
    //if time has expired it sends an alert. The page will update as it's polling every couple seconds via the countdown component
    if (data.datedada - unix <= 0) {
      alert("Sorry, but you were too late. The button died!");
    }

    const score = data.datedata - unix;
    return score;
  });

  return promise;
};
