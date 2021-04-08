import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex, Link } from "rebass";

import { routes } from "../../constants/routes";
import { breadcrumbsLayout, breadcrumbsWrapper, linkActiveStyle, linkStyle } from "./style";

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
      <NextLink href={crumb} as={`${crumb}`} passHref>
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
      <Flex>
        <NextLink href={crumb} as={`${crumb}`} passHref>
          <Link sx={linkStyle}>{routeLabel}</Link>
        </NextLink>
        <Box mx={1}>&gt;</Box>
      </Flex>
    );
  }
  return null;
};

const Breadcrumbs = () => {
  const router = useRouter();
  const crumbsArray = getBreadcrumbsArr(router.pathname);
  return (
    <Flex sx={breadcrumbsLayout}>
      <Flex sx={breadcrumbsWrapper}>
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
    </Flex>
  );
};

export default Breadcrumbs;
