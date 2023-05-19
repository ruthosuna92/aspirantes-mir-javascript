/*Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. 
Si el arreglo está vacío debe retornar -1.*/

// escribe la función maxIndex acá
function maxIndex(array) {
    if (array.length === 0){
        return -1
    }
    let maxIndexNumber = (array.length - 1)
    for (let i = 0 ; i <= array.length; i++){
            if (maxIndexNumber < array[i]){
         maxIndexNumber = array[i]
        }
    }
    return indexOf(maxIndexNumber)
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1