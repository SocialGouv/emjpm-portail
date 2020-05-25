import React from "react";

import MarkdownLayout from "./MarkdownLayout";
import SubPageSection from "./SubPageSection";

const MainSectionPanel = ({ mainContent }) => {
  return (
    <SubPageSection title={mainContent.title}>
      <MarkdownLayout>{mainContent.content}</MarkdownLayout>
    </SubPageSection>
  );
};

export default MainSectionPanel;
