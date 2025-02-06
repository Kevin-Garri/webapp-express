const express = require("express");
const app = express();
const port = env.PORT || 3000;
require("dotenv").config();
const movieRouter = require("./routes/movieRouter");

//middlewares
const errorsHandler = require("./middlewares/errorHandler")
const notFound = require("./middlewares/notFound")

//parsing body
app.use(express.json());

//listen
app.listen(port, () => {
  console.log(`sono in ascolto sulla porta ${port}`);
});

//rotta 1
app.get("/", (req, res) => {
  res.send("I miei Film");
});

//rotta film
app.use("/film", movieRouter);

//error handler
app.use(errorsHandler);

//notFound
app.use(notFound);
