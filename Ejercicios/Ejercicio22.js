let lista = []
for (let i = 0; i < 10; i++){
    while(true){
        try {
            let numero = parseInt(prompt("Ingrese un numero"))
            if(!isNaN(numero)){
                lista.push(numero)
                break;
            } else {
                throw Error("Numero invalido")
            }
        } catch (error) {
            console.error(error)
        }
    }
}

let proceso = (num) => {
    return new Promise((rs, rj) =>{
        setTimeout(() => {
            num % 2 === 0 ? rs(true) : rs(false)
        }, 1000)
    })
}

let filtro = async() =>{
    let R = []
    for (const iterator of lista) {
        if(await proceso(iterator)){
            R.push(iterator)
        }
    }
    return R
}

(async() => {
    console.log(await filtro())
})()