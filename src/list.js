import React, { Component } from "react";

import Item from "./item";

class list extends Component {
  render() {
    const items = this.props.expenses
      ? this.props.expenses.map((expense, index) => {
          return (
            <Item
              expense={expense.item}
              price={expense.price}
              id={expense.id}
              key={expense.id}
              onDeleteHandler={() => this.props.onDeleteHandler(expense.id)}
              onEditHandler={() =>
                this.props.onEditHandler(
                  expense.id,
                  expense.item,
                  expense.price
                )
              }
            />
          );
        })
      : null;
    return <ul>{items}</ul>;
  }
}
export default list;
