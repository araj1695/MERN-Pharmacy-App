import React,{useState, useEffect} from 'react';
import CartProduct from './CartProduct';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import axios from 'axios';
import "../styles/style.css";

export default function CheckoutPage(props) {
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth) 

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  })

  const [carts, setCarts] = useState([{
    name: "",
    brand: "",
    description: "",
    price: 0,
    quantity: 0
  }]);

  // console.log(location.state)

  useEffect(() => {
    fetch("/api/cart-item").then(res => {
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes => {
      if(carts.length<=1){
        setCarts(jsonRes);
      }
    });
  });

  let total = 0
  carts.map((cart) => {
    if(cart.quantity >0){
      let amount = cart.price*cart.quantity
      total += amount
      // let newTotal = total
      // newTotal += amount
      // setTotal(newTotal)
    }
  });

  const handleClick = () => {
    navigate("/order", {state:{total:total ? total : 0}})
  }

  const removeItem = (index) => {
    let newCarts = [...carts];
    let newTotal = total;
    newTotal -= (newCarts[index].quantity*newCarts[index].price);
    newCarts[index].quantity = 0;
    setCarts(newCarts);
    total = newTotal
    axios.post("http://localhost:3001/api/cart",carts);
  }



  
  return (
    <div className='container cc'>
        <h1 className='text-center mt-3 pt-3'>Checkout Page</h1>
        <div className='bb'>
          <div className="row mt-5 checkout">
        <div className="col-4">
          <h4>
            <b>Name</b>
          </h4>
        </div>
        <div className="col-2">
          <h4>
              <b>Price</b>
          </h4>
        </div>
        <div className='col-2'>
            <h4>
                <b>Quantity</b>
            </h4>
        </div>
        <div className="col-2">
          <h4>
            <b>Amount</b>
          </h4>
        </div>
      </div>
      </div>
        {
          carts.map((cart, i) =>
            cart.quantity>0 ?
              <div>
              <CartProduct 
              product={cart} key={i} index={i} removeItem={removeItem}/>
              </div>
              : <p></p>
            
          )
        }
        <div className='total'>
          <h4>Total Amount :</h4>
          <span><b>{Math.round(total*10)/10}</b></span>
        </div>
        <div className='center'>
        <button className='center my-btn mb-5' onClick={handleClick}>Order Now</button>
        </div>
    </div>
  )
}
