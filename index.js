const dynamicTest = ['I\'ll ask again, will you be my valentine?'
    ,'come on 😂 let\'s do that'
    ,'You make my heart skip a beat!'
    ,'Roses are red, violets are blue, be my valentine, and I\'ll always cherish you.'
    ,'Every moment with you is a treasure, will you be mine forever?'
]
let successfontSize = 2
let clickedTime = 0
document.querySelector('.failure').addEventListener( 'click',e => {
const successElem = document.querySelector('.success')
document.querySelector('h1').innerHTML = dynamicTest[clickedTime++]
successfontSize *=2
successElem.style.fontSize =  successfontSize+'rem'
})
document.querySelector('.success').addEventListener( 'click',e => {
    document.querySelector('.btnContainer').style.display = 'none'
    document.querySelector('h1').innerHTML = 'Sorry! we\'re just friend. 😂❤️'
    document.querySelector('.loveGif').setAttribute('src' , 'bubu-bubu-dudu.gif')
})