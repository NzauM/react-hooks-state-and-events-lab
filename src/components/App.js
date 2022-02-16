import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [isDark, setDark] = useState(false)

  function changeMode(){
    setDark((isDark) => !isDark);
  }

  // console.log(isDark)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
    {/* <div className = {isDark ? "App dark" : "App light"}> */}
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode} className = {isDark ? "App dark" : "App light"}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
