const axios = require("axios");


const parseJSONFromJumia = (htmlData) => {
  const regex = /<script>window\.__STORE__\s*=(.*)\s*<\/script>/g;
  htmlData = htmlData.toString().replace(/<\/script>/g, "\n</script>");
  const matches = regex.exec(htmlData.toString());
  const jsonFound = matches[1].replace(/;/g, "");
  const jumiaSearchObject = JSON.parse(jsonFound);
  const products = jumiaSearchObject.products;
  return products;
};

const searchJumia = (searchString = "") => {
  searchString = searchString.replace(/ /g, "-");
  return axios
    .get("https://www.jumia.com.ng/catalog/?q=" + searchString)
    .then(function (response) {
      const products = parseJSONFromJumia(response.data);
      return products;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const parseJSONFromKonga = (data) => {
  const regex =
    /<script\s*id\s*=\s*"__NEXT_DATA__"\s*type="application\/json"\s*>(.*)\s*<\/script>/g;

  data = data.toString().replace(/<\/script>/g, "\n</script>");
  data = data.toString().replace(/<script>/g, "\n<script>");
  const matches = regex.exec(data);
  let jsonFound = matches[1];
  jsonFound = jsonFound.replace(/<\/script>/g, "\n</script>").replace(/;/g, "");

  const searchObject = JSON.parse(jsonFound);
  const products =
    searchObject.props.initialProps.pageProps.resultsState.content.hits;

  return products;
};

const searchKonga = (searchString = "") => {
  searchString = searchString.replace(/ /g, "-");
  return axios
    .get("https://www.konga.com/search?search=" + searchString)
    .then(function (response) {
      const products = parseJSONFromKonga(response.data);
      return products;
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = { searchKonga, searchJumia };
