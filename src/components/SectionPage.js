import React, { Fragment, useEffect, useState } from "react";
import { Box, Flex, Heading } from "rebass";

import ArticleSection from "./ArticleSection";
import SubPageSection from "./SubPageSection";

const SectionPage = ({ data }) => {
  const [active, setActive] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => () => setActiveArticle(0), [active]);

  return (
    <Flex bg="whiteGray">
      <Box width="100%" maxWidth={1200} mx="auto">
        <Heading fontWeight="normal" mb={"50px"} mt={"28px"} fontSize={4}>
          {data.heading}
        </Heading>
        {data && data.sections && (
          <Fragment>
            <Box sx={{ mb: "50px" }}>
              <Flex>
                {data.sections.map((itemButton) => (
                  <button key={itemButton._id} onClick={() => setActive(itemButton._id)}>
                    {itemButton.title}
                  </button>
                ))}
              </Flex>
            </Box>
            <Box sx={{ my: "auto" }}>
              {data.sections.map((item) => {
                const articles = item.subSection && item.subSection.articleContent;
                if (item._id === active) {
                  return (
                    <Box key={item._id}>
                      <SubPageSection title={item.title}>{item.content}</SubPageSection>
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
                }
              })}
            </Box>
          </Fragment>
        )}
      </Box>
    </Flex>
  );
};

export default SectionPage;
