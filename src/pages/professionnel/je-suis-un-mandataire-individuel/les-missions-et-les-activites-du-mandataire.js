import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  mandataireIndividuelIndexPageData as data,
  mandataireMissionPageData,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={mandataireMissionPageData} />
  </>
);

export default Index;
