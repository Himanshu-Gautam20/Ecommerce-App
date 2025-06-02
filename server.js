const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to eCommerce-App",
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
