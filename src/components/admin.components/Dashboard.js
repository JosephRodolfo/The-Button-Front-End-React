import { useState, useEffect } from "react";
import { adminController } from "../../controller/admin.controller";
const Dashboard = () => {
  const [currentSettings, setCurrentSettings] = useState({});
  const [duration, setDuration] = useState(0);
  const [frequency, setFrequency] = useState(0);

  //on submitting changes to settings
  const handleSettingsChange = (e) => {
    e.preventDefault();
    const newSettings = {
      speed: duration * 3600000 || currentSettings.speed,
      callFrequency: frequency *1000 || currentSettings.callFrequency,
    };
    adminController.updateConfigData(newSettings, setCurrentSettings);
  };

  //on login, fetch current settings
  useEffect(() => {
    adminController.getConfigData(setCurrentSettings);
  }, []);
  return (
    <div className="dashboard">
      <div className="content-container">
        <div className="dashboard-subheader">
          <h2>Settings</h2>
      
        </div>
        <div className="current-settings-container">
          <h4>Current Settings</h4>
          <p>
            Button maximum lifespan: {currentSettings.speed / 60000} minutes
          </p>
          <p>
            Frequency of server calls: {currentSettings.callFrequency / 1000}{" "}
            seconds
          </p>
        </div>
        <form onSubmit={handleSettingsChange} className="form">
          <h4>Update Settings</h4>

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
