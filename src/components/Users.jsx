import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = await res.data;
    // console.log(JSON.stringify(users));
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {
        users.map((item) => (
          <div key={item.id}>
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default Users;
