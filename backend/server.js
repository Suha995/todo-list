const express = require("express");

// init app & middleware
const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

// routes
app.get("/", (req, res) => {
  res.send({ msg: "welcome to the api" });
});
