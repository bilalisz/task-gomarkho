import { TextField } from "@material-ui/core";
import React from "react";

const InputField = (props) => {
  const {
    label,
    value,
    size,
    id,
    variant,
    onChange,
    style,
    className,
    password,
    email,
    type,
  } = props;
  return (
    <TextField
      id={id}
      className={className}
      style={{ margin: "3px 0px", ...style }}
      label={label}
      value={value}
      variant={variant}
      size={size}
      type={password ? "password" : email ? "email" : type}
      onChange={onChange}
      {...props}
    />
  );
};

InputField.defaultProps = {
  variant: "outlined",
  size: "small",
  fullWidth: true,
};

export default InputField;
