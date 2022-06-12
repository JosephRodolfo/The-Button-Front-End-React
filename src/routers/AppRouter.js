import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminPage from "../components/admin.components/AdminPage";
import NoMatch from "../components/NoMatch";
import HomePage from "../components/HomePage";
import Header from "../components/Header";

function AppRouter() {
  return (
    <BrowserRouter>
          <div className="whole-page">

      <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
