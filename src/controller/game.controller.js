//controller
// sends to components: array to update bar, loading or not status
//signals to highscores to refresh when game is over. 
import { resetGame, getCreatedDate } from "../components/business_logic/CountdownBar.businessLogic";


export const controller = {
    loading: true,
    timerArray: [],
    buttonTimeout: -5,
    createdDate: 0,
    reset: function(cb) {
        cb()
        return true;
    },
    hitServer: function() {
        calculateTime().then(
            (timeArray) => {
              if (timeArray[1] <= 0 && timeArray[1] > this.buttonTimeout) {
                this.timerArray = timeArray;
                this.loading = true;
              } else if (timeArray[1] <= this.buttonTimeout) {
                this.loading = true;
                this.timerArray = timeArray
                resetGame().then(() => {
                    this.loading = false;
                    this.reset();
                });
              } else {
                this.loading(false);
                this.timerArray= timeArray;     
                if (timeArray[1] / timeArray[0] > 0.9) {
                    this.reset()
                    getCreatedDate((result)=>{
                        this.createdDate = result;
                    });
                }
              }
            },
            (e) => {
              console.log(e);
            }
          );


    }



}

// const gameTurn = () => {
//     calculateTime().then(
//       (timeArray) => {
//         if (timeArray[1] <= 0 && timeArray[1] > buttonTimeout) {
//           setDate(timeArray);
//           setRechargeStatus(true);
//           setLoadingStatus(true);
//         } else if (timeArray[1] <= buttonTimeout) {
//           timer.stop();
//           setRechargeStatus(false);
//           setLoadingStatus(true);
//           setDate([0, 0]);
//           resetGame().then(() => {
//             setLoadingStatus(false);
//             passReset();
//             //this callback restarts the timer, hits the useeffect hook for passReset (which is there to trigger an update of highscores component)
//           });
//         } else {
//           setLoadingStatus(false);
//           setRechargeStatus(false);
//           setDate(timeArray);

//           //This sets a new button creation date. The division ensures it only calls server in the first seconds
//           //in case someone watched the button die and be reset.
//           if (timeArray[1] / timeArray[0] > 0.9) {
//             passReset()
//             getCreatedDate(setCreatedDate);
//           }
//         }
//       },
//       (e) => {
//         console.log(e);
//       }
//     );
//   };
