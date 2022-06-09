import {
  fetchEndDate,
  setNewEndDate,
  deleteEndDates,
  fetchButtonCreatedDate,
} from "../../actions/endDates";
import { copyHighScores, dropHighScores } from "../../actions/highScores";
import { deleteUsers } from "../../actions/users";

//takes data from fetch enddate and returns creation time and remaining time array, needed for
//progress bar display;
export const calculateTime = () => {
  let promise2 = fetchEndDate().then(
    (data) => {
      const unix = Math.round(+new Date() / 1000);
      const remainingTime = data.datedata - unix;
      const creationTime = data.created_at;
      const unixCreationTime =
        data.datedata - Math.round(new Date(creationTime) / 1000);

      const newArray = [unixCreationTime, remainingTime + 2];
      return newArray;
    },
    () => {
      return;
    }
  );
  return promise2;
};


export const resetGame = () => {
  let newPromise = deleteEndDates()
    .then(() => {
      setNewEndDate();
    })
    .then(() => {
      dropHighScores(() => {
        copyHighScores(() => {
          deleteUsers();
        });
      });
    });

  return newPromise;
};

export const getCreatedDate = (setCreated) =>
  (async () => {
    const fetchedDate = await fetchButtonCreatedDate();
    const date = fetchedDate.created_at;
    setCreated(date);
    setCreated((date) => date);
  })();
