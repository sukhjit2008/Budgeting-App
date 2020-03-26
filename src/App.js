import React, { Component } from "react";
import "./App.css";
import AddItemAndPrice from "./addItemAndPrice";
import List from "./list";
import ClearExpenses from "./clearExpenses";
import TotalAmount from "./totalAmount";

class App extends Component {
  state = {
    expenses: [
      // { id: 1, item: "rent", price: 1838 },
      // { id: 2, item: "grocery", price: 800 },
      // { id: 3, item: "car insurance", price: 400 },
      // { id: 4, item: "electricity bill", price: 350 },
      // { id: 5, item: "water bill", price: 150 }
    ],
    priceArr: [],
    totalSum: 0
  };

  componentDidMount = () => {};

  onExpenseItemCreate = item => {
    const expenses = [...this.state.expenses];
    const id = Math.ceil(Math.random() * 1000);
    const newExpense = { ...item, id };
    expenses.push(newExpense);
    this.setState({ expenses });
    const priceArr = [...this.state.priceArr];
    const newNumberItem = +item.price;
    priceArr.push(newNumberItem);
    this.setState({ priceArr });
  };
  onDeleteHandler = id => {
    const expenses = [...this.state.expenses];
    const newExpense = expenses.filter(el => el.id !== id);
    this.setState({ expenses: newExpense });
  };
  onClearExpensesHandler = () => {
    this.setState({ expenses: [] });
  };
  render() {
    return (
      <div className="Container">
        <h2>Budgeting App</h2>
        <AddItemAndPrice
          onExpenseItemCreate={item => this.onExpenseItemCreate(item)}
        />
        <List
          expenses={this.state.expenses}
          onDeleteHandler={this.onDeleteHandler}
        />
        <ClearExpenses onClearExpensesHandler={this.onClearExpensesHandler} />
        <TotalAmount priceArr={this.state.priceArr} />
      </div>
    );
  }
}

export default App;
