import Login from "./Login";
import { login } from "../../actions/admin";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

function AdminPage() {
  const [token, setToken] = useState(null);

  const passHandleLogin = async (loginInfo) => {
    let data = await login(loginInfo.email, loginInfo.password);
    if (data.token) {
      setToken(data.token);
    } else {
      alert("Wrong password or username");
    }
  };

  const passHandleConfigurationChange = (settingsInfo) =>{
    console.log(settingsInfo);
  }

  const passUpLogout =()=>{
    setToken(null);
  }

  return (
      <div className="content-container">

      {!token ? <Login passHandleLogin={passHandleLogin}/> : <Dashboard passUpLogout={passUpLogout} passHandleConfigurationChange={passHandleConfigurationChange}/> }
    </div>
  );
}

export default AdminPage;
