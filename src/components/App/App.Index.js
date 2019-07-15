import React from "react";
import Basket from "../Basket/container";

function App() {
  return (
    <div className="basket-container">
      <Basket list="list1" />
      <Basket list="list2" />
    </div>
  );
}

export default App;
