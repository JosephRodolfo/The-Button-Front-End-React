export const createUser = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PORT}/v1/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:"body"}),

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      // let data = await response.json();
    } catch (e) {
      console.error(`Could not set new end date: ${e}`);
    }
  };