var userinput=document.querySelector('.UserInput')
var checkbutton=document.querySelector('.checkbutton')
var score=document.querySelector('.score')
var highscore=document.querySelector('.high-score')
var rulebtn=document.querySelector('.rule-btn')
var againbtn=document.querySelector('.again-btn')
var numbox=document.querySelector('.numbox')
var msgofwin=document.querySelector('.msg-win')
var msgoflose=document.querySelector('.msg-lose')
var modal=document.querySelector('.modal')
var close=document.querySelector('.btn')
var overlay=document.querySelector('.overlay')

checkbutton.addEventListener('click', () => {

    if (score.textContent > 0) {



        var myNumber = Math.round(Math.random() * 20)
        
        numbox.textContent = myNumber

        if(userinput.value == myNumber){

            
            msgofwin.classList.remove('hidden');
            
            score.textContent= +score.textContent +1
            
            if(highscore.textContent < score.textContent){
            
                highscore.textContent = score.textContent
            }
        }else{
            
            msgofwin.classList.add('hidden');
            
            score.textContent = +score.textContent -1
        }
     } else {
            msgoflose.classList.remove('hidden')
        }

})

againbtn.addEventListener('click', () => {

    location.reload();
})
rulebtn.addEventListener('click', () => {
    console.log("rulebtn")
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
})
overlay.addEventListener('click',() => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})
close.addEventListener('click',() => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})




