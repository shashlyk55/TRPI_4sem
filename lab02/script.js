`use strict`

var saveButton = document.getElementById('saveButton')
var updateButton = document.getElementById('updateButton')

let naperstok1 = document.getElementById('naperstok1')
let naperstok2 = document.getElementById('naperstok2')
let naperstok3 = document.getElementById('naperstok3')

var circle = document.getElementById('circle')

var score = document.querySelector('span')


let randPlace

let naperstokHeight 
let naperstokWidth 
let ballDiametr 

saveButton.addEventListener('click', function(event){
    event.preventDefault()

    naperstokHeight = document.getElementById('inputHeight').value
    naperstokWidth = document.getElementById('inputWidth').value
    if(document.getElementById('inputDiametr').value > 95){
        score.textContent += " Недопустимый размер шарика (> 95)"
        return;
    }
    ballDiametr = document.getElementById('inputDiametr').value
    randPlace = Math.floor(Math.random()*3)

    circle.style.height = ballDiametr + 'px'
    circle.style.width = ballDiametr + 'px'
    circle.style.left = (naperstokWidth/2 - ballDiametr/2) + (naperstokWidth)*randPlace + 'px'
    
    //let sdvig = -(circle.offsetHeight - 50) + 'px'
    let sdvig = 0 + 'px'
    naperstok1.style.bottom = sdvig 
    naperstok1.style.height = naperstokHeight + 'px'
    naperstok1.style.width = naperstokWidth + 'px'

    naperstok2.style.bottom = sdvig 
    naperstok2.style.height = naperstokHeight + 'px'
    naperstok2.style.width = naperstokWidth + 'px'

    naperstok3.style.bottom = sdvig 
    naperstok3.style.height = naperstokHeight + 'px'
    naperstok3.style.width = naperstokWidth + 'px'
})


naperstok1.addEventListener('click',function(){
    //naperstok1.style.bottom = circle.offsetHeight + 50 + 'px'
    naperstok1.style.bottom = naperstokHeight + 'px'

    let guessOrNot = document.querySelector('p')
    if(randPlace==parseInt(naperstok1.alt)){
        score.textContent = parseInt(score.textContent)+1
        guessOrNot.innerText = 'Угадал'
    }
    else{
        score.textContent = parseInt(score.textContent)-1
        guessOrNot.innerText = 'Не угадал'
    }

    setTimeout(function(){
        randPlace = Math.floor(Math.random()*3)
        circle.style.left = (naperstokWidth/2 - ballDiametr/2) + naperstokWidth*randPlace + 'px'

        //let sdvig = -(circle.offsetHeight - 50) + 'px'
        let sdvig = 0 + 'px'
        naperstok1.style.bottom = sdvig

    }, 2000)
})
naperstok2.addEventListener('click',function(){
    //naperstok2.style.bottom = circle.offsetHeight + 50 + 'px'
    naperstok2.style.bottom = naperstokHeight + 'px'

    let guessOrNot = document.querySelector('p')
    if(randPlace==parseInt(naperstok2.alt)){
        score.textContent = parseInt(score.textContent)+1
        guessOrNot.innerText = 'Угадал'
    }
    else{
        score.textContent = parseInt(score.textContent)-1
        guessOrNot.innerText = 'Не угадал'
    }

    setTimeout(function(){
        randPlace = Math.floor(Math.random()*3)
        circle.style.left = (naperstokWidth/2 - ballDiametr/2) + naperstokWidth*randPlace + 'px'
        
        //let sdvig = -(circle.offsetHeight - 50) + 'px'
        let sdvig = 0 + 'px'
        naperstok2.style.bottom = sdvig 

    }, 2000)
})
naperstok3.addEventListener('click',function(){
    //naperstok3.style.bottom = circle.offsetHeight + 50 + 'px'
    naperstok3.style.bottom = naperstokHeight + 'px'

    let guessOrNot = document.querySelector('p')
    if(randPlace==parseInt(naperstok3.alt)){
        score.textContent = parseInt(score.textContent)+1
        guessOrNot.innerText = 'Угадал'
    }
    else{
        score.textContent = parseInt(score.textContent)-1
        guessOrNot.innerText = 'Не угадал'
    }

    setTimeout(function(){
        randPlace = Math.floor(Math.random()*3)
        circle.style.left = (naperstokWidth/2 - ballDiametr/2) + naperstokWidth*randPlace + 'px'
        
        //let sdvig = -(circle.offsetHeight - 50) + 'px'
        let sdvig = 0 + 'px'
        naperstok3.style.bottom = sdvig

    }, 2000)
})

updateButton.addEventListener('click', function(){
    window.location.reload()
})