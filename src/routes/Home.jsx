import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => 
        {
          const response = await axios.get('https://reqres.in/api/users?page=2');
          setUsers(response.data.data);
        };
  
      fetchUsers(); 
    }, []); 
  
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Электронная почта</th>
            <th>Аватар</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <li key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <Link to={`/user/${user.id}`} ><img src={user.avatar} alt={user.first_name} width="50" /></Link>
            </li>
          ))}
        </tbody>
      </table>
    );
}

export default Home