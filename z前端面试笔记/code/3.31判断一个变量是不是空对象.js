let a = {}
//1 使用Object.keys()
if (typeof a === 'object' && a !== null && !Array.isArray(a) && Object.keys(a).length === 0) {
  console.log(Object.keys(a))
}
//2 使用JSON.stringfy
console.log(JSON.stringify(a))
//3 Object.getOwnProtypeNames
console.log(Object.getOwnPropertyNames(a))