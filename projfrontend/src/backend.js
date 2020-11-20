console.log("The environment is " + process.env.NODE_ENV);
export const PORT =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_PRODUCTION_PORT
    : process.env.REACT_APP_PORT;
