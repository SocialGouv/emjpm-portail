import React, { useState } from "react";
import { Flex } from "rebass";

import Breadcrumbs from "./Breadcrumbs";
import SectionContent from "./SectionContent";

const findSectionById = (sectionId, sections) => {
  return sections && sections.find((section) => section._id === sectionId);
};

const SectionPage = ({ data }) => {
  const [sectionId, setSectionId] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const currentSection = findSectionById(sectionId, data.sections);
  const articles =
    currentSection && currentSection.subSection && currentSection.subSection.articleContent;

  return (
    <>
      <Breadcrumbs />
      <Flex bg="whiteGray" maxWidth={1200} minHeight="68.5vh" justifyContent="start" mx="auto">
        <SectionContent
          data={data}
          currentSection={currentSection}
          articles={articles}
          setSectionId={setSectionId}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </Flex>
    </>
  );
};

export default SectionPage;
