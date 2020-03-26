import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const clearExpenses = props => {
  return (
    <button className="btn" onClick={props.onClearExpensesHandler}>
      clear expenses
      <FontAwesomeIcon icon={faTrashAlt} className="icon-faTrashAlt" />
    </button>
  );
};

export default clearExpenses;
