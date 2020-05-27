import { MDXProvider } from "@mdx-js/react";
import React, { Fragment } from "react";
import { Box, Heading } from "rebass";

import { mdComponents } from "../components/mdComponents";
import ButtonBar from "./ButtonBar";
import MainSectionPanel from "./MainSectionPanel";
import SectionPanels from "./SectionPanels";

const SectionContent = ({
  data,
  activeArticle,
  currentSection,
  articles,
  setActiveArticle,
  setSectionId,
}) => {
  return (
    <MDXProvider components={mdComponents}>
      <Box mx="20px">
        <Heading mb="50px" mt="28px" fontSize="18px" fontFamily="Comfortaa">
          {data.heading}
        </Heading>
        {data && data.mainSection && <MainSectionPanel mainContent={data.mainSection} />}
        {data && data.sections && (
          <Fragment>
            <ButtonBar data={data} setSectionId={setSectionId} />
            <SectionPanels
              currentSection={currentSection}
              articles={articles}
              activeArticle={activeArticle}
              setActiveArticle={setActiveArticle}
            />
          </Fragment>
        )}
      </Box>
    </MDXProvider>
  );
};

export default SectionContent;
