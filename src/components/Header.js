import ConnectedClientsCard from "./ConnectedClientsCard";
import warningicon from "../assets/images/warning-icon.png";
const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="top-bar">
          <div>
            {" "}
            <img
              className="warning-icon"
              src={warningicon}
              alt="warning-icon"
            />{" "}
            <p>Welcome</p>{" "}
          </div>
          <ConnectedClientsCard />
        </div>
        <div className="bottom-bar">
          <h1>Welcome to The Button</h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
