

const prompt = require('prompt-sync')({sigint: true})
const nameArray = []

do{
    console.log('Hi\n gib mir Tiernamen!')
    
    var vorname = prompt('gib gib ')
    if(vorname){
    nameArray.push(vorname)
    console.log(' deine Eingabe war:', vorname)
    }
}while(vorname)
console.log(nameArray)
