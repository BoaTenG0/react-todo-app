import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>My Crud App</h2>
      <Link to='/create' className='btn btn-success'>
        Add User
      </Link>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Number</th>
            <th scope='col'>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
              <td className='d-flex'>
                <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary'>
                  Update
                </Link>
                <button
                  // onClick={(e) => handleDelete(d.id)}
                  className='btn btn-sm btn-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Index;
