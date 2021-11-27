const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000)
})

promise.then(value => console.log(value));
promise.then(value => console.log(value + 1));
promise.then(value => console.log(value + 2))

const promise2 = new Promise((resolve, reject) => {
  throw(2)
})

promise.then(value => Promise.reject(1)).then(value => console.log(value))