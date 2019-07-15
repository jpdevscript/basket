import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import "./basket.scss";

export default class Basket extends Component {
  componentDidMount() {
    this.props.onLoadList();
  }

  /**
   * @method handleChange
   * @description handle change-event for all input types
   * @param `list, event`
   */
  handleChange = list => ({ target: { value, name } }) => {
    this.props.onHandleChangeEvent(list, value, name);
  };

  /**
   * @method handleClick
   * @description handle click-event for all button types
   * @param `list, event`
   */
  handleClick = list => ({ target: { value, name } }) => {
    this.props.onHandleClickEvent(list, value, name);
  };

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
                onChange={this.handleChange(list)}
              />
              <div className="item-self">{v.value}</div>
              <Button
                type="button"
                name="deleteButton"
                value={v.id}
                onClick={this.handleClick(list)}
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
            onChange={this.handleChange(this.props.list)}
          />
          <Button
            type="button"
            name="addItemButton"
            onClick={this.handleClick(this.props.list)}
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
            onClick={this.handleClick(this.props.list)}
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
  onHandleChangeEvent: PropTypes.func,
  onHandleClickEvent: PropTypes.func
};
