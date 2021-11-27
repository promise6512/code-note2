function parseBytes(str) {
  let arr = str.split(" ");
  let unitObj = {
    Kb: 1,
    Mb: 2,
    Gb: 3
  };
  if (arr.length === 1) {
    return arr[0];
  };
  let num = arr[0]; //大小
  let unit = arr[1]; //单位
  let res = [num].concat(new Array(unitObj[unit]).fill(1024));
  return res.join(" * ");
}
console.log(parseBytes('123'))
console.log(parseBytes('1.2 Kb'))
console.log(parseBytes('1.2 Mb'))
console.log(parseBytes('1.2 Gb'))
