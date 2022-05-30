import React from 'react';
import {useNavigate} from "react-router-dom";

export default function CartFooter(props) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    // e.preventDefault();
    navigate("/checkout");
  }
  return (
    <div className="row fixed-bottom">
        <button className='btn btn-danger col-2' onClick={() => {props.resetData()}} >Reset</button>
        <div className='col-8 bg-dark text-light text-center'>{props.TotalAmount}</div>
        <button className='btn btn-primary col-2' onClick={handleClick} >Checkout</button>
    </div>
  )
}
