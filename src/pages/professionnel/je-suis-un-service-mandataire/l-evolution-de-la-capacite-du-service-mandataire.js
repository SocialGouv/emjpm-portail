import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  serviceMandataireEvolutionCapacitePageData,
  serviceMandataireIndexPageData as data,
} from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={serviceMandataireEvolutionCapacitePageData} />
  </>
);

export default Index;
