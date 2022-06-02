export const fetchEndDate = async (setState) => {
    try {
      //heroku seemed to add a / last time so must watch when moving to production
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/dates/last/date`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      let data = await response.json();
      setState(data);
    } catch (e) {
      console.error(`Could not get end date: ${e}`);
    }
  };

  export const setNewEndDate = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/dates/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      // let data = await response.json();
    } catch (e) {
      console.error(`Could not set new end date: ${e}`);
    }
  };