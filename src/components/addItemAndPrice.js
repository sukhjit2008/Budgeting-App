import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const addItemAndPrice = ({
  item,
  price,
  editMode,
  onSubmitHandler,
  onItemChange,
  onItemPrice,
  error
}) => {
  return (
    <form onSubmit={onSubmitHandler} className="form-box">
      <input
        placeholder="e.g item"
        className="input input-item"
        onChange={onItemChange}
        value={item}
      />
      <input
        placeholder="e.g price"
        className="input input-price"
        onChange={onItemPrice}
        value={price}
      />
      <span className="error">{error}</span>
      <button className="btn">
        {editMode ? "Submit" : "Edit"}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="Submit-button__icon"
        />
      </button>
    </form>
  );
};

export default addItemAndPrice;
