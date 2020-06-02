const linkStyle = {
  color: "textSecondary",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: "primary",
  },
};

const linkActiveStyle = {
  color: "textPrimary",
  cursor: "default",
  pointerEvents: "none",
  userSelect: "none",
};

export { linkStyle, linkActiveStyle };
