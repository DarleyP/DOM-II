
import './less/index.less'

// Your code goes here!//

// load
window.onload = function (evt) {
    console.log(`event ${evt.type} fired, Ready to go!`);
    const heading = document.querySelector('h1');
    heading.textContent = "Ready TO GO"




// copy
window.addEventListener('copy', ()=>{
    navigator.clipboard.readText()
    .then(text => {
        console.log(text)
    })
})


// click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})
// 
// double click

document.body.addEventListener('dblclick', evt => {

    // evt.target.outerHTML = ''
})

// keydown

window.addEventListener('keydown', evt => {
    if(evt.key == 6){
        document.body.innerHTML = 'fu'
    }
})

//mouse move 
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    // console.log(`mouse is at ${clientX}, ${clientY}`)

})


//mouse enter
//mosue leave 

const des = document.querySelectorAll('.destination')
console.log(des)
for ( let dest of des){
    dest.addEventListener('mouseenter', evt => {
        dest.style.fontWeight = 'bold'
    })
    dest.addEventListener('mouseleave', evt => {
        dest.style.fontWeight = 'initial'
    })
}

 //cut 

document.body.addEventListener('cut', evt => {
    evt.target.style.color = "red"
})


window.addEventListener('keyup', evt => {
    if(evt.key == 'd'){
        document.body.innerHTML = 'fu'
    }
})

}