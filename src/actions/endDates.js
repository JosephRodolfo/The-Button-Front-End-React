export const fetchEndDate = async () => {
  try {
    //heroku seemed to add a / last time so must watch when deploying
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/v1/dates/last/date`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // if (response.status === 404) {
      //   //if it doesn't find an end date in database, it creates a new one;

      //   // setNewEndDate();

      // } else {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // }

    let data = await response.json();
    return data;
  } catch (e) {
    console.error(`Could not get end date: ${e}`);
  }
};

export const fetchButtonCreatedDate = async (setState) => {
  try {
    //heroku seemed to add a / last time so must watch when deploying
    const response = await fetch(`${process.env.REACT_APP_PORT}/v1/dates/1`, {
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
    console.error(`Could not get button createdDate date: ${e}`);
  }
};

export const setNewEndDate = async (callback) => {
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
    let data = await response.json();

    callback(data);
  } catch (e) {
    console.error(`Could not set new end date: ${e}`);
  }
};

export const deleteEndDates = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_PORT}/v1/dates/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (e) {
    console.error(`Could not delete end dates: ${e}`);
  }
};
