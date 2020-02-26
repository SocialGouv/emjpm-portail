import React from "react";

import Page from "../components/Page";
import pages from "../constants/pages.json";

const CatchAllPage = props => {
  const { page, subPages } = props;

  if (!page) {
    return null;
  }

  return <Page subPages={subPages} {...page} />;
};

CatchAllPage.getInitialProps = ({ asPath }) => {
  const page = pages.find(p => p.url === asPath);
  const [, pageUrl] = asPath.split("/");

  const subPages = pages.filter(p => {
    return p.url !== `/${pageUrl}` && p.url.indexOf(pageUrl) !== -1;
  });

  return {
    page,
    pages,
    subPages
  };
};

export default CatchAllPage;
