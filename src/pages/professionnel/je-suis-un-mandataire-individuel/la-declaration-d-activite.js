import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  DeclarationActivitePageData,
  mandataireIndividuelIndexPageData as data,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={DeclarationActivitePageData} />
  </>
);

export default Index;
