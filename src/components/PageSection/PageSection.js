import React from "react";
import { Box } from "rebass";

import Card from "../common/Card";
import Link from "../Link";
import { cardStyle, headingStyle, rowAlignCardStyle } from "./style";

const PageSection = ({ url, title, splitTitle, image, rowAlign }) => (
  <Card sx={() => (rowAlign ? rowAlignCardStyle(image) : cardStyle(image))}>
    <Box>
      <Box sx={headingStyle}>
        <Box sx={{ mb: 4, wordBreak: "break-word" }}>
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
    </Box>
  </Card>
);

export default PageSection;
