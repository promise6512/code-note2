const p = Promise.all([new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(1)
  },1000)
}), Promise.resolve(2)])
p.then((value, error) => {
  console.log(value)
})