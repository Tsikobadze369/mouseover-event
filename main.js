let container=document.querySelector('.container');
let squaresNum=500;
let colors=['#CF0A0A', '#D58BDD', '#FFDE00','#3CCF4E', '#F73D93','#F0FF42', '#5800FF','#F806CC']


for(let i=0;i<squaresNum;i++){
    let square=document.createElement('div');
    square.classList.add('square');

square.addEventListener('mouseover',()=>{
setColorToEl(square);
});
square.addEventListener('mouseout', ()=>{
removeColorFromEl(square);
});

    container.appendChild(square);
}

function setColorToEl(element){
    let color =getRandomColor();
    element.style.background=color;
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColorFromEl(element){
    element.style.background='color';
    element.style.boxShadow=`0 0 2px #000`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

