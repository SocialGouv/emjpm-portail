import React from "react";

import SectionPage from "../components/SectionPage";
import { PolitiqueDeConfidentialite } from "../content";

const PolitiqueDeConfidentialitePage = () => (
  <SectionPage
    data={{
      sections: [
        {
          _id: 0,
          content: <PolitiqueDeConfidentialite />,
        },
      ],
    }}
  />
);

export default PolitiqueDeConfidentialitePage;
