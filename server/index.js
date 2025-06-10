const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello. from the server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
