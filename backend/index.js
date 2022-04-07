const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { get } = require("http");
const app = express();
const port = 6002;

// skapa en route
app.get("/", (req, res) => res.send("hello heelo!"));
// get.app("/api", (req, res) => res.send(apiData));

//läs av public-folder
app.use(cors({ origin: "*" }));
app.use(express.static("public"));

//ange port
app.listen(port, () => {
  console.log("server is listening on port" + port);
});
