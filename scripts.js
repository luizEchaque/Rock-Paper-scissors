const container = document.querySelector('.MainContainer');
const botoes = document.createElement('div');
botoes.className = 'botoes';


['rock', 'paper', 'scissors'].forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => playGame(option));
    botoes.append(btn);
  });

const resultado = document.createElement('div');
resultado.className = 'resultado';
const escolhas = document.createElement('p');
const resultados = document.createElement('p');
resultado.append(escolhas, resultados);
container.append(botoes, resultado)

//LOGICA DO JOGO
let humanScore = 0
let computerScore = 0

const random = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);  
    
}

const getHumanChoice = (option) => {
    return option.textContent
}

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    return options[random(0,3)];

}

const choice = ['Pedra', 'Papel', 'Tesoura'];

const playGame = (humanChoice) => {
    let computerChoice = getComputerChoice();
    if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')){
        humanScore++;
    } if (humanChoice === computerChoice){
     
    }else {
        computerScore++;
    } 

  escolhas.textContent = `You chose: ${humanChoice} | The Computer chose: ${computerChoice}`;
  resultados.textContent = `Your score: ${humanScore} | Computer Score:  ${computerScore}`;
}


