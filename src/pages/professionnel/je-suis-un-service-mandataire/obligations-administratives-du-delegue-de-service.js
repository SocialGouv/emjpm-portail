import React from "react";

import Navigation from "../../../components/Navigation";
import SectionPage from "../../../components/SectionPage";
import {
  serviceMandataireIndexPageData as data,
  serviceMandataireObligationsAdminDelegueServicePageData,
} from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <>
    <Navigation navItems={data.sections} />
    <SectionPage data={serviceMandataireObligationsAdminDelegueServicePageData} />
  </>
);

export default Index;
