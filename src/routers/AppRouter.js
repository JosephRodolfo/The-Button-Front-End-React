import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
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
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
