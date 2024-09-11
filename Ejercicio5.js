// 1) Imprimir en consola los números del 1 al 10
console.log(`1 al 10`)
console.log("\n")
for (let i = 1; i < 10; i++) {
    console.log(i)
  }

  console.log("\n")

// 2) Imprimir en consola los números del 10 al 1
console.log(`10 al 1`)
console.log("\n")
for (let i = 10; i > 0; i--) {
    console.log(i)
  }

console.log("\n")

// 3) Imprimir en consola los números del 1 al 10 pero solo los pares
console.log(`1 al 10 pares`)
console.log("\n")
let c = 0

while(c<=10){

    if(c%2==0){
        console.log(c)
    }
    c++;
}
console.log("\n")
// 4) Imprimir en consola los números del 1 al 10 pero solo los impares
console.log(`1 al 10 impares`)
console.log("\n")

for(let i = 0; i<=10; i++){

    if(i%2!=0){
        console.log(i)
    }

}
console.log("\n")
// 5) Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3
console.log(`1 al 10 pero solo los multiplos de 3`)
console.log("\n")

for(let i = 0; i<=10; i++){

    if(i%3==0){
        console.log(i)
    }

}
console.log("\n")
// 6) Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5
console.log(`1 al 10 pero solo los multiplos de 5`)
console.log("\n")

for(let i = 0; i<=10; i++){

    if(i%5==0){
        console.log(i)
    }

}
console.log("\n")
// 7) Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5
console.log(`1 al 10 pero solo los multiplos de 3 y 5`)
console.log("\n")

for(let i = 0; i<=10; i++){

    if(i%3==0 && i%5==0){
        console.log(i)
    }
}
console.log("\n")

// 8) Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5
console.log(`1 al 10 pero solo los multiplos de 3 o 5`)
console.log("\n")

for(let i = 0; i<=10; i++){

    if(i%3==0 || i%5==0){
        console.log(i)
    }

}
console.log("\n")