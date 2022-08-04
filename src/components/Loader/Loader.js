import ReactLoading from "react-loading";

export const Loader = () => {
  const centerLoader = {
    display: "flex",
    height: "90vh",
    width: "95vw",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
  };

  return (
    <div style={centerLoader}>
      <ReactLoading
        type={"spin"}
        color={"hsl(1, 92%, 38%)"}
        height={"60px"}
        width={"80px"}
      />
    </div>
  );
};
