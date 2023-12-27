import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
              Register
            </button>

            <Link to='/' className='btn fw-bold'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
