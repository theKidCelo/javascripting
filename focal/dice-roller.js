let diceRoller = function(number){
    let numbersRoled = [];
    let randomNumber;
        
    for( i = 0; i <= number-1; i++){
        
        randomNumber = Math.round( Math.random()*6)
        numbersRoled.push(randomNumber)
    }
    
    let Sentince = `Rolled ${number} dice: ${numbersRoled.join(', ')}`
    return Sentince
} 

//console.log(diceRoller(6))