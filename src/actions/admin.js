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
