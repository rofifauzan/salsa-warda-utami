const pages = [

{huruf:["ا","ب","ت","ث"],emoji:"🐱"},

{huruf:["ج","ح","خ","د"],emoji:"🐼"},

{huruf:["ذ","ر","ز","س"],emoji:"🐸"},

{huruf:["ش","ص","ض","ط"],emoji:"🐰"},

{huruf:["ظ","ع","غ","ف"],emoji:"🐵"},

{huruf:["ق","ك","ل","م"],emoji:"🐯"},

{huruf:["ن","ه","و","ي"],emoji:"🦄"}

]

let currentPage = 0

function renderPage(){

const container=document.getElementById("pageContainer")

container.innerHTML=""

const emoji=document.createElement("div")

emoji.style.fontSize="70px"

emoji.innerText=pages[currentPage].emoji

container.appendChild(emoji)

pages[currentPage].huruf.forEach(h=>{

const div=document.createElement("div")

div.className="huruf"

div.innerText=h

div.onclick=()=>showStar()

container.appendChild(div)

})

}

function showStar(){

const star=document.createElement("div")

star.className="star"

star.innerText="⭐"

star.style.left=Math.random()*window.innerWidth+"px"

star.style.top="60%"

document.body.appendChild(star)

setTimeout(()=>star.remove(),1000)

}

function nextPage(){

if(currentPage < pages.length-1){

currentPage++

renderPage()

}

}

function prevPage(){

if(currentPage > 0){

currentPage--

renderPage()

}

}

renderPage()