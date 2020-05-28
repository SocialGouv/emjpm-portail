import React from "react";

import IndexPageWrapper from "../../../components/IndexPageWrapper";
import PageSection from "../../../components/PageSection";
import PageSectionsWrapper from "../../../components/PageSectionsWrapper";
import { serviceMandataireIndexPageData as data } from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <IndexPageWrapper heading={data.heading}>
    <PageSectionsWrapper>
      {data.sections &&
        data.sections.map((item, index) => (
          <PageSection key={index} url={item.url} title={item.title} image={item.image} rowAlign />
        ))}
    </PageSectionsWrapper>
  </IndexPageWrapper>
);

export default Index;
