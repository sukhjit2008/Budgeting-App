import React from "react";

const totalAmount = props => {
  let sum = 0;
  if (props.expenses) {
    sum = props.expenses.reduce((acc, val) => {
      acc += +val.price;
      return acc;
    }, 0);
  }
  return <h3 className="heading-tertiary">Total Amount: ${sum}</h3>;
};

export default totalAmount;
