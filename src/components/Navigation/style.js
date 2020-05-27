const navigationStyle = {
  pl: 100,
  flexWrap: "wrap",
  maxWidth: 1400,
  maxHeight: 1000,
  mx: "auto",
  backgroundColor: "white",
  fontFamily: "Comfortaa",
};

const LinkStyle = {
  cursor: "pointer",
  color: "textPrimary",
  borderBottom: "2px solid",
  whiteSpace: "pre-line",
  mx: "15px",
  py: 1,
  textDecoration: "none",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "bold",
  borderColor: "white",
  ":hover": {
    borderColor: "primary",
    color: "primary",
  },
  ":focus": {
    outline: 0,
    border: 0,
    color: "primary",
  },
};

export { LinkStyle, navigationStyle };
