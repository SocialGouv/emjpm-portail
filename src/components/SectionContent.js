import { MDXProvider } from "@mdx-js/react";
import React, { Fragment } from "react";
import { Heading } from "rebass";

import { mdComponents } from "../components/mdComponents";
import ButtonBar from "./ButtonBar";
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
      <Heading fontWeight="bold" mb="50px" mt="28px" fontSize="18px">
        {data.heading}
      </Heading>
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
    </MDXProvider>
  );
};

export default SectionContent;
