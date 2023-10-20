const fs = require("fs");
const { searchJumia, searchKonga } = require("./scrap-the-web/helpers");

searchKonga("bags").then((products) => {
  fs.writeFileSync("products.json", JSON.stringify(products));
});
