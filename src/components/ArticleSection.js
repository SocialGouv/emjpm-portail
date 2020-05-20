import React from "react";
import { Box, Flex } from "rebass";

import SubPageSection from "../components/SubPageSection";
import Button from "./common/Button";
import MarkdownLayout from "./MarkdownLayout";

const ArticleSection = ({ article, articlesLength, activeArticle, setActiveArticle }) => {
  const selectArticle = (count) => {
    if (count < 0) return 0;
    if (count >= articlesLength - 1) return articlesLength - 1;
    if (count < articlesLength) return count;
    return;
  };

  return (
    <SubPageSection title={article.title}>
      <MarkdownLayout>{article.content}</MarkdownLayout>
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box sx={activeArticle === 0 && { visibility: "hidden" }}>
          <Button onClick={() => setActiveArticle(selectArticle(article._id - 1))}>
            Article précédent
          </Button>
        </Box>
        <Box sx={activeArticle === articlesLength - 1 && { visibility: "hidden" }}>
          <Button onClick={() => setActiveArticle(selectArticle(article._id + 1))}>
            Article suivant
          </Button>
        </Box>
      </Flex>
    </SubPageSection>
  );
};

export default ArticleSection;
