import { config } from "../constants";
export const createUser = async (score, address) => {
    try {
      const response = await fetch(`${config.url.API_URL}/v1/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({score: score, address: address}),

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      let data = await response.json();
      return data;
    } catch (e) {
      console.error(`Could not create new user: ${e}`);
    }
  };

  export const getUsers = async (callback) => {
    try {
      const response = await fetch(`${config.url.API_URL}/v1/user/`, {
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

  export const deleteUsers = async () => {
    try {
      const response = await fetch(`${config.url.API_URL}/v1/user/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
 
    } catch (e) {
      console.error(`Could not deletes users: ${e}`);
    }
  };