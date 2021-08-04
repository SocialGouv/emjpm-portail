const landingLinkStyle = {
  bg: "white",
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "primary",
  border: "solid 1px",
  borderColor: "secondary",
  fontSize: [2, 3],
  width: [270, 300],
  height: [80, 100],
  lineHeight: "1.3",
  m: ["15px", "20px"],
};

const disabledLinkStyle = {
  ...landingLinkStyle,
  backgroundColor: "mediumGray",
  cursor: "default",
  borderColor: "white",
  color: "white",
};

export { disabledLinkStyle, landingLinkStyle };
