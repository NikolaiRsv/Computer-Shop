import { Link } from "react-router-dom";
import "./LoginStyles.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-bg"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <h6>Not registerd yet ?</h6>


        <Link className="registerLink" to="/register">Register Here!</Link>
       
      </div>
    </div>
  );
};

export default Login;
