import React from "react";
import "./App.css";
import AddItemAndPrice from "./addItemAndPrice";
import List from "./list";
import ClearExpenses from "./clearExpenses";
import TotalAmount from "./totalAmount";
function App() {
  return (
    <div className="Container">
      <h2>Budgeting App</h2>
      <AddItemAndPrice />
      <List />
      <ClearExpenses />
      <TotalAmount />
    </div>
  );
}

export default App;
