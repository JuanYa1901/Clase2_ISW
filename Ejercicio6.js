let word = "Work Work Work"
let N1 = 20
let N2 = 10
//1) Crea una función que reciba un string y retorne el string en mayúsculas

console.log(`String en mayuscula`)
console.log("\n")
function palabraMayuscula(palabra){
    return palabra.toUpperCase()
}
console.log(palabraMayuscula(word))
console.log("\n")

//2) Crea una función que reciba un string y retorne el string en minúsculas
console.log(`String en minuscula`)
console.log("\n")
function palabraMinusculs(palabra){
    return palabra.toLowerCase()
}
console.log(palabraMinusculs(word))
console.log("\n")

//3) Crear una función que reciba como parámetro 2 números y los reste
console.log(`Resta entre dos numeros`)
console.log("\n")
function resta(numero1,numero2){
    return (numero1-numero2)
}

console.log(resta(N1,N2))
console.log("\n")

//4) Crear una función que reciba como parámetro 2 números y los divida
console.log(`Division entre dos numeros`)
console.log("\n")
function dividir(numero1,numero2){
    return (numero1/numero2)
}

console.log(dividir(N1,N2))
console.log("\n")

//5) Crear una función que reciba como parámetro 2 números y los multiplique
console.log(`RMultiplicacion entre dos numeros`)
console.log("\n")
function multiplicar(numero1,numero2){
    return (numero1*numero2)
}

console.log(multiplicar(N1,N2))
console.log("\n")

//6) Crear una función que reciba un string y devuelva la longitud del string

console.log(`largo de un String`)
console.log("\n")
function palabraLargo(palabra){
    return palabra.length
}
console.log(palabraLargo(word))
console.log("\n")