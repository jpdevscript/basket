import React from "react";
import classNames from "classnames";

const Input = ({ type, name, value, onChange }) => {
  const inputContainerClasses = classNames(
    {
      "item-checkbox": name === "checkbox"
    },
    {
      "add-input": name === "addItem"
    }
  );

  const inputClasses = classNames({
    "add-item-input": name === "addItem"
  });

  return (
    <div className={inputContainerClasses}>
      <input className={inputClasses} {...{ type, name, value, onChange }} />
    </div>
  );
};

export default Input;
