import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  devenirProfessionnelIndexPageData as data,
  procedureAgrementMandataireIndividuelsPageData,
} from "../../../constants/devenirProfessionnelPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={procedureAgrementMandataireIndividuelsPageData} />
  </>
);

export default Index;
