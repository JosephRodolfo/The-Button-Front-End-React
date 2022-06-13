import Login from "./Login";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { adminController } from "../../controller/admin.controller";
import { NavLink } from "react-router-dom";

function AdminPage() {
  const [token, setToken] = useState(null);

  const passHandleLogin = async (loginInfo) => {
    adminController.login(loginInfo, setToken);
  };

  return (
    <div className="admin-page">
    <div className="content-container">
          <nav className="admin-nav-logout">
            <button className="button">
              <NavLink onClick={()=>{adminController.logout(setToken)}} to="/">Home</NavLink>
            </button>
           {token && <button className="button" onClick={()=>{adminController.logout(setToken)}}>
              Logout
            </button>}
          </nav>
      {!token ? (
        <Login passHandleLogin={passHandleLogin} />
      ) : (
        <Dashboard />
      )}
    </div>
    </div>
  );
}

export default AdminPage;
