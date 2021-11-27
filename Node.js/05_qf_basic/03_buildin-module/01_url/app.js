const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "debug" } }
});
const logger = require("log4js").getLogger("cheese");
//logger.level = "debug";
const urlString = "https://www.baidu.com:443/path/index.html?id=2"
const myURL = new URL(urlString);
//console.log(url.parse(urlString))
logger.debug(myURL)

//logger.debug(url.format(urlObj))
logger.debug(myURL.toString())

const urlParams = new URLSearchParams(myURL.search);
logger.debug(urlParams)
logger.debug(urlParams.get("id"))