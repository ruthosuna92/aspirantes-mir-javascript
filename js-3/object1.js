let pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano"],
}

console.log(pedro.edad)

pedro.altura = 1.8

console.log(pedro.altura)

delete pedro.activo

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(pedro[llave])
    }
  }

  
  console.log("  Nombre: " + pedro.nombre);
  console.log("  Edad: " + pedro.edad);
  console.log("  Hobbies: " + pedro.hobbies.join(", "))
  console.log("  Altura: " + pedro.altura) 
/*Ejercicio 1:
En un archivo llamado object1.js Crea una variable llamada pedro de 
tipo objeto literal con las siguientes llaves y valores:
nombre - "Pedro Perez"
edad - 30
activo - true
hobbies - un arreglo con los siguientes elementos: "programar", 
"squash", "piano".
Imprime en la consola el valor de la llave edad.
Agrega una propiedad con llave estatura y valor 1.8
Elimina la propiedad con llave activo.
Recorre todas las propiedades e imprímelas en consola (una línea por 
    propiedad y separando la llave y el valor con dos puntos :).
Agrégale al objeto una función llamada saluda que retorne la frase 
“Hola, me llamo ” seguido del nombre de la persona.
Llama la función saluda y verifica el resultado, debería decir 
“Hola, me llamo Pedro Perez”.
Bonus I:
En un archivo llamado object2.js Crea un objeto literal llamado 
"persona" con las siguientes propiedades: nombre, edad, ciudad y 
profesión.
Imprime en la consola el objeto "persona" completo.
Crea una función llamada "presentacion" que tome el objeto "persona" 
como argumento y devuelva una cadena de texto que incluya el nombre, 
la edad y la ciudad de la persona.
Llama a la función "presentacion" y almacena el resultado en una 
variable llamada "mensaje".
Imprime en la consola el valor de la variable "mensaje".
Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que 
sea un arreglo con algunos pasatiempos.
Imprime en la consola la propiedad "hobbies" del objeto "persona".
Utiliza un ciclo for para imprimir en la consola cada uno de los 
elementos del arreglo de hobbies.*/