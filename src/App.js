import React, { Component } from "react";
import "./App.css";
import AddItemAndPrice from "./addItemAndPrice";
import List from "./list";
import ClearExpenses from "./clearExpenses";
import TotalAmount from "./totalAmount";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    item: "",
    price: "",
    editItem: "",
    editPrice: "",
    expenses: [
      // { id: 1, item: "rent", price: 1838 },
      // { id: 2, item: "grocery", price: 800 },
      // { id: 3, item: "car insurance", price: 400 },
      // { id: 4, item: "electricity bill", price: 350 },
      // { id: 5, item: "water bill", price: 150 }
    ],
    priceArr: [],
    totalSum: 0,
    showClearExpenses: false,
    editMode: true,
    id: 0
  };

  onItemChange = e => {
    const item = e.target.value;
    this.setState({ item });
  };
  onItemPrice = e => {
    const price = e.target.value;
    this.setState({ price: price });
  };
  onSubmitHandler = e => {
    e.preventDefault();

    if (!this.state.editMode) {
      console.log("edit mode");
      const newExpenses = [...this.state.expenses];
      const id = this.state.id;
      const index = newExpenses.findIndex(el => el.id === id);
      const expense = newExpenses[index];
      console.log(expense);
      expense.item = this.state.item;
      expense.price = this.state.price;
      expense.id = id;
      newExpenses[index] = expense;
      this.setState({ expenses: newExpenses });
      const priceArr = [...this.state.priceArr, +this.state.price];
      this.setState({ priceArr });
      this.setState({ item: "" });
      this.setState({ price: "" });
    } else {
      const id = uuidv4();
      const newExpense = { id, item: this.state.item, price: this.state.price };
      const expenses = [...this.state.expenses, newExpense];
      const priceArr = [...this.state.priceArr, +this.state.price];
      this.setState({ priceArr });

      this.setState({ expenses });
      this.setState({ item: "" });
      this.setState({ price: "" });
    }

    this.setState({ editMode: true });
  };

  onDeleteHandler = id => {
    const expenses = [...this.state.expenses];
    const newExpense = expenses.filter(el => el.id !== id);
    this.setState({ expenses: newExpense });
  };
  onClearExpensesHandler = () => {
    this.setState({ expenses: [] });
    this.setState({ priceArr: [] });
  };
  onEditHandler = (id, item, price) => {
    console.log(id, item, price);
    this.setState({
      id: id,
      item,
      price
    });
    this.setState({ editMode: false });
    // const expenses = [...this.state.expenses];
    // const expense = { ...expenses[id] };
    // expense.item = this.state.editItem;
    // expense.price = this.state.editPrice;
    // console.log(expense);
    // expenses[id] = expense;
    // this.setState({ expenses });
  };
  render() {
    return (
      <div className="Container">
        <h2>Budgeting App</h2>
        <AddItemAndPrice
          onEditHandler={this.onEditHandler}
          onItemChange={this.onItemChange}
          onItemPrice={this.onItemPrice}
          onSubmitHandler={this.onSubmitHandler}
          error={this.state.error}
          price={this.state.price}
          item={this.state.item}
          editMode={this.state.editMode}
        />
        <List
          expenses={this.state.expenses}
          onDeleteHandler={this.onDeleteHandler}
          onEditHandler={this.onEditHandler}
        />
        <ClearExpenses
          onClearExpensesHandler={this.onClearExpensesHandler}
          expenses={this.state.expenses}
          showClearExpenses={this.state.showClearExpenses}
        />
        <TotalAmount expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
