import React, {useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux"

export default function Order(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const {user} = useSelector((state) => state.auth) 
  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  })

  if(!user){
    navigate("/login")
  }
 

  
  return (
    <div className='container cc'>
        <h1 className='text-center bb mt-3 '>Order Page</h1>
        {location.state !== null? 
        <div className='order-body'>
        <h3 className='text-center'><b>Pay Now:</b> {location.state.total || 0}</h3>
        <div className='mm'>
          <h4>Payment Gateway</h4>
          <p>Work in progress...</p>
        </div>

        </div>

        : <p></p>
        }

    </div>
  )
}
