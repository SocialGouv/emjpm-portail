import React, { Fragment } from "react";
import { Flex } from "rebass";

import Button from "./common/Button";

const ButtonBar = ({ data, setSectionId }) => (
  <Fragment>
    {data.sections && data.sections.length > 1 && (
      <Flex sx={{ mb: "50px" }}>
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
