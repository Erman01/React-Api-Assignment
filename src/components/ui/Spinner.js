import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="spinner on loading"
      style={{
        width: "30%",
        margin: "auto",
        display: "block",
        boxShadow: "box-shadow: 0 0 5px rgb(63, 148, 115)",
      }}
      alt="Loading..."
    />
  );
};

export default Spinner;
