const validationHandler = {
    // El método 'set' intercepta las asignaciones de propiedades.
    set(target, prop, value) {
        // Eliminar espacios en blanco al inicio y al final del valor
        const trimmedValue = value.trim();

        // Validar el valor basado en la propiedad que se está asignando
        switch (prop) {
            case "numericProp":
                // Verificar que el valor contenga solo dígitos
                if (!/^\d+$/.test(trimmedValue)) {
                    console.error("Error: La propiedad debe contener solo números.");
                    return false; // La asignación falla y no se realiza
                }
                console.log(`Valor válido para ${prop}: ${trimmedValue}`);
                break;
            case "alphanumericProp":
                // Verificar que el valor contenga solo letras (sin dígitos ni caracteres especiales)
                if (!/^[a-zA-Z]+$/.test(trimmedValue)) {
                    console.error("Error: La propiedad debe contener solo letras.");
                    return false; // La asignación falla y no se realiza
                }
                console.log(`Valor válido para ${prop}: ${trimmedValue}`);
                break;
            case "emailProp":
                // Verificar que el valor sea una dirección de correo electrónico válida
                if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(trimmedValue)) {
                    console.error("Error: La propiedad debe ser una dirección de correo válida.");
                    return false; // La asignación falla y no se realiza
                }
                console.log(`Valor válido para ${prop}: ${trimmedValue}`);
                break;
            case "dateProp":
                // Verificar que el valor sea una fecha válida
                if (isNaN(Date.parse(trimmedValue))) {
                    console.error("Error: La propiedad debe ser una fecha válida.");
                    return false; // La asignación falla y no se realiza
                }
                console.log(`Valor válido para ${prop}: ${trimmedValue}`);
                break;
            default:
                // Si la propiedad no es una de las esperadas, se rechaza la asignación
                console.error("Error: Propiedad no válida.");
                return false; // La asignación falla y no se realiza
        }

        // Si todas las validaciones son exitosas, se asigna el valor al objeto objetivo
        target[prop] = trimmedValue;
        return true; // La asignación es exitosa
    },
};

// Crear el proxy con el manejador de validación
const proxy = new Proxy({}, validationHandler);

// Ejemplos de uso:
proxy.numericProp = "123"; // Válido, valor asignado
proxy.alphanumericProp = "abc"; // Válido, valor asignado
proxy.emailProp = "user@example.com"; // Válido, valor asignado
proxy.dateProp = "2023-05-15"; // Válido, valor asignado

proxy.numericProp = "abc"; // Inválido, muestra error y no asigna el valor
proxy.alphanumericProp = "123"; // Inválido, muestra error y no asigna el valor
proxy.emailProp = "invalid-email"; // Inválido, muestra error y no asigna el valor
proxy.dateProp = "invalid-date"; // Inválido, muestra error y no asigna el valor

