import React from 'react'
import {MdDelete} from "react-icons/md"

export default function CartProduct(props) {
  return (
    <div className='bb'>
        <div className="row mt-3">
      <div className="col-4">
        <h6>
          {props.product.name}
        </h6>
      </div>
      <div className="col-2">
        <h6>
            {props.product.price}
        </h6>
      </div>
      <div className='col-2'>
          <h6>
              {props.product.quantity}
          </h6>
      </div>
      <div className="col-2">
        <h6>
            {Math.round(props.product.price*props.product.quantity*10)/10}
        </h6>
      </div>
      <div className="col-2 mt-">
          <button className="btn " onClick={() => {props.removeItem(props.index)}}><h3><MdDelete/></h3></button>
      </div>
    </div>
    </div>
  )
}
