let gameStart = document.querySelector('.game_info');

let target;
let randCatastrophe, randCatastrophe_info, cata, cata_info, randBunker, bunker_info;
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