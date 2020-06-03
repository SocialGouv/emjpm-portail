import React from "react";
import { Flex } from "rebass";

import Breadcrumbs from "../../../components/Breadcrumbs";
import IndexPageWrapper from "../../../components/IndexPageWrapper";
import PageSection from "../../../components/PageSection";
import PageSectionsWrapper from "../../../components/PageSectionsWrapper";
import { mandataireIndividuelIndexPageData as data } from "../../../constants/mandataireIndividuelPageData";

const Index = () => (
  <>
    <Breadcrumbs />
    <Flex flexWrap="wrap" maxWidth={1400} mx="auto" justifyContent="center" />
    <IndexPageWrapper heading={data.heading}>
      <PageSectionsWrapper>
        {data.sections &&
          data.sections.map((item, index) => (
            <PageSection
              key={index}
              url={item.url}
              title={item.title}
              image={item.image}
              rowAlign
            />
          ))}
      </PageSectionsWrapper>
    </IndexPageWrapper>
  </>
);

export default Index;
