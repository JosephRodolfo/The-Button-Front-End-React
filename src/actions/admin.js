//All the routes that are intended only for the administator/require authentication, just grouped auth and configurationg functions
//since there aren't many.

//admin log in/log out routes

export const login = async (email, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/v1/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        credentials: 'include',
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (e) {
    console.error(`Could not log in: ${e}`);
  }
};

export const logout = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/v1/admin/logout`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

        },
        credentials: 'include',
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
         return data;
  } catch (e) {
    alert(`Could not log out: ${e}`)
    console.error(`Could not log out: ${e}`);
  }


}

//authenticated routes for configuring settings, frequency of server calls and how long the button will live

export const fetchConfigData = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/v1/configuration/1`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) { 
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(`Could not get config data: ${e}`);
  }
};

export const updateConfigData = async (newSettings) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/v1/configuration/1`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newSettings}),

      }
    );

    if (!response.ok) { 
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(`Could not get config data: ${e}`);
  }
};
