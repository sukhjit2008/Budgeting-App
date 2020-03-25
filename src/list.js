import React, { Component } from "react";

import Item from "./item";
class list extends Component {
  state = {
    expenses: [
      { id: 1, item: "rent", price: 1838 },
      { id: 2, item: "grocery", price: 800 },
      { id: 3, item: "car insurance", price: 400 },
      { id: 4, item: "electricity bill", price: 350 },
      { id: 5, item: "water bill", price: 150 }
    ]
  };
  render() {
    const items = this.state.expenses.map((expense, index) => {
      return (
        <Item expense={expense.item} price={expense.price} key={expense.id} />
      );
    });
    return <ul>{items}</ul>;
  }
}
export default list;
