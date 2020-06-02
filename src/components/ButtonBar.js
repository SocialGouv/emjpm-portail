import React, { Fragment } from "react";
import { Flex } from "rebass";

import Button from "./common/Button";

const buttonBarWrapperStyles = {
  flexFlow: "row wrap",
  mb: "50px",
  "@media screen and (max-width: 1000px)": {
    justifyContent: "center",
  },
};

const buttonBarStyles = {
  fontSize: 1,
  fontWeight: 500,
  p: "10px",
  mr: "20px",
  mb: "10px",
  cursor: "pointer",
  outline: "none",
  "@media screen and (min-width: 1200px)": {
    ":first-of-type": {
      ml: 0,
    },
    ":last-of-type": {
      mr: 0,
    },
  },
  "@media screen and (max-width: 1199px)": {
    my: "5px",
  },
  "@media screen and (max-width: 800px)": {
    width: "90%",
    mr: 0,
    py: "12px",
    lineHeight: 1.2,
  },
};

const ButtonBar = ({ data, setSectionId, activeButton, setActiveButton }) => {
  return (
    <Fragment>
      {data.sections && data.sections.length > 1 && (
        <Flex sx={buttonBarWrapperStyles}>
          {data.sections.map((itemButton, index) => {
            return (
              <Button
                key={itemButton._id}
                sx={{
                  ...buttonBarStyles,
                  backgroundColor: activeButton === index ? "primary" : "terciary",
                }}
                onClick={() => {
                  setActiveButton(itemButton._id);
                  setSectionId(itemButton._id);
                }}
              >
                {itemButton.title}
              </Button>
            );
          })}
        </Flex>
      )}
    </Fragment>
  );
};

export default ButtonBar;
