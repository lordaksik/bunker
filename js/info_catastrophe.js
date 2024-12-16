let gameStart = document.querySelector('.game_info');

let target;
let randCatastrophe, cata, cata_info, randBunker, bunker_info;
$('.button_start').click(function () {
    gameStart.classList.toggle('activ');

});
$('.buttons_start').click(function () {
    gameStart.classList.toggle('activ');
});
let text_info = document.querySelector('.text_info');

function main_info() {
    var info_game = document.createElement('div');
    info_game.className = 'main_info';
    info_game.innerHTML = "<h1 class=" + "name_catastrophe" + ">" + cata + "</h1><p>" + cata_info + "</p><p>" + target + "</p><h2 class=" + "name_bunker" + ">Бункер</h2><p>" + bunker_info + "</p>";
    return info_game;
}

$.getJSON("game_variables.json", function (json) {
    randCatastrophe = Math.floor(Math.random() * json.catastrophe.length);
    randBunker = Math.floor(Math.random() * json.bunker.length);
    bunker_info = json.bunker[randBunker];
    target = json.target;
    cata = json.catastrophe[randCatastrophe];
    cata_info = json.catastrophe_info[randCatastrophe];
    text_info.appendChild(main_info());
});

let kikPlayerBlock = document.querySelector('.block_kik');

let kikPlayer = document.querySelector('#kik_player');

$('.button_kik_accept').click(function () {
    let res = (kikPlayer.value) - 1;
    let kik = document.querySelector('.kik' + res);
    kik.style.display = 'none'
    kikPlayerBlock.style.display = 'none'
});
$('.button_back_accept').click(function () {
    let res = (kikPlayer.value) - 1;
    let kik = document.querySelector('.kik' + res);
    kik.style.display = 'block'
    kikPlayerBlock.style.display = 'none'
});
$('.buttons_kik').click(function () {
    kikPlayerBlock.style.display = 'flex'
});

const div = document.querySelector('#popup');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(kikPlayerBlock);
    const buttonKik = e.composedPath().includes(document.querySelector('.button_kik'));
    if (!withinBoundaries && !buttonKik) {
        kikPlayerBlock.style.display = 'none';
    }
})