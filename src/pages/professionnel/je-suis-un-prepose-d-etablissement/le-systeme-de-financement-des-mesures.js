import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  preposeEtablissementIndexPageData as data,
  preposeEtablissementSystemeFinancementMesuresPageData,
} from "../../../constants/preposeEtablissementPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={preposeEtablissementSystemeFinancementMesuresPageData} />
  </>
);

export default Index;
