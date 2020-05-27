import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  appelCandidaturesProjetsPageData,
  devenirProfessionnelIndexPageData as data,
} from "../../../constants/devenirProfessionnelPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={appelCandidaturesProjetsPageData} />
  </>
);

export default Index;
