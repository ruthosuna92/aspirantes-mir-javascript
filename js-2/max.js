/*Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max 
de JavaScript. Si el arreglo está vacío debe retornar undefined*/

// escribe la función max acá

function max(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0){
        return undefined
    }
    let maxNumber = 0
    for (let i = 0 ; i <= arrayOfNumbers.length; i++){
        const number = arrayOfNumbers[i]
        if (maxNumber < number){
         maxNumber = number
        }
    }
    return maxNumber
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
