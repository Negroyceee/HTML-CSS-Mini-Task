function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);

        if (randomNumber == 0){
            return 'paper'
        }
        else if (randomNumber == 1){ 
            return 'rock'
        }
        else{
            return 'scissor'
        }
        
}
let playerChoice = prompt("Enter your Choice: ");
let computerChoice = getComputerChoice();

if (playerChoice == "scissor" && computerChoice =="scissor"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Draw`)
}
else if(playerChoice == "rock" && computerChoice == "rock"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Draw`)
}
else if(playerChoice == "paper" && computerChoice == "paper"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Draw`)
}
else if (playerChoice == "scissor" && computerChoice =="paper"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Player Wins`)
}
else if(playerChoice == "rock" && computerChoice== "scissor"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Player Wins`)
}
else if(playerChoice == "paper" && computerChoice == "rock"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Player Wins`)
}
else if (playerChoice == "scissor" && computerChoice =="rock"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Computer Wins`)
}
else if(playerChoice == "rock" && computerChoice == "paper"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Computer Wins`)
}
else if(playerChoice == "paper" && computerChoice == "scissor"){
    console.log(`Player choose: ${playerChoice} \nComputer choose: ${computerChoice} \nResult: Computer Wins`)
}
else {
    console.log("Invalid Input")
}

