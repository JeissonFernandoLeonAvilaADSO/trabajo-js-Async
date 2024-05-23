let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 4000)
})

let prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4)
  }, 2000)
})

let eject = async() => {
  console.log(await prom1 + await prom2 + await prom3)
};eject()