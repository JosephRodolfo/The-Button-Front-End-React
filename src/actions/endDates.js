export const fetchEndDate = async (setState) => {
    try {
      //heroku seemed to add a / last time so must watch when moving to production
      const response = await fetch(`${process.env.REACT_APP_PORT}/last/date`, {
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
      console.error(`Could not get tasks: ${e}`);
    }
  };

  export const setNewEndDate = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      let data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(`Could not get tasks: ${e}`);
    }
  };