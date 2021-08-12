import PropTypes from "prop-types";
import React from "react";
import { Box, Flex, Text } from "rebass";

import LogoEtat from "../LogoEtat";
import { logoStyle, logoTextStyle } from "./style";

const Logo = (props) => {
  const { hasTitle, title } = props;

  return (
    <Flex>
      <Box sx={logoStyle} mr="6">
        <LogoEtat />
      </Box>
      {hasTitle && (
        <Box>
          <Text sx={logoTextStyle}>{title}</Text>
        </Box>
      )}
    </Flex>
  );
};

Logo.propTypes = {
  hasTitle: PropTypes.bool,
  title: PropTypes.string,
};

Logo.defaultProps = {
  hasTitle: true,
  title: "e-MJPM",
};

export default Logo;
