import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link } from "rebass";

const NavLink = ({ href, text }) => {
  const { asPath } = useRouter();
  const active = asPath.indexOf(href) !== -1;

  return (
    <NextLink href="/[...page]" as={href} passHref>
      <Link
        sx={{
          color: "black",
          cursor: "pointer",
          borderBottom: "2px solid",
          borderColor: active ? "primary" : "white",
          width: 220,
          mr: 4,
          pb: 2,
          textDecoration: "none"
        }}
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default NavLink;
