let color = "black";
let click = true;


function populateBoard(size){
const board = document.querySelector(".board")
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`

let amount = size * size;
for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
}
}

populateBoard(16);

function changeSize(input){
    
        if(input >= 2 && input <= 100){
            document.querySelector('.error').innerHTML = '';
            populateBoard(input);
        }else{
            document.querySelector('.error').innerHTML = 'Input must be between 2 and 100';
        }

}

function colorSquare(){
    if(click){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    if(color === 'random'){
        this.style.backgroundColor = '#' + randomColor;
    }else{
        this.style.backgroundColor = color;
    }
}
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    const board = document.querySelector(".board")
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
   if(e.target.tagName != 'BUTTON'){
    click = !click;
    if(click){
        document.querySelector('.mode').innerHTML = 'Mode: Coloring';
    }else{
        document.querySelector('.mode').innerHTML = 'Mode: Not Coloring';
    }
   }
});
