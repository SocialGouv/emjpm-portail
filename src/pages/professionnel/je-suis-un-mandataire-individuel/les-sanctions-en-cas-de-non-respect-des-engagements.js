import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  mandataireIndividuelIndexPageData as data,
  SanctionsNonRespectEngagementsPageData,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={SanctionsNonRespectEngagementsPageData} />
  </>
);

export default Index;
