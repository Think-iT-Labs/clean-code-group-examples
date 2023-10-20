const fs = require("fs");
const { searchJumia, searchKonga } = require("./scrap-the-web/helpers");

searchKonga("wristwatches").then((products) => {
  fs.writeFileSync("products.json", JSON.stringify(products));
});
