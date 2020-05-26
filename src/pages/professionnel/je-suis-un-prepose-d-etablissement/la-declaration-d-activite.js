import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  preposeEtablissementDeclarationActivitePageData,
  preposeEtablissementIndexPageData as data,
} from "../../../constants/preposeEtablissementPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={preposeEtablissementDeclarationActivitePageData} />
  </>
);

export default Index;
