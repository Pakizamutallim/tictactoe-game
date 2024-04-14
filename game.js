
const playerOption = "✕";
const botOption = "O";

const boxes = Array.from({ length: 9 });

const gameBoard = document.querySelector(".game-board");
const divBox = gameBoard.getElementsByTagName("div");
const straightY = document.querySelector('.straight-y');
const straightX = document.querySelector('.straight-x');
const rightToLeft = document.querySelector('.right-to-left');
const leftToRight = document.querySelector('.left-to-right');
const playerPoint = document.querySelector('#playerspan')
const count = 0

playerPoint.textContent = count
// console.log(boxes);


gameBoard.addEventListener("click", (e) => {
    const etarget = e.target;
    if (etarget.textContent == "") {
        etarget.textContent = playerOption;
        boxes[etarget.id] = playerOption;
        const emptyboxes = boxes.map((box, i) =>{
            if (box) {
                return null
            }
            else{
                return i
            }
        }).filter((box) => (box !== null))
    
        // console.log(emptyboxes);
        boxeslen = emptyboxes.length;
        const botRandom = Math.floor(Math.random() * boxeslen);
        const botnumberID = emptyboxes[botRandom]
        boxes[botnumberID] = botOption;
        document.getElementById(botnumberID).textContent = botOption
    }
    isWinner()

    console.log(etarget.id);

});


const winConditions = [
    [0, 2, 1],
    [4, 5, 3],
    [6, 7, 8],
    [3, 0, 6],
    [7, 1, 4],
    [2, 8, 5],
    [8, 4, 0], 
    [4, 6, 2] 
]


const isWinner = () => {
    for (const condition of winConditions) {
        let [a, b, c] = condition;
        if (boxes[a] == playerOption && (boxes[a] == boxes[b]) && (boxes[a] == boxes[c])) {
            // return [a, b, c]
            if (a == 0 || b == 2 || c == 1) {
                straightX.style.display = "block"
            }
            else if (a == 4 ||b == 5 || c == 3){
                straightX.style.display = "block"
                straightX.style.top = "50%"
                point()
            }
            else if (a == 6 ||b == 7 || c == 8){
                straightX.style.display = "block"
                straightX.style.top = "83%"
                point()
            }
            else if (a == 3 || (b == 0 || c == 6)){
                straightY.style.display = "block"
                point()
            }
            else if (a == 7 || b == 1 || c == 4) {
                straightY.style.display = "block";
                straightY.style.left = "50%";
                point()
            }
            else if (a == 2 || b == 8 || c == 5) {
                straightY.style.display = "block";
                straightY.style.left = "83%";
                // point()
                // count += 1
                playerPoint.textContent = count
            }
            // point()
            // playerPoint.textContent = count
        }
    }
    return false;
}


const point = () => {
    count += 1
}


document.getElementById('btn').addEventListener('click', () => {
    window.location.reload()
})
