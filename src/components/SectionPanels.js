import React from "react";
import { Box } from "rebass";

import MarkdownLayout from "./MarkdownLayout";
import SubPageSection from "./SubPageSection";

const SectionPanels = ({ currentSection, articles }) => {
  return (
    <Box sx={{ my: "auto" }}>
      <SubPageSection title={currentSection.title}>
        <MarkdownLayout>{currentSection.content}</MarkdownLayout>
      </SubPageSection>
      {articles &&
        articles.map((article) => (
          <SubPageSection key={article._id} title={article.title}>
            <MarkdownLayout>{article.content}</MarkdownLayout>
          </SubPageSection>
        ))}
    </Box>
  );
};

export default SectionPanels;
