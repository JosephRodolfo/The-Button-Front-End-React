import { setNewEndDate } from "../actions/endDates";
import { createUser } from "../actions/users";
const Form = (props) => {

const buttonHandler = (e)=>{

e.preventDefault();
createUser();
setNewEndDate();


props.parentCallback();

}


return(
    <div className="submission-content">
      <div className="content-container">
        <div className="button__content">
            <form>
            <input type="text" placeholder="Enter your public address"/>
            <button onClick={buttonHandler} type="submit">Save the button</button>



            </form>
        </div>
      </div>
    </div>
  )};

  export default Form;