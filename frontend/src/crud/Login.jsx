import axios from "axios";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081", { email, password })
      .then((res) => navigate("/home"))
      .catch((err) => console.log(err));
  };
  return (
    <div className='d-flex container vh-100 justify-content-center align-items-center w-50 '>
      <div className='p-3 bg-white w-50'>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3 w-100'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Password</label>
            <input
              type='password'
              placeholder='Password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-between'>
            <button type='submit' className='btn btn-success'>
              Login
            </button>

            <Link to='/register' className='btn fw-bold'>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
