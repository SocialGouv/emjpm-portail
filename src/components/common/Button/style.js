const buttonStyle = {
  "&:active": {
    opacity: "0.8",
  },
  fontSize: 1,
  fontWeight: 500,
  lineHeight: "1.2",
  outline: "none",
  position: "relative",
  p: "10px",
  mx: "10px",
  transition: "150ms ease-in-out opacity",
  cursor: "pointer",
  "@media screen and (min-width: 1200px)": {
    ":first-of-type": {
      ml: 0,
    },
    ":last-of-type": {
      mr: 0,
    },
  },
  "@media screen and (max-width: 1199px)": {
    my: "5px",
  },
};

export { buttonStyle };
