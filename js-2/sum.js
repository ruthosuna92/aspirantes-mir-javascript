//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

// escribe la función sum acá

function sum(array) {
    let number = 0
    for (let i = 0 ; i < array.length ; i++){
        number += array[i]
    }
    return number
}

//if (arraySum.length > 0){}
// Expected output: 10

console.log(sum([2, 3, 1])) // 6
console.log(sum([5, 8, 10, 12])) // 35
console.log(sum([])) // 0