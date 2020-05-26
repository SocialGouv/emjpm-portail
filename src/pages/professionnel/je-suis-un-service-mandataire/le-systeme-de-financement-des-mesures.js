import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  serviceMandataireIndexPageData as data,
  serviceMandataireSystemeFinancementMesuresPageData,
} from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={serviceMandataireSystemeFinancementMesuresPageData} />
  </>
);

export default Index;
