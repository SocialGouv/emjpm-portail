import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  CessationActivitePageData,
  mandataireIndividuelIndexPageData as data,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={CessationActivitePageData} />
  </>
);

export default Index;
