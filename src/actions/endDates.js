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
      throw new Error(`HTTP error: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (e) {
    console.error(`Could not get end date: ${e}`);
  }
};

export const fetchButtonCreatedDate = async () => {
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
    return data;
  } catch (e) {
    console.error(`Could not get button createdDate date: ${e}`);
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
    let data = await response.json();

    return data;
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
    let data = await response.json();
    return data;
  } catch (e) {
    console.error(`Could not delete end dates: ${e}`);
  }
};
