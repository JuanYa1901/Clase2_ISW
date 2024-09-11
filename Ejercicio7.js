const vectore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const word = ["Hola","Mundo","Como","Estas","Work","Work","Work"]

//1) Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array
console.log(`Sume Vector`)
console.log("\n")
function sumaVector(numeros){
    let a = 0
    for(let i=0; i<numeros.length; i++){
        a += numeros[i]
    }

    return a;
}

console.log(sumaVector(vectore))
console.log("\n")

//2) Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array
console.log(`Promedio Vector`)
console.log("\n")
function promedioVector(numeros){
    let a = 0
    for(let i=0; i<numeros.length; i++){
        a += numeros[i]
    }

    return a/numeros.length;
}

console.log(promedioVector(vectore))
console.log("\n")

//3) Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas
console.log(`String en Mayusculasa`)
console.log("\n")
function palabraMyus(palabra){

    let word = [] 
        for(let i = 0; i<palabra.length;i++){
            
            word.push(palabra[i].toUpperCase())
        
        }
    return word
}

console.log(palabraMyus(word))
console.log("\n")

//4) Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares
console.log(`Solo pares del arreglo`)

console.log("\n")

function pares(numero){

    let vecot = []
    for(let i=0; i<numero.length;i++){

        if(numero[i]%2==0){

        
            vecot.push(numero[i])
           
        }

    }
    return vecot
}

console.log(pares(vectore))