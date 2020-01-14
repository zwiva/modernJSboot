// if (condition true/false) {
    // bloque
// }

let temp = 31
let isFreezing = temp < 32 // es un booleano, true, no son iguales
// console.log(isFreezing)

if (isFreezing) {
    console.log('it is freezing outside') // si no cumple no imprime
}

if (temp < 32) {
    console.log('it is freezing outside') // si no cumple no imprime
}

//con 31 cumple ambas, se cumple el true para la primera!!!

// Challenge area

let age = 7

// if 7 or under print message about child pricing
if (age <= 7){
    console.log("It's child price to pay")
}

// if 65 or older print message about senior pricing
if (age >= 65) {
    console.log("It's senior price to pay")
}
