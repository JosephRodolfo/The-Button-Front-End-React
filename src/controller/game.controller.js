//controller
// sends to components: array to update bar, loading or not status
//signals to highscores to refresh when game is over.
import {
  resetGame,
  getCreatedDate,
  calculateTime,
} from "./controller.helpers/controller.businessLogic";

export const controller = {
  loading: true,
  timerArray: [],
  buttonTimeout: -5,
  createdDate: 0,
  setCreated: function (cb) {
    getCreatedDate(cb);
  },
  hitServer: function (loading, count, created, resetSignal) {
    calculateTime().then(
      (timeArray) => {
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

            resetSignal();
          });
        } else {
          this.loading = false;
          loading(this.loading);

          this.timerArray = timeArray;
          count(this.timerArray);
          if (timeArray[1] / timeArray[0] > 0.9) {
            resetSignal();
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
