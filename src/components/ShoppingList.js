import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const[filterterm, setFilterTerm] = useState("All");
  function filterCategory(event){
    setFilterTerm(event.target.value)
  }
  const displayItems = items.filter((item)=>{
    if (filterterm === "All"){
      return true
    }
    else{
      return item.category === filterterm
    }
  })
  console.log(filterterm)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
