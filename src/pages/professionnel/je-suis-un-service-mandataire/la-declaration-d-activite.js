import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  serviceMandataireDeclarationActivitePageData,
  serviceMandataireIndexPageData as data,
} from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={serviceMandataireDeclarationActivitePageData} />
  </>
);

export default Index;
