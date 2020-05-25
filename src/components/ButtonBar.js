import React, { Fragment } from "react";
import { Flex } from "rebass";

import Button from "./common/Button";

const buttonBarStyles = {
  flexFlow: "row wrap",
  mb: "50px",
  "@media screen and (max-width: 1200px)": {
    justifyContent: "space-around",
  },
};

const ButtonBar = ({ data, setSectionId }) => (
  <Fragment>
    {data.sections && data.sections.length > 1 && (
      <Flex sx={buttonBarStyles}>
        {data.sections.map((itemButton) => (
          <Button key={itemButton._id} onClick={() => setSectionId(itemButton._id)}>
            {itemButton.title}
          </Button>
        ))}
      </Flex>
    )}
  </Fragment>
);

export default ButtonBar;
