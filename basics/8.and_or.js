let temp = 55

// logical and operator

if (temp >= 60 && temp <= 90) { // boolean && bolean, 55: false: no muestra nada!!!
    console.log("it's pretty nice out.")
} else if  (temp <= 0 || temp >= 120) { // or
    console.log('Do not go outside')
} else {
    console.log('Do whatever you want.')
}

// Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = true
// Are both vegan? Only offer vegan dishes
// At leats one vegan? Make sure offer some vegan option
// Else, no one is vegan, offer up anything in the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('For you: the vegan complete menu.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('We have some vegan options')
} else {
    console.log('We have the right meat for you.')
}