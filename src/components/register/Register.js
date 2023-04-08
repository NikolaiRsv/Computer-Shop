import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms.js";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.js";
import "./RegisterStyles.css";

const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form method="post" onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={changeHandler}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={changeHandler}
          />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account?</p>
        <Link className="loginLink" to="/login">
          Login Here!
        </Link>
      </div>
    </div>
  );
};

export default Register;
