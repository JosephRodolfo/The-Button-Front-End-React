import { setNewEndDate } from "../actions/endDates";

const Form = () => {

const buttonHandler = (e)=>{

e.preventDefault();

setNewEndDate();




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