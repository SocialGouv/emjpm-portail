import React, { Fragment } from "react";
import { Heading } from "rebass";

import ButtonBar from "./ButtonBar";
import SectionsPanels from "./SectionsPanels";

const SectionContent = ({
  data,
  activeArticle,
  currentSection,
  articles,
  setActiveArticle,
  setSectionId,
}) => {
  return (
    <Fragment>
      <Heading fontWeight="normal" mb={"50px"} mt={"28px"} fontSize={4}>
        {data.heading}
      </Heading>
      {data && data.sections && (
        <Fragment>
          <ButtonBar data={data} setSectionId={setSectionId} />
          <SectionsPanels
            currentSection={currentSection}
            articles={articles}
            activeArticle={activeArticle}
            setActiveArticle={setActiveArticle}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default SectionContent;
