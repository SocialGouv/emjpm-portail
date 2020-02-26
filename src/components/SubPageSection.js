import { Card, Heading4, Text } from "@socialgouv/emjpm-ui-core";
import { Box } from "rebass";

import SubNav from "./SubNav";

export default ({ title, text, link }) => (
  <Card
    bg="white"
    py={4}
    px={6}
    mb={4}
    sx={{
      borderRadius: 3,
      textAlign: "center"
    }}
  >
    <Heading4 mb={2}>{title}</Heading4>
    <Box width={[1, 1, 8/10]} mx="auto">
      <Text>{text}</Text>
      {link && (
        <Box mt={2}>
          {link.text} <a href={link.url} target="_blank">{link.url}</a>
        </Box>
      )}
    </Box>
  </Card>
);
