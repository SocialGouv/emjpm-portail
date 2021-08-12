const logoStyle = {
  width: ["77px"],
};

const logoTextStyle = {
  fontFamily: "Comfortaa",
  fontSize: 4,
  fontWeight: 500,
  lineHeight: "46px",
  ml: 3,
  mt: 2,
  "@media screen and (max-width: 700px)": {
    fontSize: 3,
    ml: 5,
    // mt: 1,
    lineHeight: 1.3,
  },
  "@media screen and (max-width: 500px)": {
    ml: 7,
  },
};

export { logoStyle, logoTextStyle };
