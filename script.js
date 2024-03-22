//selections

let players=document.querySelectorAll("input");
let btns=document.querySelectorAll(".dice");
let score=document.querySelectorAll("span");
let endButton = document.querySelector('#endButton');

//disabled end button in starting phase.once the roll dice button is disabled then end button is enable 

endButton.disabled = true;//do it as last


// btns=[btn1,btn2,btn3,btn4,btn5]

// btns[0].addEventListener("click",rollDice)
// btns[1].addEventListener("click",rollDice)
// btns[2].addEventListener("click",rollDice)


//1:
for (let t of btns){
    t.addEventListener("click",rollDice)
}

let btnClickCount = 0 // later when writing end btn
function rollDice(eventDetails){
   
//   roll the dice

let diceValue=1+parseInt(Math.random()*6)
// 1-6
//add the dice value to the score[span,span,span,span,span]
let clickedButton = eventDetails.target // 
 console.log(clickedButton)
  let clickedButton_id = clickedButton.id  // btn1,btn2.btn3,btn4,btn5
  console.log(clickedButton_id)
  let btn_id = clickedButton_id[3] // 1, 2
  console.log(btn_id)
  let btn_index = btn_id - 1 // 


  console.log(score)
score[btn_index].innerText=diceValue//

//disable the button
clickedButton.disabled=true;

btnClickCount = btnClickCount + 1;
    if(btnClickCount == 5){
        endButton.disabled = false;
    }

}

endButton.addEventListener("click",findWinner)

function findWinner(){
    //find the highest score

    let highestScore=0;
    for(let t of score){
    // console.log(t)//span
    let score_value = t.innerText;
    console.log(score_value)//
    if(score_value>highestScore){
        highestScore = score_value
    }
}

//find the index of all players with  the highest score

let winnerIndex=[]
for(let i = 0 ; i<=score.length-1; i++){
    let score_value = score[i].innerText
    console.log(score_value)
    if(score_value == highestScore){
      winnerIndex.push(i) //add value to end of array
    }
}

// find the names of the players with the highest score
let playerNames = ""
for(let t of winnerIndex){
    playerNames = playerNames + players[t].value + ","
}

 console.log(playerNames)


// display the winner
winMessage.innerText = playerNames + " wins"
}


