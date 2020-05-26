import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  preposeEtablissementIndexPageData as data,
  preposeEtablissementObligationsPreposePageData,
} from "../../../constants/preposeEtablissementPageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={preposeEtablissementObligationsPreposePageData} />
  </>
);

export default Index;
