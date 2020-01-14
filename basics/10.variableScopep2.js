// Global (name)
    // local
        // local
    // local

// ** Unexplicitly variable!!!!! 
// let name = 'Andrea'

if (true) {
    // let name = 'Pavlina' //it's a parenting road!!!
    if (true) {
        name = 'zwiva!' //assigning a new value!, the variable was never explicitly defined!!!!!!
        console.log(name)
    }
} 

if (true){
    console.log(name)

}
// zwiva!
// zwiva!



// let name = 'Andrea'

if (true) {
    // let name = 'Pavlina' //it's a parenting road!!!
    if (true) {
        let name = 'zwiva!' //right way, but for the upper example it will work, but must show error
        console.log(name)
    }
} 

if (true){
    console.log(name)

}
// zwiva!
// zwiva!