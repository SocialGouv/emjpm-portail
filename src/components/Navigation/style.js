const navigationStyle = {
  px: 100,
  flexWrap: "wrap",
  maxWidth: 1400,
  mx: "auto",
  backgroundColor: "white",
  fontFamily: "Comfortaa",
};

const linkStyle = {
  cursor: "pointer",
  color: "textPrimary",
  borderBottom: "2px solid",
  width: "260px",
  mx: "15px",
  mt: "5px",
  py: "3px",
  textDecoration: "none",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "bold",
  ":hover": {
    borderColor: "primary",
    color: "primary",
  },
  ":focus": {
    outline: 0,
    border: 0,
    color: "primary",
    borderBottom: "2px solid",
    borderColor: "white",
  },
};

const linkTextWrapper = {
  minHeight: "45px",
};

export { linkStyle, navigationStyle, linkTextWrapper };
