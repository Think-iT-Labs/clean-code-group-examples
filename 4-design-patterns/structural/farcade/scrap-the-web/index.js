const express = require("express");
const cors = require("cors");
const { searchJumia, searchKonga } = require("./helpers");
const app = express();

app.use(cors());
app.get("/products", (req, res) => {
  let searchString = req.query.q || "";
  const merchantSearch =
    req.query.merchant === "jumia" ? searchJumia : searchKonga;
  searchString = searchString.trim().replace(/ /g, "-");

  console.log(`searchString="${searchString}"`)
  merchantSearch(searchString).then((products) => res.json(products));
});

app.listen(4000, () => {
  console.log("Listening");
});
