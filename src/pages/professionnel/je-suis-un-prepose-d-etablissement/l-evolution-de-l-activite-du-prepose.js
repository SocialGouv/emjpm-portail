import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  preposeEtablissementEvolutionActivitePageData,
  preposeEtablissementIndexPageData as data,
} from "../../../constants/preposeEtablissementPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={preposeEtablissementEvolutionActivitePageData} />
  </>
);

export default Index;
