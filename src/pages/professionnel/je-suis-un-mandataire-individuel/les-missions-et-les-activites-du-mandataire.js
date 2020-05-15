import React, { useState } from "react";
import { Box, Flex, Heading } from "rebass";

import SubPageSection from "../../../components/SubPageSection";
import { mandataireMissionPageData as data } from "../../../constants/pageData";

const selectArticle = (count, articleContentLength) => {
  if (count < 0) return 0;
  if (count >= articleContentLength) return articleContentLength - 1;
  if (count < articleContentLength) return count;
  return;
};

const Index = () => {
  const [active, setActive] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);

  return (
    <Flex bg="whiteGray">
      <Box width="100%" maxWidth={1200} mx="auto">
        <Heading fontWeight="normal" mb={"50px"} mt={"28px"} fontSize={4}>
          {data.heading}
        </Heading>
        <Box sx={{ mb: "50px" }}>
          <Flex>
            {data &&
              data.sections &&
              data.sections.map((itemButton) => (
                <button key={itemButton._id} onClick={() => setActive(itemButton._id)}>
                  {itemButton.title}
                </button>
              ))}
          </Flex>
        </Box>
        <Box sx={{ my: "auto" }}>
          {data &&
            data.sections &&
            data.sections.map((itemSubSection) => {
              if (itemSubSection._id === active) {
                return (
                  <Box key={itemSubSection._id}>
                    <SubPageSection title={itemSubSection.title}>
                      {itemSubSection.content}
                    </SubPageSection>
                    {itemSubSection.subSection &&
                      itemSubSection.subSection.articleContent.map((article) => {
                        const articleContentLength =
                          itemSubSection.subSection.articleContent.length;

                        if (activeArticle === article._id) {
                          return (
                            <SubPageSection key={`${activeArticle}-id`} title={article.title}>
                              <Box sx={{ whiteSpace: "pre-line" }}>{article.content}</Box>
                              <Flex
                                sx={{
                                  width: "100%",
                                }}
                                flexWrap="wrap"
                                justifyContent="space-between"
                              >
                                <button
                                  onClick={() =>
                                    setActiveArticle(
                                      selectArticle(article._id - 1, articleContentLength)
                                    )
                                  }
                                >{`Article précédent`}</button>
                                <button
                                  onClick={() =>
                                    setActiveArticle(
                                      selectArticle(article._id + 1, articleContentLength)
                                    )
                                  }
                                >{`Article suivant`}</button>
                              </Flex>
                            </SubPageSection>
                          );
                        }
                      })}
                  </Box>
                );
              }
            })}
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
