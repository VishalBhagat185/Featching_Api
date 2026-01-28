import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>Users List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p> Id : {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p> Phone : {user.phone}</p>
          <p> Address : {user.address.street}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Users;