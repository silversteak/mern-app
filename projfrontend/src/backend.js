console.log("The environment is " + process.env.NODE_ENV);
console.log("The port is " + process.env.REACT_PRODUCTION_PORT);
export const PORT =
  process.env.NODE_ENV === "production"
    ? "https://ninja-thrones.herokuapp.com"
    : "http://localhost:8000";
