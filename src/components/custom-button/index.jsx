import React from "react";
import Button from "@material-ui/core/Button";
const CustomButton = (props) => {
  const { label, className, style, onClick, variant, buttonProps } = props;
  return (
    <Button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {label}
    </Button>
  );
};
CustomButton.defaultProps = {};

export default CustomButton;
