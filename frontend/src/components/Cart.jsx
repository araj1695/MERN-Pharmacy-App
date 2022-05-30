import React, {useState, useEffect} from 'react';
import Product from './Product';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import axios from 'axios';
import items from './Data/Items';
import "../styles/style.css"

export default function Cart() {
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth) 

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  })


  let [TotalAmount, setTotalAmount] = useState(0);

  const [products, setProducts] = useState([{
    name: "",
    brand: "",
    description: "",
    price: 0,
    quantity: 0
  }]);

  useEffect(() => {
    fetch("/admin-items").then(res => {
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes => {
      if(products.length<=1){
        setProducts(jsonRes);
      }
    });
  });

  

  const incrementQuantity = (index) => {
    let newItems = [...products];
    let newTotalAmount = TotalAmount;
    newItems[index].quantity++;
    newTotalAmount += newItems[index].price;
    setProducts(newItems);
    setTotalAmount(Math.round(newTotalAmount*10)/10);
  };

  const decrementQuantity = (index) => {
    let newItems = [...products];
    let newTotalAmount = TotalAmount;
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
      newTotalAmount -= newItems[index].price;
    } else {
      newItems[index].quantity = 0;
    }
    setProducts(newItems);
    setTotalAmount(Math.round(newTotalAmount*10)/10);
  };

  const resetData = () => {
    let newItems = [...products];
    let newTotalAmount = TotalAmount;
    newItems.map((item) => {
      item.quantity = 0;
    });
    newTotalAmount = 0;
    setTotalAmount(Math.round(newTotalAmount*10)/10);
    setProducts(newItems);
  };

  
  const handleClick = (e) => {
    axios.post("http://localhost:3001/api/cart",products);
    navigate("/checkout");
  }

  return (
    <div className='container'>
      <h1 className='text-center '>Welcome to Cart</h1>
      <div className="row mb-4 mt-4">
        <button className='btn btn-danger col-2' onClick={() => {resetData()}} >Reset</button>
        <div className='col-8 bg-dark text-light text-center'>{TotalAmount}</div>
        <button className='btn btn-primary col-2' onClick={handleClick} >Checkout</button>
    </div>
        {
          products.map((item, i) => 
            <Product item={item} key={i} index={i}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity} />
          )
        }
    </div>
  )
}
