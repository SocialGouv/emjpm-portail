import React, { Fragment, useState } from "react";
import { Box, Flex, Heading } from "rebass";

import ArticleSection from "./ArticleSection";
import Button from "./common/Button";
import SubPageSection from "./SubPageSection";

const findSectionByid = (sectionId, sections) => {
  return sections.find((section) => section._id === sectionId);
};

const SectionPage = ({ data }) => {
  const [sectionId, setSectionId] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);

  const currentSection = findSectionByid(sectionId, data.sections);
  const articles = currentSection.subSection && currentSection.subSection.articleContent;

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
                  <Button key={itemButton._id} onClick={() => setSectionId(itemButton._id)}>
                    {itemButton.title}
                  </Button>
                ))}
              </Flex>
            </Box>
            <Box sx={{ my: "auto" }}>
              <Box>
                <SubPageSection title={currentSection.title}>
                  {currentSection.content}
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
            </Box>
          </Fragment>
        )}
      </Box>
    </Flex>
  );
};

export default SectionPage;
