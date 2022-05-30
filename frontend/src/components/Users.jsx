import React, {useState, useEffect} from 'react';
import AdminNav from './AdminNav';

export default function Users() {
  const [users, setUsers] = useState([{
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    password: ""
  }]);

  useEffect(() => {
    fetch("/users").then(res => {
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes => setUsers(jsonRes));
  });

  return (
    <div className='container'>
        <AdminNav/>
        <h1>Users
        <span><h4><b>Total Users:</b> {users.length}</h4></span>
        </h1>
        {users.map(user => 
          <div className='admin-output-user'>
            <h4><b>Name:</b> {user.first_name} {user.last_name}</h4>
            <h6><b>Mobile: </b> {user.mobile}</h6>
            <h6><b>Email: </b> {user.email}</h6>
          </div>
        )}

    </div>
  )
}
