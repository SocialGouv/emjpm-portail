import React from "react";

import Page from "../components/Page";
import pages from "../constants/pages.json";

const CatchAllPage = props => {
  const { page, parentPage } = props;

  if (!page) {
    return null;
  }

  return <Page parentPage={parentPage} {...page} />;
};

CatchAllPage.getInitialProps = ({ asPath }) => {
  const page = pages.find(p => p.url === asPath);
  const [, parent] = asPath.split("/");

  const parentPage = pages.find(p => p.url === `/${parent}`);

  return {
    page,
    parentPage
  };
};

export default CatchAllPage;
