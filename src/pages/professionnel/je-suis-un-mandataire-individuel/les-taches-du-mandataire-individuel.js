import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  mandataireIndividuelIndexPageData as data,
  TachesduMandataireIndividuelPageData,
} from "../../../constants/pageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={TachesduMandataireIndividuelPageData} />
  </>
);

export default Index;
