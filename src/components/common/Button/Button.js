import PropTypes from "prop-types";
import React from "react";
import { Box, Button as RebassButton } from "rebass";

import { buttonStyle } from "./style";

const Button = (props) => {
  const { children, sx } = props;
  return (
    <RebassButton sx={{ ...buttonStyle, ...sx }} {...props}>
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
