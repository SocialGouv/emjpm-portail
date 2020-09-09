import React from "react";

import SectionPage from "../components/SectionPage";
import { MentionsLegales } from "../content";

const MentionsLegalesPage = () => (
  <SectionPage
    data={{
      sections: [
        {
          _id: 0,
          content: <MentionsLegales />,
        },
      ],
    }}
  />
);

export default MentionsLegalesPage;
