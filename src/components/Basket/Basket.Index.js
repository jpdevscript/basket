import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import "./basket.scss";

export default class Basket extends Component {

  componentDidMount() {
    this.props.onLoadList();
  }

  handleItemCheckbox = list => event => {
    this.props.onItemCheckboxEvent(list, event.target.value);
  }

  handleItemDelete = list => event => {
    this.props.onItemDeleteEvent(list, event.target.value);
  }

  handleOnChangeAddItem = list => event => {
    this.props.onChangeAddItemEvent(list, event.target.value);
  }

  handleItemAdd = list => event => {
    this.props.onItemAddEvent(list, event.target.value);
  }

  handleItemTransfer = list => event => {
    this.props.onItemTransferEvent(list, event.target.value);
  }

  renderList = (data, list) => {
    return (
      <>
        {data.map(v => {
          return (
            <div className="list-item" key={v.id}>
              <Input
                type="checkbox"
                name="checkbox"
                value={v.id}
                onChange={this.handleItemCheckbox(list)}
              />
              <div className="item-self">{v.value}</div>
              <Button
                type="button"
                name="deleteButton"
                value={v.id}
                onClick={this.handleItemDelete(list)}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <div className="list-container">
        <div className="add-item-container">
          <Input
            type="text"
            name="addItem"
            value={this.props.addItemValue}
            onChange={this.handleOnChangeAddItem(this.props.list)}
          />
          <Button
            type="button"
            name="addItemButton"
            onClick={this.handleItemAdd(this.props.list)}
          >
            Add
          </Button>
        </div>
        <div className="list-items-container">
          {this.renderList(this.props.listData, this.props.list)}
        </div>
        <div className="item-transfer-container">
          <Button
            type="button"
            name="transferButton"
            onClick={this.handleItemTransfer(this.props.list)}
          >
            Transfer
          </Button>
        </div>
      </div>
    );
  }
}

Basket.propTypes = {
  addItemValue: PropTypes.string,
  list: PropTypes.string,
  listData: PropTypes.array,
  handleItemCheckbox: PropTypes.func,
  handleItemDelete: PropTypes.func,
  handleOnChangeAddItem: PropTypes.func,
  handleItemAdd: PropTypes.func,
  handleItemTransfer: PropTypes.func,
};
