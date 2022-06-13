import Login from "./Login";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { adminController } from "../../controller/admin.controller";
import { NavLink } from "react-router-dom";

function AdminPage() {
  const [token, setToken] = useState(null);

  const logout = adminController.logout.bind(null, setToken);

  const passHandleLogin = async (loginInfo) => {
    adminController.login(loginInfo, setToken);
  };

  return (
    <div className="admin-page">
    <div className="content-container">
          <nav className="admin-nav-logout">
            <button className="button">
              <NavLink onClick={logout} to="/">Home</NavLink>
            </button>
           {token && <button className="button" onClick={logout}>
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
