export const createUser = async (score, address) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({score: score, address: address}),

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      // let data = await response.json();
    } catch (e) {
      console.error(`Could not create new user: ${e}`);
    }
  };

  export const getUsers = async (callback) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      let data = await response.json();
      callback(data);
    } catch (e) {
      console.error(`Could not get users: ${e}`);
    }
  };