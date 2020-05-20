import React, { Fragment } from "react";
import { Box } from "rebass";

import ArticleSection from "./ArticleSection";
import MarkdownLayout from "./MarkdownLayout";
import SubPageSection from "./SubPageSection";

const SectionPanels = ({ currentSection, articles, activeArticle, setActiveArticle }) => {
  return (
    <Box sx={{ my: "auto" }}>
      <SubPageSection title={currentSection.title}>
        <MarkdownLayout>{currentSection.content}</MarkdownLayout>
      </SubPageSection>
      {articles &&
        articles.map((article) => (
          <Fragment key={article._id}>
            {activeArticle === article._id && (
              <ArticleSection
                article={article}
                articlesLength={articles.length}
                activeArticle={activeArticle}
                setActiveArticle={setActiveArticle}
              />
            )}
          </Fragment>
        ))}
    </Box>
  );
};

export default SectionPanels;
