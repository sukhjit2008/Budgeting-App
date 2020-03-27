import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class AddItemAndPrice extends Component {
  render() {
    const button = this.props.editMode ? (
      <button className="btn">
        Submit
        <FontAwesomeIcon
          icon={faChevronRight}
          className="Submit-button__icon"
        />
      </button>
    ) : (
      <button className="btn">
        Edit
        <FontAwesomeIcon
          icon={faChevronRight}
          className="Submit-button__icon"
        />
      </button>
    );
    return (
      <form onSubmit={this.props.onSubmitHandler} className="form-box">
        <input
          placeholder="e.g item"
          className="input input-item"
          onChange={this.props.onItemChange}
          value={this.props.item}
        />
        <input
          placeholder="e.g price"
          className="input input-price"
          onChange={this.props.onItemPrice}
          value={this.props.price}
        />
        <span className="error">{this.props.error}</span>
        {button}
      </form>
    );
  }
}
export default AddItemAndPrice;
