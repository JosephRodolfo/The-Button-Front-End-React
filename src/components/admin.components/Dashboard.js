import { useState, useEffect } from "react";
import { fetchConfigData, logout } from "../../actions/admin";
const Dashboard = ({ passHandleConfigurationChange, passUpLogout }) => {
  const [currentSettings, setCurrentSettings] = useState({});
  const [duration, setDuration] = useState(0);
  const [frequency, setFrequency] = useState(0);

  //on submitting changes to settings
  const handleSettingsChange = (e) => {
    e.preventDefault();
    const newDuration = duration * 3600000;
    passHandleConfigurationChange({
      duration: newDuration || currentSettings.speed,
      frequency: frequency || currentSettings.callFrequency,
    });
  };
  const handleLogout = async ()=>{
    let response = await logout();
    if (response) {
      passUpLogout()
    }
  }
  //on login, fetch current settings
  useEffect(() => {
    fetchConfigData().then((settings) => {
      setCurrentSettings(settings);
    });
  }, []);
  return (
    <div className="dashboard">
      <div className="content-container">
       <div className="dashboard-subheader"><h2>Settings</h2><button className="button" onClick={handleLogout}>Logout</button></div> 
        <div className="current-settings-container">
          <p>
            Button maximum lifespan: {currentSettings.speed / 60000} minutes
          </p>
          <p>
            Frequency of server calls: {currentSettings.callFrequency / 1000}{" "}
            seconds
          </p>
        </div>
        <form onSubmit={handleSettingsChange} className="form">
          <label>Max button lifespan (in hours)</label>
          <input
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          ></input>
          <label>Frequency (in seconds):</label>
          <input
            onChange={(e) => setFrequency(e.target.value)}
            value={frequency}
          ></input>
          <button type="submit" className="button">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Dashboard;
