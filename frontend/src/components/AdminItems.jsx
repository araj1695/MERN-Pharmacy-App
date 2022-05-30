import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

export default function AdminItems() {
  const [items, setItems] = useState([
    {
      brand: "",
      description: "",
      name: "",
      price: 0
    }
  ]);

  useEffect(() => {
    fetch("/admin-items").then(res => {
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes => setItems(jsonRes));
  });
  // console.log(items);

  const handlleClick = (e) => {
    e.preventDefault();
    const delItem = {
      id: e.target.getAttribute("name")
    }
    axios.post("http://localhost:3001/delete-items", delItem);
    console.log(delItem);
  }

  return (
    <div className='container'>
        <AdminNav/>
        <h1>Admin Items Page 
          <span><h4><b>Total Items:</b> {items.length}</h4></span>
        </h1>
        {
          items.map(item => 
            <div className='admin-output'>
              <h4 className=''><b>Name:</b>  {item.name}</h4>
              <h6 className=''><b>Brand:</b>  {item.brand}</h6>
              <h6><b>Price: </b>₹{item.price}/- </h6>
              <p><b>Description: </b> {item.description}</p>
              <div className='center'><button name={item._id} onClick={handlleClick} className='delete'>Delete</button></div>
            </div>
          )
        }
    </div>
  )
}
