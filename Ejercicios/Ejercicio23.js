fetch("ejercicio23JSON.json")
    .then(rsp => rsp.json())
    .then(dt => {
        let lista = Object.values(dt);
        let listaF = [];
        for (const iterator of lista) {
            try {
                if (!isNaN(iterator)) {
                    listaF.push(iterator);
                } else {
                    throw new Error("Número inválido: "+ iterator);
                }
            } catch (error) {
                console.error("Error:", error.message);
            }
        }
        console.log("Lista de números válidos:", listaF);
    })
    .catch(err => {
        console.error("Error al cargar el archivo:", err);
    });

