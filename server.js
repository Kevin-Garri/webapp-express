const express = require("express");
const app = express();
const port = env.PORT || 3000;

//middlewares
const errorsHandler = require("./middlewares/errorHandler")
const notFound = require("./middlewares/notFound")

app.listen(port, () => {
  console.log(`sono in ascolto sulla porta ${port}`);
});

//rotta 1
app.get("/", (req, res) => {
  res.send("I miei Film");
});

//rotta post
app.use("/film", router);

//error hand
app.use(errorHand);

//notFound hand
app.use(notFound);
