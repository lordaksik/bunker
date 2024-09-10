let creator = document.querySelector('.creator');
let regulations = document.querySelector('.regulations');
let number_players = document.querySelector('.number_players');
let regulations_close = document.querySelector('.regulations');
let number_players_close = document.querySelector('.number_players');
var close = document.getElementById("myDIV");
var close2 = document.getElementById("butt");
$('.button_creator').click(function () {
    creator.classList.add('activ');
});

$('.close').click(function () {
    close.classList.remove("activ");
});


$('.button_regulations').click(function () {
    regulations.classList.add("activ");
});
$('.regulations_close').click(function () {
    regulations_close.classList.remove("activ");
});
$('.button_number_players').click(function () {
    number_players.classList.add("activ");
});
$('.number_players_close').click(function () {
    number_players_close.classList.remove("activ");
    localStorage.setItem('player_kol', document.getElementById('tentacles').value)
});
$('.number_players_end').click(function () {
    number_players_close.classList.remove("activ");
    localStorage.setItem('player_kol', document.getElementById('tentacles').value)
});

