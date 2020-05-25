import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  droitsDuProtegePageData,
  mandataireIndividuelIndexPageData as data,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={droitsDuProtegePageData} />
  </>
);

export default Index;
