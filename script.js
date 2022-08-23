const player1El = document.querySelector('.player-0');
const player1Score = document.getElementById('score-0')
const player1CurrentScore = document.getElementById('current-0')

const player2El = document.querySelector('.player-1');
const player2Score = document.getElementById('score-1')
const player2CurrentScore = document.getElementById('current-1')

const newGameDOM  = document.getElementById('btn-new')
const rollDiceDOM = document.getElementById('btn-roll')
const holdDOM = document.getElementById('btn-hold')
const diceImg = document.querySelector('.dice')




let scores, roundScores, activePlayer, playing;

  scores = [0 ,0];
  roundScores = 0;
  activePlayer = 0;
  playing = true;

  
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;

  
 diceImg.style.display = 'none'

 
  rollDiceDOM.addEventListener('click', function(){

 if (playing){
      //random numbers
      let dice = Math.floor(Math.random() * 6) + 1 ;

    
    

      // //display the result
      
      diceImg.style.display = 'block';
      diceImg.src = 'dice-' + dice + '.png'
  
     
  
      // //updadate the round score
       if (dice !== 1){
      //   //add 
         roundScores += dice;
       
       document.querySelector('#current-' + activePlayer ).textContent  = roundScores;
  
       } else{
        //next player
       // activePlayer === 0 ? activePlayer === 1 : activePlayer = 0;
        
        nextPlayer();
  
      }
 }
 

  });


 holdDOM.addEventListener('click', function(){
// adding the current score to general score
 scores[activePlayer] += roundScores;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
  // the winner statement
  if (scores[activePlayer] >= 100){
    document.querySelector('#name-' + activePlayer).textContent = 'winner!'
    diceImg.style.display = 'none';
                             

    } 
      
    
   nextPlayer();

   
 
    
   });

  
   function nextPlayer (){

    if (activePlayer == 0){
      activePlayer = 1;
     }
     else{
      activePlayer = 0
     }
     roundScores= 0
     player1CurrentScore.textContent = 0;
     player2CurrentScore.textContent = 0;

     player1El.classList.toggle('player-active');
     player2El.classList.toggle('player-active');

     diceImg.style.display = 'none'


  }

  // new game fuction

  newGameDOM.addEventListener('click', function(){
    onclick=window.location.reload()
    // scores = [0,0];
    // roundScores = 0;
    // activePlayer = 0;
    // playing = true;
  
    
    // player1Score.textContent = 0;
    // player2Score.textContent = 0;
    // player1CurrentScore.textContent = 0;
    // player2CurrentScore.textContent = 0;
    // diceImg.style.display = 'none';

    // document.querySelector('#name-').remove('winner!'); 
   
  
  })


 