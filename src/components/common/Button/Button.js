import PropTypes from "prop-types";
import React from "react";
import { Box, Button as RebassButton } from "rebass";

const buttonStyle = {
  "&:active": {
    opacity: "0.8",
  },
  fontSize: 1,
  fontWeight: 500,
  lineHeight: "1.2",
  mx: "auto",
  outline: "none",
  position: "relative",
  px: 3,
  py: 2,
  transition: "150ms ease-in-out opacity",
};

const Button = (props) => {
  const { children } = props;
  return (
    <RebassButton sx={buttonStyle} {...props}>
      <Box>{children}</Box>
    </RebassButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: null,
};
