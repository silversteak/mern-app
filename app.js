require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const dataRoutes = require("./routes/dataBattle");

//DB Connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Not able to connect");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", dataRoutes);

//PORT
const port = process.env.PORT || 8000;

//Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("projfrontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "projfrontend", "build", "index.html")
    );
  });
}

//Starting a server
app.listen(port, () => {
  console.log("Listening " + port);
});
