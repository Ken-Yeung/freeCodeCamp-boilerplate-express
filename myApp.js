let express = require("express");
let app = express();

app.route("/").get((req, res) => {
  console.log("Hello World");
  res.sendFile(process.cwd() + '/views/index.html');
});

module.exports = app;
