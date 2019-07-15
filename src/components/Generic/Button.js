import React from "react";
import classNames from "classnames";

const Button = ({ type, name, value, onClick, children }) => {
  const buttonClasses = classNames(
    {
      "item-delete-button": name === "deleteButton"
    },
    {
      "add-input-button": name === "addItemButton"
    },
    {
      "item-transfer-button": name === "transferButton"
    }
  );

  return (
    <div className={buttonClasses}>
      <button {...{ type, name, value, onClick }}>{children}</button>
    </div>
  );
};

export default Button;
