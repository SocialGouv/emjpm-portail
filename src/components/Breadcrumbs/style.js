const linkStyle = {
  color: "textSecondary",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: "primary",
  },
  "@media screen and (max-width: 900px)": {
    mb: 1,
  },
};

const linkActiveStyle = {
  color: "textPrimary",
  cursor: "default",
  pointerEvents: "none",
  userSelect: "none",
};

const breadcrumbsLayout = {
  maxWidth: 1200,
  mx: "auto",
};

const breadcrumbsWrapper = {
  alignItems: "center",
  my: 4,
  mx: 3,
  fontSize: 1,
  color: "textSecondary",
  "@media screen and (max-width: 900px)": {
    flexFlow: "row wrap",
  },
};

export { breadcrumbsLayout, breadcrumbsWrapper, linkActiveStyle, linkStyle };
