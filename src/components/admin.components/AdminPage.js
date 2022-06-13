import Login from "./Login";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { adminController } from "../../controller/admin.controller";

function AdminPage() {
  const [token, setToken] = useState(null);

  const passHandleLogin = async (loginInfo) => {
    adminController.login(loginInfo, setToken);
  };

  const passUpLogout = async () => {
    adminController.logout(setToken);
  };

  return (
    <div className="content-container">
      {!token ? (
        <Login passHandleLogin={passHandleLogin} />
      ) : (
        <Dashboard passUpLogout={passUpLogout} />
      )}
    </div>
  );
}

export default AdminPage;
