import { Link } from 'react-router-dom';
import './RegisterStyles.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-bg"></div>
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?
        </p>
          <Link className='loginLink' to="/login">Login Here!</Link>
      </div>
    </div>
  );
};

export default Register;