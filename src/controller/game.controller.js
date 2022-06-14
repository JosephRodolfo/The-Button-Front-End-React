//controller
// sends to components: array to update bar, loading or not status
//signals to highscores to refresh when game is over.
import { config } from "../constants";
import { setNewEndDate } from "../actions/endDates";
import { getHighScores } from "../actions/highScores";
import { config } from "../constants";
import {
  resetGame,
  getCreatedDate,
  calculateTime,
} from "./controller.helpers/controller.businessLogic";

export const controller = {
  getHighScores: async function (cb) {
    let scores = await getHighScores();
    if (Array.isArray(scores)) {
      cb(scores);
    } else {
      cb([]);
    }
  },
  recieveClickSignal: function () {
    setNewEndDate();
  },
  loading: true,
  timerArray: [],
  buttonTimeout: -5,
  buttonPressed: false,
  createdDate: 0,
  setCreated: function (cb) {
    getCreatedDate(cb);
  },
  hitServer: function (loading, count, created, highScores, setButtonPressed) {
    calculateTime().then(
      (timeArray) => {
        this.buttonPressed = false;
        setButtonPressed(this.buttonPressed);
        if (timeArray[1] <= 0 && timeArray[1] > this.buttonTimeout) {
          this.timerArray = timeArray;
          count(this.timerArray);
          this.loading = true;
          loading(this.loading);
        } else if (timeArray[1] <= this.buttonTimeout) {
          this.loading = true;
          loading(this.loading);

          this.timerArray = timeArray;
          count(this.timerArray);

          resetGame().then(() => {
            this.loading = false;
            loading(this.loading);
          });
        } else {
          this.loading = false;
          loading(this.loading);
          this.timerArray = timeArray;
          count(this.timerArray);
          if (timeArray[1] / timeArray[0] > 0.95) {
            if (

              //The 1 in the following line was the id of the button creation row
              //clearDB doesn't start at 1. It starts at 4 after wiping table. 
              //I need to fix this more robustly, but I think this will work for now.
              timeArray[timeArray.length - 1] !== config.url.CLEARDB_INC &&
              timeArray[0] - timeArray[1] < 10
            ) {
              this.buttonPressed = true;
              setButtonPressed(this.buttonPressed);
              this.loading = true;
              loading(this.loading);
            }
            this.getHighScores(highScores);
            getCreatedDate((result) => {
              this.createdDate = result;

              created(this.createdDate);
            });
          }
        }
      },
      (e) => {
        console.log(e);
      }
    );
  },
};
