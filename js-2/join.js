/*Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por 
espacio sin usar el método join de los arreglos.*/

// escribe la función join acá
function join(array){
    let stringTemplate = ""
    for (let i = 0 ; i < array.length ; i++){
        stringTemplate = `${stringTemplate + array[i]} `
    }
    return stringTemplate
}


console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""