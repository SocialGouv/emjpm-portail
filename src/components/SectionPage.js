import React, { useState } from "react";
import { Box, Flex } from "rebass";

import SectionContent from "./SectionContent";

const findSectionById = (sectionId, sections) => {
  return sections.find((section) => section._id === sectionId);
};

const SectionPage = ({ data }) => {
  const [sectionId, setSectionId] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);

  const currentSection = findSectionById(sectionId, data.sections);
  const articles = currentSection.subSection && currentSection.subSection.articleContent;

  return (
    <Flex bg="whiteGray">
      <Box width="100%" maxWidth={1200} mx="auto">
        <SectionContent
          data={data}
          activeArticle={activeArticle}
          currentSection={currentSection}
          articles={articles}
          setActiveArticle={setActiveArticle}
          setSectionId={setSectionId}
        />
      </Box>
    </Flex>
  );
};

export default SectionPage;
