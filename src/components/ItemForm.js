import React from "react";

const ItemForm = ({ label, value, type = "text", ...otherProps }) => {
  return (
    <div>
      {type === "text" ? (
        <>
          <label>{label}</label>
          <input type={type} {...otherProps} />
        </>
      ) : (
        <>
          <label />
          {label}
          <input type={type} value={value} {...otherProps} />
        </>
      )}
    </div>
  );
};

export default ItemForm;
