import { Card, Heading4 } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box } from "rebass";

import Link from "./Link";

const style = (image) => ({
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
});

const PageSection = ({ url, title, splitTitle, image }) => (
  <Card sx={() => style(image)}>
    <Box textAlign="center" sx={{ position: "relative" }}>
      <Heading4 fontWeight="normal" color="white" mb={4}>
        {splitTitle ? (
          <div>
            {splitTitle.firstLine}
            <br />
            {splitTitle.secondLine}
          </div>
        ) : (
          <div>{title}</div>
        )}
      </Heading4>
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
