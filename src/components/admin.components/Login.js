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
        <form onSubmit={handleLogin} autoComplete="on" className="form">
          <label htmlFor="username">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="username"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <input type="submit" value="Log in" className="button" />
        </form>
      </div>
    </div>
  );
};
export default Login;
