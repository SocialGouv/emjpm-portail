import getConfig from "next/config";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex, Link } from "rebass";

import { routes } from "../../constants/routes";
import { linkActiveStyle, linkStyle } from "./style";

const { appUrl } = getConfig().publicRuntimeConfig;

const getBreadcrumbsArr = (pathname) => {
  const crumbsArray = ["/"];

  if (pathname === "/") return crumbsArray;

  pathname.split("/").reduce((prev, curr) => {
    const currentPath = `${prev}/${curr}`;
    crumbsArray.push(currentPath);
    return currentPath;
  });

  return crumbsArray;
};

const BreadcrumbItem = ({ currentPath, crumb, routeLabel }) => {
  if (crumb && routeLabel) {
    return crumb === currentPath ? (
      <NextLink href={crumb} as={`${appUrl}${crumb}`} passHref>
        <Link
          sx={{
            ...linkStyle,
            ...linkActiveStyle,
          }}
        >
          {routeLabel}
        </Link>
      </NextLink>
    ) : (
      <>
        <NextLink href={crumb} as={`${appUrl}${crumb}`} passHref>
          <Link sx={linkStyle}>{routeLabel}</Link>
        </NextLink>
        <Box mx={1}>&gt;</Box>
      </>
    );
  }
  return null;
};

const Breadcrumbs = () => {
  const router = useRouter();
  const crumbsArray = getBreadcrumbsArr(router.pathname);
  return (
    <Box maxWidth={1200} mx="auto">
      <Flex alignItems="center" my={4} mx={3} fontSize={1} color="textSecondary">
        {crumbsArray &&
          crumbsArray.map((crumb, index) => (
            <BreadcrumbItem
              key={index}
              currentPath={router.pathname}
              crumb={crumb}
              routeLabel={routes[crumb] && routes[crumb].label}
            />
          ))}
      </Flex>
    </Box>
  );
};

export default Breadcrumbs;
