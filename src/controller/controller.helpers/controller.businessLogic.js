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
      const id = data.id;
      const newArray = [unixCreationTime, remainingTime + 2, id];
      return newArray;
    },
    () => {
      return;
    }
  );
  return promise2;
};

//combines all the necessary server calls to reset the game
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

    if (fetchedDate) {
      const date = fetchedDate.created_at;
      setCreated(date);
    }
  })();
