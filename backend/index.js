const express = require("express");
var app = express();
const port = 3000;

const { productRouter } = require("./router");

//GET REQUEST
app.get("/", function (req, res) {
  res.send("<h1> Selamat Datang Di Apotek Online </h1>");
});

app.use("/products", productRouter);

app.listen(port, () => console.log(`API active at port ${port}`));
// app.listen(3000);
