

const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


smallCups.forEach(function(cup,idx){

cup.addEventListener('click', ()=> fillCups(idx))

})




function fillCups(idx){

    if(smallCups[idx].classList.contains('fill')){
        idx--
    }
    else if(idx ===7 && smallCups[idx].classList.contains('fill')){

    }


smallCups.forEach(function(cups,idx2){

    if(idx >= idx2){
    cups.classList.add('fill')
    }
    else{
        cups.classList.remove('fill')
    }
    
    })
    
let totalCupss =  smallCups.length
let filledCups = document.querySelectorAll('.fill').length

if(filledCups === 0){
percentage.style.visibility='hidden'
percentage.style.height='0'
}
else{
    percentage.style.visibility='visible'
    percentage.style.height= `${filledCups/totalCupss * 330}px`
    percentage.innerText= `${filledCups/totalCupss * 100}%`

}


if(filledCups === totalCupss ){
    remained.style.visibility='hidden'
    remained.style.height='0'
}

else{

    remained.style.visibility='visible'
    liters.innerText= `${2- (250 * filledCups / 1000)}L`
    // remained.innerText= `${filledCups/totalCupss * 100}%`

}

    
}




// const smallCups = document.querySelectorAll('.cup-small')
// const liters = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')



// smallCups.forEach(function(cup,idx){

// cup.addEventListener('click', ()=> fillCups(idx))

// })


// function fillCups(idx){

// if(idx===7 && smallCups[idx].classList.contains('fill')){
//     idx--
// }

// else if(smallCups[idx].classList.contains('fill') && !smallCups[idx].nextElementSibling.classList.contains('fill')){
// idx--
// }


// smallCups.forEach(function(cup,idx2){
    
// if(idx >= idx2){
// cup.classList.add('fill')

// }else{
// cup.classList.remove('fill')

// }

// })

// updateBigCup()

// }


// function updateBigCup(){
// let filledCups = document.querySelectorAll('.fill').length
// // let smallCups   = document.querySelectorAll('.cup-small').length
// let totalCups   = smallCups.length

// if(filledCups === 0){
// percentage.style.height = '0'
// percentage.style.visibility = 'hidden'

// }else{

// percentage.style.visibility = 'visible'
// percentage.style.height = `${filledCups / totalCups * 330}px`
// percentage.innerText = `${filledCups / totalCups * 100}%`

// }

// if(totalCups === filledCups){
//    remained.style.visibility = 'hidden'
//     remained.style.height='0'
// }

// else{
// remained.style.visibility = 'visible'
// liters.innerText = `${2 - (250 * filledCups / 1000)}L`

// }

// }

