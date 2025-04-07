let humanScore = 0
let computerScore = 0


const random = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
     
    
}

const getComputerChoice = () => {
    let numbers = random(1, 4)
    
    if (numbers == 1){
        numbers = 'rock'
    } else if (numbers == 2){
        numbers = 'paper'
    } else {
        numbers = 'scissors'
    }
    
    return numbers

}

const getHumanChoice = () => {
    const choice = prompt('rock, paper or scissors? ')
    return choice
}


while (humanScore < 3 && computerScore < 3){
    let choice = getHumanChoice()
    let numbers = getComputerChoice()
    if (choice == 'rock' && numbers == 'scissors'){
        humanScore += 1;
        console.log('Ponto para o jogador! A pontuação atual é de', humanScore, 'para o humano contra', computerScore, 'para a maquina!');
        }
    else if (choice == 'paper' && numbers == 'rock'){
        humanScore += 1;
        console.log('Ponto para o jogador! A pontuação atual é de', humanScore, 'para o humano contra', computerScore, 'para a maquina!');
        }
    else if (choice == 'scissors' && numbers == 'paper'){
      humanScore += 1;
        console.log('Ponto para o jogador! A pontuação atual é de', humanScore, 'para o humano contra', computerScore, 'para a maquina!');
        }
    else {
        computerScore += 1;
        console.log('Ponto para a maquina! A pontuação atual é de', humanScore, 'para o humano contra', computerScore, 'para a maquina!');
    }
} 

if (humanScore == 3){
    console.log('Fim de jogo! Você venceu.')
} else {
    console.log('Fim de jogo! A maquina venceu.')
}