// Function - input (argument), code, output (return value)

let greetUser = function (){
    console.log('welcome user!')
}
// do not anything till here
greetUser() //call the function, show the 'welcome user'

let square = function (num) {
    let result = num * num
    return result // use one time in a function 
}

let value = square(3)
console.log(value) // console log shows the variable, not the function

// Challenge area

// convertFahrenheitToCelcius
// call a couple of times (32->0) (68->20)
// print the converted values

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5 / 9 + ' celsius')
    return celsius
}

let temperature = convertFahrenheitToCelcius(32)
let temperature2 = convertFahrenheitToCelcius(68)

console.log(temperature)
console.log(temperature2)