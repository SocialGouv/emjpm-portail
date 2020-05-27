import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  devenirProfessionnelIndexPageData as data,
  procedureAutorisationServicesMandatairePageData,
} from "../../../constants/devenirProfessionnelPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={procedureAutorisationServicesMandatairePageData} />
  </>
);

export default Index;
