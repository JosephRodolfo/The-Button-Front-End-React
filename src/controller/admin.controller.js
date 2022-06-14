import {
  login,
  logout,
  updateConfigData,
  fetchConfigData,
} from "../actions/admin";
export const adminController = {
  login: async function (loginInfo, setTokenCallback) {
    const data = await login(loginInfo.email, loginInfo.password);
    if (data.token) {
      setTokenCallback(data.token);
    } else {
      alert("Wrong password or username");
    }
  },
  logout: async function (setTokenCallback) {
    const response = await logout();
    if (response) {
      setTokenCallback(null);
    }
  },

  getConfigData: async function (configDataCallback) {
    const settings = await fetchConfigData();
    if (settings) {
      configDataCallback(settings);
    } else {
      configDataCallback({ callFrequency: 3000, speed: 10000000 });
    }
  },
  updateConfigData: async function (body, updateCurrentSettingsCallback) {
    let data = await updateConfigData(body);
    if (data.speed) {
      updateCurrentSettingsCallback({
        speed: data.speed,
        callFrequency: data.callFrequency,
      });
      return;
    }
    alert(JSON.stringify(data));
  },
};
