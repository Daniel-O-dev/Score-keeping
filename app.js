
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

var openedWindow;

function openWindow() {
    openedWindow = window.open('moreinfo.htm');
}



// Objects for each player
const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#Player1display'),
    set: 0,
    displaySet: document.querySelector('#Player1sets')
};

const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#Player2display'),
    set: 0,
    displaySet: document.querySelector('#Player2sets')
};


const resetbtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#maxScore');
const winningSetSelect = document.querySelector('#matchSets');

let winningSet = 3;
let winningScore = 3;
let isGameOver = false;

async function updateScores(player, opponent) {

    if (!isGameOver) {

        player.score += 1;


        if (player.score === winningScore) {
            wonSet(player, opponent);
        }

        player.display.textContent = player.score;
        opponent.display.textContent = opponent.score;

        player.displaySet.textContent = player.set;
        opponent.displaySet.textContent = opponent.set;
    }

    if (player.set === winningSet) {
        wonGame(player,opponent);
    }

}

function wonGame(player, opponent) {
    player.displaySet.style.color = '#198754';
    opponent.displaySet.style.color = '#dc3545';
    player.button.disabled = true;
    opponent.button.disabled = true;
}



function wonSet(player, opponent) {

    player.display.classList.add('text-success');
    opponent.display.classList.add('text-danger');
    player.button.disabled = true;
    opponent.button.disabled = true;
    player.set += 1;
if (player.set !== winningSet){
    setTimeout(refresh, 450);
}

}



p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});



p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

winningSetSelect.addEventListener('change', function () {
    winningSet = parseInt(this.value);
    reset();
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetbtn.addEventListener('click', reset);


function refresh() {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.display.classList.remove('text-success', 'text-danger');
    p2.display.classList.remove('text-danger', 'text-success');

    p1.button.disabled = false;
    p2.button.disabled = false;

}

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.set = 0;
    p2.set = 0;
    p1.displaySet.innerText = 0;
    p2.displaySet.innerText = 0;
    p1.display.classList.remove('text-success', 'text-danger');
    p2.display.classList.remove('text-danger', 'text-success');
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.displaySet.style.color = 'black';
    p2.displaySet.style.color = 'black';
}








