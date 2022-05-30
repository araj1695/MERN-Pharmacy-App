import React from "react";

export default function Product(props) {
  return (
    <div className="my-wrapper">
      <div className="my-box ">
        <div className="item">
          <h5>
            {props.item.name}
          </h5>
          <h6>{props.item.brand}</h6>
          <span className="badge bg-secondary">₹ {props.item.price}</span>
        </div>
        <div className="center">
          <div className="my-btn-group">
            <div
              className="btn-group "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger" 
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
                -
              </button>
              <button type="button" className="btn btn-warning">{props.item.quantity}</button>
              <button type="button" className="btn btn-success" 
              onClick={() => {
                props.incrementQuantity(props.index);
              }} >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
