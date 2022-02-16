import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const[inCart, addCart] = useState(false)
  function addToCart(){
    addCart((inCart)=>!inCart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}  className="add">{inCart ? "Remove from cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
