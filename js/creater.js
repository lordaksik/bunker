let creator = document.querySelector('.creator');
let regulations = document.querySelector('.regulations');
let number_players = document.querySelector('.number_players');
let regulations_close = document.querySelector('.regulations');
let number_players_close = document.querySelector('.number_players');
var close = document.getElementById("myDIV");
var val;
$('.button_creator').click(function(){
	  console.log('Кнопка нажата!');
	creator.classList.add('activ');
});

$('.close').click(function(){
	  console.log('Кнопка нажата!');
  close.classList.remove("activ");
	});

$('.button_regulations').click(function(){
	  console.log('Кнопка нажата!');
 regulations.classList.add("activ");
	});
$('.regulations_close').click(function(){
	  console.log('Кнопка нажата!');
  regulations_close.classList.remove("activ");
	});
$('.button_number_players').click(function(){
	  console.log('Кнопка нажата!');
 number_players.classList.add("activ");
	});
$('.number_players_close').click(function(){
	  console.log('Кнопка нажата!');
 number_players_close.classList.remove("activ");
	});
		
butt.onclick = function() {
     val = document.getElementById('elem1').value;
    document.getElementById('str').innerHTML="Вы выбрали: "+val;
	localStorage.setItem('test',val);
};
