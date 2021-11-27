const lodash = require("lodash");
function chunk(arr,size){
  return lodash.chunk(arr,size)
}

module.exports = chunk;