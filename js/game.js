let cart = [
    "Бункер находится на горе", "Рядом есть бункер с 2 мужчинами химиками",
    {
        name: 'genderOne',
        info: 'Меняете пол выбранному игроку'
    }
];
let cart2 = ["Бункер находится на горе1", "Рядом есть бункер с 2 мужчинами химиками2"];
var res = localStorage.getItem('player_kol');
let proff, poll, healths, dopNavv, humanQualitiess, hobbyy, phobiass, luggages;
let cart_first, cart_two;
var randPol, randProf, randHealth, randDopNav, randHumanQualities, randHobby, randPhobias, randLuggage, randCart,
    randCart2;
let game = document.querySelector('.game');
$.getJSON("game_variables.json", function (jsons) {
    function createDiv() {
        var div = document.createElement('div');
        div.className = 'player';
        div.innerHTML = "<h1 class=" + "menu" + i + "><a href=" + '#' + " >Игрок " + (i + 1) + "</a></h1><div class=>" +
            "<ol class=" + 'specifications' +
            "></ol></div><div class=" + "cartGame" + "><h3 class=" + "AllCart" + i + ">Карты действия:</h3><div class=" + "actionCards" + "><p class=" + "cartGamers" + i +
            ">1: <span  class=" + "cart" + i + ">" + cart_first + "</span></p><p class=" + "use" + "><button class=" + "cartUseFirst" + i + ">Использовать</button></p><p class=" + "cartGamers2" + i + ">2:<span class=" + "cart2" + i + ">" + cart_two + "</span></p></span><p  class=" + "use" + "><button class=" + "cartUseTwo" + i + ">Использовать</button></p></div></div>";
        return div;
    }

    function createSpecifications() {
        let fragment = new DocumentFragment();

        for (let k = 0; k < 8; k++) {
            let li = document.createElement('li');

            if (k === 0) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Пол: </b><span>' + poll + '</span></div></div>';
            }
            if (k === 1) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Профессия: </b>' + proff + '</div></div>';
            }
            if (k === 2) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Здоровье: </b>' + healths + '</div></div>';
            }
            if (k === 3) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Доп. инф.: </b>' + dopNavv + '</div></div>';
            }
            if (k === 4) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Человеч. кач.: </b>' + humanQualitiess + '</div></div>';
            }
            if (k === 5) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Хобби: </b>' + hobbyy + '</div></div>';
            }
            if (k === 6) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Фобии: </b>' + phobiass + '</div></div>';
            }
            if (k === 7) {
                li.innerHTML = '<div class=' + 'dab' + i + k + '><div class=' + "activ" + i + k + '> <b>Багаж: </b>' + luggages + '</div></div>';
            }
            fragment.append(li);

        }

        return fragment;
    }

    function randomCart() {
        randPol = Math.floor(Math.random() * jsons.pol.length);
        poll = jsons.pol[randPol];
        jsons.pol.splice(randPol, 1);
        randCart = Math.floor(Math.random() * cart.length);
        if (typeof cart[randCart] === 'object') {
            if (cart[randCart].name === 'genderOne') {
                //cart_first=cart[randCart].info;
                cart_first = '<span>' + cart[randCart].info + ' </span><input type="text" id=' + cart[randCart].name + ' size="1">';
            }
        } else {
            cart_first = cart[randCart];
        }
        cart.splice(randCart, 1);


        randCart2 = Math.floor(Math.random() * cart2.length);
        cart_two = cart2[randCart];
        cart2.splice(randCart, 1);
        randProf = Math.floor(Math.random() * jsons.prof.length);
        proff = jsons.prof[randProf];
        jsons.prof.splice(randProf, 1);
        randHealth = Math.floor(Math.random() * jsons.health.length);
        healths = jsons.health[randHealth];
        jsons.health.splice(randHealth, 1);
        randPhobias = Math.floor(Math.random() * jsons.phobias.length);
        phobiass = jsons.phobias[randPhobias];
        jsons.phobias.splice(randPhobias, 1);
        randLuggage = Math.floor(Math.random() * jsons.luggage.length);
        luggages = jsons.luggage[randLuggage];
        jsons.luggage.splice(randLuggage, 1);
        randHobby = Math.floor(Math.random() * jsons.hobby.length);
        hobbyy = jsons.hobby[randHobby];
        jsons.hobby.splice(randHobby, 1);
        randDopNav = Math.floor(Math.random() * jsons.dopNav.length);
        dopNavv = jsons.dopNav[randDopNav];
        jsons.dopNav.splice(randDopNav, 1);
        randHumanQualities = Math.floor(Math.random() * jsons.humanQualities.length);
        humanQualitiess = jsons.humanQualities[randHumanQualities];
        jsons.humanQualities.splice(randHumanQualities, 1);
    }

    for (var i = 0; i < res; i++) {
        randomCart();
        game.appendChild(createDiv());
        document.querySelectorAll('[class=specifications]')[i].appendChild(createSpecifications());

    }

    for (let i = 0; i < res; i++) {
        for (let k = 0; k < 8; k++) {
            let display_none = document.querySelector('.dab' + i + k);
            $(display_none).css('display', 'none');
        }
    }

    for (let i = 0; i < res; i++) {
        let menu_border = document.querySelector('.dab' + i + 0);

    }

    for (let i = 0; i < res; i++) {
        for (let k = 0; k < 8; k++) {
            let plar = document.querySelector('.activ' + i + k);
            let menu_game0 = document.querySelector('.dab' + i + k);
            $(menu_game0).css('display', 'block');
            plar.classList.toggle('activ');
            $('.menu' + i).click(function () {

                plar.classList.toggle('activ');
                console.log(menu_game0)

            });
        }
    }

    for (let i = 0; i < res; i++) {
        for (let k = 0; k < 8; k++) {
            $('.dab' + i + k).click(function () {
                let menu_game2 = document.querySelector('.activ' + i + k);
                menu_game2.classList.toggle('activs');

            });
        }
    }
    for (let i = 0; i < res; i++) {
        for (let k = 0; k < 8; k++) {
            let li_menu = document.querySelector('.dab' + i + k);
            $(li_menu).css('min-height', '20px');
            $(li_menu).css('min-width', '240px');
            $(li_menu).css('padding-right', '5px');
        }
    }
    for (let i = 0; i < res; i++) {
        let cartVis = document.querySelector('.cart' + i);
        cartVis.classList.add('act');
        let cartVis2 = document.querySelector('.cart2' + i);
        cartVis2.classList.add('act');
    }
    for (let i = 0; i < res; i++) {
        let cartVision1 = document.querySelector('.cart' + i);
        let cartVision2 = document.querySelector('.cart2' + i);
        $('.cartGamers' + i).click(function () {
            cartVision1.classList.remove('act');
        });
        $('.cartGamers2' + i).click(function () {
            cartVision2.classList.remove('act');
        });

    }
    for (let i = 0; i < res; i++) {
        let AllCart = document.querySelector('.cart' + i);
        let cartUseFirst = document.querySelector('.cartUseFirst' + i);
        let cartUseTwo = document.querySelector('.cartUseTwo' + i);
        let AllCart2 = document.querySelector('.cart2' + i);


        $('.AllCart' + i).click(function () {
            AllCart.classList.toggle('act');
            AllCart2.classList.toggle('act');
        });
        $(cartUseFirst).click(function () {
            if (AllCart.childNodes.length === 2) {
                var test = AllCart.childNodes[1]
               // console.log(test.id === 'genderOne')
            }
            $(AllCart).css('text-decoration', 'line-through');
            cartUseFirst.setAttribute('disabled', '')

        });
        $(cartUseTwo).click(function () {
            $(AllCart2).css('text-decoration', 'line-through');
            cartUseTwo.setAttribute('disabled', '')
        });
    }
    $('.cart' + i).click(function () {
        if (cart_first === 'Gh') {
            document.querySelector('.activ' + i + 0).innerHTML = 'khj';
        } else if (cart_first === 'G') {
            document.querySelector('.activ' + i + 0).innerHTML = 'j';
        }
    });
    var player = 3;
    let newPol = document.querySelector('.dab' + player + '0').children[0].children[1];
    
});
