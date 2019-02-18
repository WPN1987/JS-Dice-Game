let playerOne = document.getElementById("playerOne");
let diceTotal = 0; 
let diceText = document.getElementById("diceText");
let status = document.getElementById("status"); 

function rollDice () {
    let die1 = document.getElementById("diceText");     
    d1 = Math.floor(Math.random() * 6) + 1; 
    diceTotal += d1;    
    die1.innerHTML = d1;  
    status.innerHTML = "Your Score is " + diceTotal; 
   
  if(d1 == 1){
      diceTotal = 0;
      status.innerHTML = "Game Over you rolled a 1. Reset your Score"; 
    } else if (diceTotal == 20){  
      diceTotal = 0;   
    status.innerHTML = "Score 20 You Win! Reset Score";      
   } else if (diceTotal >= 21){
    diceTotal = 0;
    status.innerHTML = "Game Over You went Bust! Reset Score"; 
   }
}

function resetButton () {
      diceTotal = 0;
      diceText.innerHTML = "Roll Dice to play";   
      status.innerHTML = "Score Reset to " + diceTotal;    
}  
