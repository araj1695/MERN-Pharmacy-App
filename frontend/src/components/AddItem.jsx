import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import AdminNav from './AdminNav';
import axios from 'axios';

export default function AddItem() {
  const navigate = useNavigate()

  const [item, setItem] = useState({
    name: "",
    brand: "",
    description: "",
    price: 0
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setItem(prevItem => {
      return{
        ...prevItem,
        [name]:value
      }
    })
    console.log(name);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: item.name,
      brand: item.brand,
      description: item.description,
      price: Number(item.price)
    };
    axios.post("http://localhost:3001/add-item", newItem);
    navigate("/admin-items")
  }

  return (
    <div className='container'>
      <AdminNav/>
        <h1>Add Item Page</h1>
        <form className='container login'>
        <div className="form-group mt-3">
          <input onChange={handleChange} type="text" className="form-control" name='name' autoComplete='off'  placeholder="name" required/>
        </div>
        <div className="form-group mt-3">
          <input onChange={handleChange} type="text" className="form-control" name='brand' autoComplete='off'  placeholder="brand" required/>
        </div>
        <div className="form-group mt-3">
          <input onChange={handleChange} type="text" className="form-control" name='description' autoComplete='off'  placeholder="description" required/>
        </div>
        <div className="form-group mt-3">
          <input onChange={handleChange} type="text" className="form-control" name='price' autoComplete='off'  placeholder="price" required/>
        </div>
        <button onClick={handleSubmit} type="submit" className=" my-btn mt-3">Add</button>
      </form>
    </div>
  )
}
