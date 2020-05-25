import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  mandataireIndividuelIndexPageData as data,
  ObligationsAdministrativesMandatairePageData,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={ObligationsAdministrativesMandatairePageData} />
  </>
);

export default Index;
