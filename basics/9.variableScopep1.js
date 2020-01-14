let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
        if (true) {
            let varFour = 'varFour'
        }
}

// console.log(varTwo) // error

// SCOPING!!!

// Global Scope - Defined outside of all code blocks (varOne)
    // if (){
        // code block
    // } 

// Local Scope - Defined inside a code block (varTwo)

// in a scope you can access variables defined in that scope, or in any parent/ancestor scope.

// global scope (varOne) (just varOne could be called)
    // local scope (varTwo) (both are accesible)
        // local scope (varFour)
    // local scope (varThree)

if (true) {
    let varThree = 'varThree'
}
