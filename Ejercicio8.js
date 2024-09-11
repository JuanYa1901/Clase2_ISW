

// 1) Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
console.log("\n")
console.log(`Objeto persona`)
console.log("\n")
const persona = {
    nombre: "Jun",
    edad: 23,
    genero: "masculino"
}
console.log("\n")

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.genero)

// 2)Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías 
//y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, 
//imprimir cada propiedad del objeto y el tipo de dato que es.

console.log("\n")
console.log(`Objeto caja`)
console.log("\n")

const caja = {

    cuadernos: 10,
    lapices: 30,
    papel: 50,
    fotografias: 0,
    estado: true
}

if (caja.cuadernos <= 0 || caja.lapices <= 0) {
    caja.buenEstado = false;
}

console.log("Que hay en la caja: ", caja)

for (const propiedad in caja) {
    console.log(`Propiedad: ${propiedad}, Valor: ${caja[propiedad]}, Tipo de dato: ${typeof caja[propiedad]}`);
}

