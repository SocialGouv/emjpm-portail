import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  preposeEtablissementDroitsDuProtegePageData,
  preposeEtablissementIndexPageData as data,
} from "../../../constants/preposeEtablissementPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={preposeEtablissementDroitsDuProtegePageData} />
  </>
);

export default Index;
