import React from "react";
import { Box } from "rebass";

import Card from "./common/Card";
import Link from "./Link";

const cardStyle = (image) => ({
  position: "relative",
  height: [150, 300],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: 4,
  py: 6,
  mb: 4,
  mx: 4,
  borderRadius: 3,
  color: "white",
  backgroundColor: "black",
  ":before": {
    content: '""',
    opacity: "0.4",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  },
  ":last-of-type": {
    mb: "40px",
  },
});

const headingStyle = {
  position: "relative",
  textAlign: "center",
  fontWeight: "normal",
  color: "white",
  fontFamily: "Quicksand",
  lineHeight: "1.25",
  fontSize: "18px",
};

const PageSection = ({ url, title, splitTitle, image }) => (
  <Card sx={() => cardStyle(image)}>
    <Box sx={headingStyle}>
      <Box sx={{ mb: 4 }}>
        {splitTitle ? (
          <div>
            {splitTitle.firstLine}
            <br />
            {splitTitle.secondLine}
          </div>
        ) : (
          <div>{title}</div>
        )}
      </Box>
      <Link
        href={url}
        text="En savoir plus"
        sx={{
          px: 4,
          py: 1,
          mx: "auto",
        }}
      />
    </Box>
  </Card>
);

export default PageSection;
