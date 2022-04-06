const querySelector = document.querySelector(".scoreboard")
const player_1 = document.getElementById("user1");
const computer = document.getElementById("computer");
const resultMessage = document.querySelector(".display_result > p");
const rockBtn = document.getElementById("r");
const paperBtn = document.getElementById("p");
const scissorsBtn = document.getElementById("s");
const userSpan = document.getElementById("user1_score");
const computerSpan = document.getElementById("computer_score");

// for the get started
document.getElementById("btn").addEventListener('click', function(){
  document.getElementById("inputField").style.display = "block";
  });
  
  //on submit
  document.getElementById("submit-btn").addEventListener("click",function(){
    let fillForm = document.getElementById("input");
    document.getElementById("user1").innerHTML = fillForm.value;
    fillForm.value ='';
  })






let userScore = 0;
let computerScore = 0;

// generating computer choice
function computerData(){
  let choices = ["r","p","s"];
  let compChoice = choices[Math.floor(Math.random()* choices.length)];
  return compChoice;
}

// for player 1
 function game(userchoice){
  const computerChoice =  computerData();
  switch(userchoice + computerChoice){
    case "pr" :
    case "rs" :
    case "sp" :
    win(userchoice,computerChoice);
    break;
    case "rp" :
    case "ps" :
    case "sr" :
    lose (userchoice, computerChoice);
    break;

    case "rr" :
    case "pp" :
    case "ss" :
    draw(userchoice, computerChoice);
    break;
  }
  
  }
  // function displayName(){

  // }
  function win(userchoice,computerChoice){
  userScore++;
  userSpan.innerHTML = userScore + ":";
  computerSpan.innerHTML = computerScore;
  resultMessage.display ="block";
   let nameForm = document.getElementById("user1").innerHTML
  resultMessage.textContent =`${nameForm} wins!!`;
  return 0;
  
    } 
    function lose (userchoice,computerChoice){
      computerScore++;
  computerSpan.innerHTML = computerScore ;
  userSpan.innerHTML = userScore + ":";
  resultMessage.innerHTML = "bot wins!!";
  return 0;
  
    } 
    function draw(userchoice,computerChoice){
      computerSpan.innerHTML = computerScore;
      userSpan.innerHTML = userScore + ":";
      resultMessage.innerHTML = "it's a draw!!"; 
      return 0;
    }
  
//add event listeners
rockBtn.addEventListener("click",function(){
  
  game("r");
  document.getElementById("inputField").style.display = "none";
  document.getElementById("btn").remove();
  });
  paperBtn.addEventListener("click",function(){
  // game1();
  game("p");
  document.getElementById("inputField").style.display = "none";
  document.getElementById("btn").remove();
 });

 scissorsBtn.addEventListener("click",function(){
  //  game1();
  game("s");
  document.getElementById("inputField").style.display = "none";
  document.getElementById("btn").remove();
 });
  



 


 





  
