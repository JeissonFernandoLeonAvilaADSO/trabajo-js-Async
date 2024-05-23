const target = {
    msg1: "Hola",
    msg2: "mundo"
}

const handler = {
    get(target, prop, receiver) {
        if (prop === "msg2") {
            return "world";
        }
        return Reflect.get(...arguments);
    }
}

const proxy = new Proxy(target, handler)
console.log(proxy.msg1)
console.log(proxy.msg2)

