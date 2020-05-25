import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  FinancementMandatairesIndividuelsPageData,
  mandataireIndividuelIndexPageData as data,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={FinancementMandatairesIndividuelsPageData} />
  </>
);

export default Index;
