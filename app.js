const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline is working fine! v1");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
