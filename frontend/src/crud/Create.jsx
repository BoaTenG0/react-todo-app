import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/create", { name, phone, email })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center '>
      <div className='w-100 bg-white rounded p-3 align-left'>
        <form action='' onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              name='phone'
              placeholder='Enter Phone No.'
              className='form-control'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Enter Email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Create;
