// undefined argument
let addUndef = function () {  
}
let resultUndef = addUndef()
console.log(resultUndef)

// multiple arguments
let add = function(a, b, c){
    return a + b + c
}
let result = add(10, 1, 1)
console.log(result)

// Default arguments

let getScoreText = function(name, score=0){
    return 'Name:' + name + '- Score: ' + score
}
getScoreText()
let scoreText = getScoreText('Holo')
console.log(scoreText)

// Challenge area
// total, tipPercent

let getTip = function (total, tipPercent = .2){
    return total * tipPercent
}

let tip = getTip(100, .25)
console.log(tip)