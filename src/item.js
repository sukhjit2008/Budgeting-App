import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const item = ({ expense, price, id }) => {
  return (
    <li className="items">
      <span className="items__item">{expense}</span>
      <input placeholder="price" className="items__price" value={price} />
      <span className="items__icons">
        <FontAwesomeIcon icon={faEdit} className="icon-edit" />
        <FontAwesomeIcon icon={faTrashAlt} className="icon-delete" />
      </span>
    </li>
  );
};

export default item;
