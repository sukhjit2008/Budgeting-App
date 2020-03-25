import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const clearExpenses = () => {
  return (
    <button className="btn">
      clear expenses{" "}
      <FontAwesomeIcon icon={faTrashAlt} className="icon-faTrashAlt" />
    </button>
  );
};

export default clearExpenses;
