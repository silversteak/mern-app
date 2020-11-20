console.log("The environment is " + process.env.NODE_ENV);
console.log("The port is " + process.env.REACT_PRODUCTION_PORT);
export const PORT =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_PRODUCTION_PORT
    : process.env.REACT_APP_PORT;
