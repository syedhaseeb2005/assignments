var player1score=document.querySelector('.player1Score')
var player2score=document.querySelector('.player2Score')
var player1DiceScore=document.querySelector('.player1DiceScore')
var player2DiceScore=document.querySelector('.player2DiceScore')
var player1=document.querySelector('.player1')
var player2=document.querySelector('.player2')
var newgamebtn=document.querySelector('.GameBtn')
var diceimg=document.querySelector('.dice-img')
var rollbtn=document.querySelector('.rollDicebtn')
var holdbtn=document.querySelector('.rollDicebtn')

rollbtn.addEventListener('click', Rolldicehandler)

var currentplayer = 1

function Rolldicehandler () {
    var dicenumber= Math.round(Math.random()*5) +1
    diceimg.classList.remove('hidden')
    diceimg.src=`./images/${dicenumber}.png`
    if(dicenumber == 1){
        if(currentplayer == 1) {
            player1DiceScore.textContent= 0;
            currentplayer=2
        }else {
            currentplayer=1
            player2DiceScore.textContent=0;
        }
        player1.classList.toggle('active')
        player2.classList.toggle('active')
    }else{
        if(currentplayer =1){
            player1DiceScore.textContent= +player1DiceScore.textContent + dicenumber
        }else {
            player2DiceScore.textContent= +player2DiceScore.textContent + dicenumber

        }
    }
}
newgamebtn.addEventListener('click', () => {
    location.reload();
})
holdbtn.addEventListener('click', hold)

function hold(){

    // player1.classList.toggle('active')
    // player2.classList.toggle('active')
    
    if(currentplayer == 1){
        currentplayer =2;

        player1score.textContent= +player1score.textContent + Number(player1DiceScore.textContent)
        player1DiceScore.textContent =0
        if(Number(player1score.textContent)>=50){
            alert('Player 1 win')
            
        }
    }else
    currentplayer= player1;
    player2score.textContent= +player2score.textContent + Number(player2DiceScore.textContent)
    player2DiceScore.textContent =0
    if(Number(player2score.textContent)>=50){
        alert('Player 2 win')
        
    }
    
    console.log(currentplayer, "==>>currentplayer")
    }   
