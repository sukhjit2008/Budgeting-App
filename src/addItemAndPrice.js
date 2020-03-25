import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class AddItemAndPrice extends Component {
  render() {
    return (
      <form className="form-box">
        <input placeholder="e.g item" className="input input-item" />
        <input placeholder="e.g price" className="input input-price" />
        <button className="btn">
          Submit
          <FontAwesomeIcon
            icon={faChevronRight}
            className="Submit-button__icon"
          />
        </button>
      </form>
    );
  }
}
export default AddItemAndPrice;
