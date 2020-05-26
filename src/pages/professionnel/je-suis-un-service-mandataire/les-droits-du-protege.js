import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  serviceMandataireDroitsDuProtegePageData,
  serviceMandataireIndexPageData as data,
} from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={serviceMandataireDroitsDuProtegePageData} />
  </>
);

export default Index;
