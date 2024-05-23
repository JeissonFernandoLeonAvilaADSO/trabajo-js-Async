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
  }, 3000)
})

let eject = async () => {
  Promise.all([prom1, prom2, prom3]).then(() => console.log("Se completaron todas las promesas"))
};eject()