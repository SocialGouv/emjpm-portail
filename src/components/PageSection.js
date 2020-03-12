import { Card, Heading4 } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box } from "rebass";

import Link from "./Link";

const PageSection = ({ url, title, image }) => (
  <Card
    sx={{
      height: [150, 300],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: 4,
      py: 6,
      mb: 4,
      mx: 4,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: 3,
      color: "white",
      backgroundColor: "black"
    }}
  >
    <Box textAlign="center">
      <Heading4 fontWeight="normal" color="white" mb={4}>
        {title}
      </Heading4>
      <Link href={url} text="En savoir plus" sx={{ px: 4, py: 1 }} />
    </Box>
  </Card>
);

export default PageSection;
