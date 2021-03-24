const express = require("express");
const app = express();
const port = 3000;
const rout = require("./Rout/index");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(rout);

app.use(errorHandler);

app.listen(port, () => {
  console.log(port);
});
