import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  devenirProfessionnelIndexPageData as data,
  formationCertificatNationalCompetencesPageData,
} from "../../../constants/devenirProfessionnelPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={formationCertificatNationalCompetencesPageData} />
  </>
);

export default Index;
