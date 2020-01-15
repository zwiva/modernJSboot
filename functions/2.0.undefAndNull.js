// let name 
// console.log(name) // shows: undefined !! represent the abscence of the value


// undefined for variable
let name // variables who arent assigned with a value
if (name === undefined) {
    console.log('Please provide a name')
} else {    
    console.log(name)
}

// undefined for function arguments
let square  = function (num) {  //functions that don't receive an argument but works with one declared in the function (num)
    console.log(num)
}
square() // argument isn't provided, shows undefined

// undefined as function return default value
let square2 = function (num2){
    console.log(num2) // shows undefined
}
let result = square2()
console.log(result) // shows undefined


