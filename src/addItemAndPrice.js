import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class AddItemAndPrice extends Component {
  state = {
    item: "",
    price: ""
  };
  onItemChange = e => {
    e.preventDefault();
    const item = e.target.value;
    this.setState({ item });
  };
  onItemPrice = e => {
    e.preventDefault();
    const price = e.target.value.trim();
    this.setState({ price: price });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    if (
      !this.state.item.match(/^[a-zA-Z]+\s?[a-zA-Z]+$/) &&
      this.state.item.trim(" ") !== " "
    ) {
      this.setState({ error: "Must enter a string" });
    } else if (!this.state.price.match(/^[0-9]+$/)) {
      this.setState({ error: "Must be a positive number" });
    } else {
      this.props.onExpenseItemCreate(this.state);
      this.setState({
        item: "",
        price: "",
        error: null
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="form-box">
        <input
          placeholder="e.g item"
          className="input input-item"
          onChange={this.onItemChange}
          value={this.state.item}
        />
        <input
          placeholder="e.g price"
          className="input input-price"
          onChange={this.onItemPrice}
          value={this.state.price}
        />
        <span className="error">{this.state.error}</span>
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
