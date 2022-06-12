import { useState } from "react";
const Dashboard = ({ passHandleConfigurationChange }) => {


    const [duration, setDuration] = useState(0);
    const [frequency, setFrequency] = useState(0);
    const handleSettingsChange = (e) => {
      e.preventDefault();
      const newDuration = duration * 1000
      passHandleConfigurationChange({ duration: newDuration, frequency: frequency = 1000000});
    };
  return (
    <div className="dashboard">
      <div className="content-container">
        <form onSubmit={handleSettingsChange} className="form">
          <label>Email:</label>
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
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Dashboard;
