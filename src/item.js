import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class item extends Component {
  render() {
    return (
      <li className="items">
        <span className="items__item">{this.props.expense}</span>
        <input
          placeholder="price"
          className="items__price"
          value={this.props.price}
          onChange={() => {}}
        />
        <span className="items__icons">
          <FontAwesomeIcon icon={faEdit} className="icon-edit" />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="icon-delete"
            onClick={this.props.onDeleteHandler}
          />
        </span>
      </li>
    );
  }
}

export default item;
