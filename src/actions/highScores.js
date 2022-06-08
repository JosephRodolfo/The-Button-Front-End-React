export const getHighScores = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/highScores/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      let data = await response.json();
      return data;
    } catch (e) {
      return [];
    }
  };

  export const copyHighScores = async (callback) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/highScores/copy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
callback();
    } catch (e) {
      console.error(`Could not copy high scores table: ${e}`);
    }
  };


  export const dropHighScores = async (callback) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/highScores/drop`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      callback();
    } catch (e) {
      console.error(`Could not drop high scores table: ${e}`);
    }
  };