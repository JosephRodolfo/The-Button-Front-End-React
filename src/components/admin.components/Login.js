import { useState } from "react";
const Login = ({ passHandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    passHandleLogin({ email: email, password: password });
  };

  return (
    <div className="login">
      <div className="content-container">
        <form onSubmit={handleLogin} className="form">
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <button type="submit" className="button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
