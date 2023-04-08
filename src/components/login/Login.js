import { Link } from "react-router-dom";
import "./LoginStyles.css";
import { useAuthContext } from "../../contexts/authContext.js";
import { useForm } from "../../hooks/useForms.js";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};
const Login = () => {
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form method="POST" onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Nikolai@gmail.com"
            name={LoginFormKeys.Email}
            value={values[LoginFormKeys.Email]}
            onChange={changeHandler}
          />
          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name={LoginFormKeys.Password}
            value={values[LoginFormKeys.Password]}
            onChange={changeHandler}
          />
          <button type="submit">Login</button>
        </form>
        <h6>Not registerd yet ?</h6>

        <Link className="registerLink" to="/register">
          Register Here!
        </Link>
      </div>
    </div>
  );
};

export default Login;
