import pages from "../constants/pages.json";
import Page from "../components/Page";

const CatchAllPage = props => {
  const { pages, page, subPages } = props;

  if (!page) {
    return null;
  }

  return (
    <Page subPages={subPages} {...page} />
  );
};

CatchAllPage.getInitialProps = ({ asPath }) => {
  const page = pages.find(p => p.url === asPath);
  const [_, pageUrl, subPageUrl] = asPath.split("/");

  const subPages = pages.filter(p => {
    return p.url !== `/${pageUrl}` && p.url.indexOf(pageUrl) !== -1;
  });

  return {
    pages,
    page,
    subPages
  };
};

export default CatchAllPage;
