import { createUser } from "../actions/users";
import { useState, useEffect, memo } from "react";
import { getScore } from "./business_logic/Button.businessLogic";
import { controller } from "../controller/game.controller";
//memo keeps this from rerendering with parent
const Button = memo(({buttonPressed}) => {
  const [address, setAddress] = useState("");
  let [isWaiting, setWaiting] = useState(false);
  

  //tells controller to set a new end date on server;
 
  const buttonHandler = async () => {
    controller.recieveClickSignal();
    setWaiting(true)
    const score = await getScore();
    createUser(score, address)
  };

  //on unload and load disables button, to prevent multiple fast clicks entering multipes in database and setting a bunch of new end dates . 
  useEffect(() => {  
    setWaiting(false)

return ()=> {
  setWaiting(false)
}
  }, [buttonPressed]);

  return (
    <div className="submission-content">
      <div className="content-container">
        <div className="button__content">
          <label>Name:</label>
          <form className="form">
            <input
              type="text"
              className="text-input"
              onChange={(event) => setAddress(event.target.value)}
            />
            <button
              className="button"
              type="submit"
              disabled={buttonPressed || isWaiting === true ? true : false}
              onClick={(e)=>{

                e.preventDefault();
                buttonHandler();
              }}
            >
              Save the button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Button;
