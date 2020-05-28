const cardStyle = (image) => ({
  position: "relative",
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: 4,
  py: 6,
  mb: 4,
  mx: 4,
  borderRadius: 3,
  color: "white",
  backgroundColor: "black",
  ":before": {
    content: '""',
    opacity: "0.4",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  },
  ":last-of-type": {
    mb: "40px",
  },
});

const rowAlignCardStyle = (image) => ({
  ...cardStyle(image),
  width: 400,
});

const headingStyle = {
  position: "relative",
  textAlign: "center",
  fontWeight: "normal",
  color: "white",
  fontFamily: "Quicksand",
  lineHeight: "1.25",
  fontSize: "18px",
};

export { headingStyle, cardStyle, rowAlignCardStyle };
