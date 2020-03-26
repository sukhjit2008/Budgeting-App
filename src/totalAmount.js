import React from "react";

const totalAmount = props => {
  let sum = 0;
  if (props.priceArr) {
    sum = props.priceArr.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0);
  }
  return <h3 className="heading-tertiary">Total Amount: ${sum}</h3>;
};

export default totalAmount;
