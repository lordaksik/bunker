var listCartWithoutInput = [
    'genderAll', 'professionMyself', 'professionAll', 'healthAll', 'searchManiac',
    'dopInfaAll', 'dopInfaMyself', 'hobbyAll', 'hobbyTwo', 'hobbyTwoNew', 'humanQualitiesMyself', 'phobiassAll', 'phobiassNot',
    'luggagesMedicineChest', 'luggagesPreserves', 'luggagesAll', 'luggagesMyself'
];
let cartAction = [
    "Бункер находится на горе",
    "Заставляете игрока использовать карту действия 1",
    "Бункер находится на необитаемом острове",
    "Рядом есть склад с оружием",
    "Рядом есть склад с оружием",
    'До конца этого хода в вас не могут голосовать',
    'Другой игрок получает имунитет до конца хода',
    'Выбранный игрок 1 любую свою характеристику',
    'У вас есть вторая профессия: актёр',
    'У вас есть вторая доп. инфа: босс зручна2',
    'Увеличивает количество ваших голосов на 1 до конца хода',
    'Начинается новый круг на котором кикают на 1 игрока больше',
    'Уменьшает количество голосов в вас на 1',
    'Уменьшает количество голосов в другого игрока на 1',
    "Рядом есть бункер с 2 мужчинами химиками",
    "Заставляете игрока использовать карту действия 2",
    "Рядом есть бункер с 1 здоровой женщиной",
    "Если вас кикнули вы попали в другой бункер с целью отомстить",
    {
        name: 'genderOne', info: 'Меняете пол выбранному игроку'
    },
    {
        name: 'genderAll', info: 'Меняете пол всем игроком'
    }, {
        name: 'genderTrade', info: 'Меняете полом с игроком'
    },
    {
        name: 'professionMyself', info: 'Поменять себе профессию'
    },
    {
        name: 'professionAll', info: 'Поменять всем профессию'
    },
    {
        name: 'perfectHealth', info: 'Излечить игрока'
    },
    {
        name: 'healthTrade', info: 'Кража здоровья'
    },
    {
        name: 'healthRandom', info: 'Новое здоровье игроку'
    },
    {
        name: 'healthAll', info: 'Новое здоровье у всех '
    },
    {
        name: 'returnPlayer', info: 'Вернуть игрока '
    },
    {
        name: 'kikPlayer', info: 'Кикнуть игрока '
    },
    {
        name: 'openHealth', info: 'Открываете здоровье игрока'
    },
    {
        name: 'searchManiac', info: 'Находит маньяка, если он есть'
    },
    {
        name: 'dopInfaAll', info: 'Меняет у всех доп. информацию'
    },
    {
        name: 'dopInfaMyself', info: 'Меняете у себя доп. информацию'
    },
    {
        name: 'dopInfaPlayer', info: 'Меняете у игрока доп. информацию'
    },
    {
        name: 'hobbyAll', info: 'Меняете у всех игроков хобби'
    },
    {
        name: 'hobbyPlayer', info: 'Меняете у игрока хобби'
    },
    {
        name: 'hobbyTwo', info: 'Второе рандомное хобби',
    },
    {
        name: 'hobbyTwoNew', info: 'Второе хобби: Изучение апокалипсисов',
    },
    {
        name: 'humanQualitiesMyself', info: 'Новое человеческое качество себе',
    },
    {
        name: 'phobiassAll', info: 'Новые фобии все'
    },
    {
        name: 'phobiassNot', info: 'Лишает вас фобии'
    },
    {
        name: 'phobiassClaustrophobic', info: 'Делает человека клаустрафобом'
    },
    {
        name: 'phobiassOther', info: 'Рандомная фобия другому'
    },
    {
        name: 'luggagesTheft', info: 'Кража багажа у другого'
    },
    {
        name: 'luggagesMedicineChest', info: 'Доп багаж: Аптечка'
    },
    {
        name: 'luggagesPreserves', info: 'Доп багаж: 10 консерв'
    },
    {
        name: 'luggagesAll', info: 'Сменить багаж у всех'
    },
    {
        name: 'luggagesMyself', info: 'Сменить багаж у себя'
    },
];
var res = localStorage.getItem('player_kol');
let proff, poll, healths, dopNavv, humanQualitiess, hobbyy, phobiass, luggages;
let cart_first, cart_two;
var randPol, randProf, randHealth, randDopNav, randHumanQualities, randHobby, randPhobias, randLuggage, randCart,
    randCart2;
let game = document.querySelector('.game');
$.getJSON("game_variables.json", function (jsons) {
    function createDiv() {
        var div = document.createElement('div');
        div.className = 'player ' + 'kik' + i;
        //   div.className = 'kik'+i;
        div.innerHTML = "<h1 class=" + "menu" + i + "><a href=" + '#' + " >Игрок " + (i + 1) + "</a></h1><div class=>" + "<ol class=" + 'specifications' + "></ol></div><div class=" + "cartGame" + "><h3 class=" + "AllCart" + i + ">Карты действия:</h3><div class=" + "actionCards" + "><p class=" + "cartGamers" + i + ">1: <span  class=" + "cartAction" + i + ">" + cart_first + "</span></p><p class=" + "use" + "><button class=" + "cartUseFirst" + i + ">Использовать</button></p><p class=" + "cartGamers2" + i + ">2: <span class=" + "cart2" + i + ">" + cart_two + "</span></p></span><p  class=" + "use" + "><button class=" + "cartUseTwo" + i + ">Использовать</button></p></div></div>";
        return div;
    }

    function createSpecifications() {
        let fragment = new DocumentFragment();

        for (let k = 0; k < 8; k++) {
            let li = document.createElement('li');

            if (k === 0) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Пол: </b><span>${poll}</span></div></div>`;
            }
            if (k === 1) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Профессия: </b><span>${proff}</span></div></div>`;
            }
            if (k === 2) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Здоровье: </b><span>${healths}</span></div></div>`;
            }
            if (k === 3) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Доп. инф.: </b><span>${dopNavv}</span></div></div>`;
            }
            if (k === 4) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Человеч. кач.: </b><span>${humanQualitiess}</span></div></div>`;
            }
            if (k === 5) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Хобби: </b><span>${hobbyy}</span></div></div>`;
            }
            if (k === 6) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Фобии: </b><span>${phobiass}</span></div></div>`;
            }
            if (k === 7) {
                li.innerHTML = `<div class=dab${i}${k}><div class=activ${i}${k}> <b>Багаж: </b><span>${luggages}</span></div></div>`;
            }
            fragment.append(li);

        }

        return fragment;
    }

    function randomCart() {
        randPol = Math.floor(Math.random() * jsons.pol.length);
        poll = jsons.pol[randPol];
        jsons.pol.splice(randPol, 1);
        randCart = Math.floor(Math.random() * cartAction.length);
        if (typeof cartAction[randCart] === 'object') {
            if (listCartWithoutInput.includes(cartAction[randCart].name)) {
                cart_first = `<span>${cartAction[randCart].info} </span><span id=${cartAction[randCart].name}></span>`;
            } else {
                cart_first = `<span>${cartAction[randCart].info} </span><input class=playerNumber type="number" id=${cartAction[randCart].name}  min="1" value="1" max=${res}>`;
            }
        } else {
            cart_first = cartAction[randCart];
        }
        cartAction.splice(randCart, 1);
        randCart2 = Math.floor(Math.random() * cartAction.length);
        cart_two = cartAction[randCart2];
        if (typeof cartAction[randCart2] === 'object') {
            if (listCartWithoutInput.includes(cartAction[randCart2].name)) {
                cart_two = `<span>${cartAction[randCart2].info} </span><span id=${cartAction[randCart2].name}></span>`;
            } else {
                cart_two = `<span>${cartAction[randCart2].info} </span><input class=playerNumber type="number" id=${cartAction[randCart2].name}  min="1" value="1" max=${res}>`;
            }
        } else {
            cart_two = cartAction[randCart2];
        }

        cartAction.splice(randCart2, 1);
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
        game.appendChild(createDiv(i));
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
            $(li_menu).css('margin-right', '5px');
        }
    }
    for (let i = 0; i < res; i++) {
        let cartVis = document.querySelector('.cartAction' + i);
        cartVis.classList.add('act');
        let cartVis2 = document.querySelector('.cart2' + i);
        cartVis2.classList.add('act');
    }
    for (let i = 0; i < res; i++) {
        let cartVision1 = document.querySelector('.cartAction' + i);
        let cartVision2 = document.querySelector('.cart2' + i);
        $('.cartGamers' + i).click(function () {
            cartVision1.classList.remove('act');
        });
        $('.cartGamers2' + i).click(function () {
            cartVision2.classList.remove('act');
        });

    }
    for (let i = 0; i < res; i++) {
        let AllCart = document.querySelector('.cartAction' + i);
        let cartUseFirst = document.querySelector('.cartUseFirst' + i);
        let cartUseTwo = document.querySelector('.cartUseTwo' + i);
        let AllCart2 = document.querySelector('.cart2' + i);
        cartUse(cartUseFirst, AllCart, i)
        cartUse(cartUseTwo, AllCart2, i)
        $('.AllCart' + i).click(function () {
            AllCart.classList.toggle('act');
            AllCart2.classList.toggle('act');
        });
    }

    function cartUse(cartUseFirst, AllCart, l) {
        $(cartUseFirst).click(function () {
            if (AllCart.childNodes.length === 2) {
                var infoId = AllCart.childNodes[1]
                var player = Number(infoId.value) - 1;
                switch (infoId.id) {
                    case 'genderOne':
                        let genderOne = document.querySelector('.dab' + player + '0').children[0].children[1];
                        randPol = Math.floor(Math.random() * jsons.pol.length);
                        poll = jsons.pol[randPol];
                        jsons.pol.splice(randPol, 1);
                        genderOne.innerHTML = poll;
                        break;
                    case 'genderAll':
                        for (let j = 0; j < res; j++) {
                            let newPol = document.querySelector('.dab' + j + '0').children[0].children[1];
                            randPol = Math.floor(Math.random() * jsons.pol.length);
                            poll = jsons.pol[randPol];
                            jsons.pol.splice(randPol, 1);
                            newPol.innerHTML = poll;
                        }
                        break;
                    case 'genderTrade':
                        let genderTrade = document.querySelector('.dab' + player + '0').children[0].children[1];
                        let genderThis = document.querySelector('.dab' + l + '0').children[0].children[1];
                        let genderForTrade = genderTrade.innerHTML;
                        genderTrade.innerHTML = genderThis.innerHTML;
                        genderThis.innerHTML = genderForTrade;
                        break;
                    case 'professionAll':
                        for (let j = 0; j < res; j++) {
                            let newProfession = document.querySelector('.dab' + j + '1').children[0].children[1];
                            randProfession = Math.floor(Math.random() * jsons.prof.length);
                            profession = jsons.prof[randProfession];
                            jsons.prof.splice(randProfession, 1);
                            newProfession.innerHTML = profession;
                        }
                        break;
                    case 'professionMyself':
                        let professionElement = document.querySelector('.dab' + l + '1').children[0].children[1];
                        randProfession = Math.floor(Math.random() * jsons.prof.length);
                        profession = jsons.prof[randProfession];
                        jsons.prof.splice(randProfession, 1);
                        professionElement.innerHTML = profession;
                        break;
                    case 'perfectHealth':
                        let perfectHealth = document.querySelector('.dab' + player + '2').children[0].children[1];
                        perfectHealth.innerHTML = 'идеально здоров';
                        break;
                    case 'healthRandom':
                        let healthRandom = document.querySelector('.dab' + player + '2').children[0].children[1];
                        randHealth = Math.floor(Math.random() * jsons.health.length);
                        health = jsons.health[randHealth];
                        jsons.health.splice(randHealth, 1);
                        healthRandom.innerHTML = health;
                        break;
                    case 'healthTrade':
                        let healthForTrade = document.querySelector('.dab' + player + '2').children[0].children[1];
                        let healthThis = document.querySelector('.dab' + l + '2').children[0].children[1];
                        let healthForTradeInner = healthForTrade.innerHTML;
                        healthForTrade.innerHTML = healthThis.innerHTML;
                        healthThis.innerHTML = healthForTradeInner;
                        break;
                    case 'healthAll':
                        for (let k = 0; k < res; k++) {
                            let healthAll = document.querySelector('.dab' + k + '2').children[0].children[1];
                            randHealth = Math.floor(Math.random() * jsons.health.length);
                            health = jsons.health[randHealth];
                            jsons.health.splice(randHealth, 1);
                            healthAll.innerHTML = health;
                        }
                        break;
                    case 'returnPlayer':
                        let returnPlayer = document.querySelector('.kik' + player);
                        returnPlayer.style.display = 'block'
                        break;
                    case 'kikPlayer':
                        let kikPlayer = document.querySelector('.kik' + player);
                        kikPlayer.style.display = 'none'
                        break;
                    case 'openHealth':
                        let openHealth = document.querySelector('.activ' + player + '2');
                        openHealth.classList.toggle('activ');
                        break;
                    case 'searchManiac':
                        for (let t = 0; t < res; t++) {
                            let searchManiac = document.querySelector('.dab' + t + '4').children[0].children[1];
                            if (searchManiac.textContent === 'Маньяк') {
                                let maniac = document.querySelector('.dab' + t + '4')
                                maniac.style.background = 'yellow'
                                break;
                            }
                        }
                        break;
                    case 'dopInfaAll':
                        for (let t = 0; t < res; t++) {
                            let dopInfaAll = document.querySelector('.dab' + t + '3').children[0].children[1];
                            randDopInfa = Math.floor(Math.random() * jsons.dopNav.length);
                            dopInfa = jsons.dopNav[randDopInfa];
                            jsons.dopNav.splice(randDopInfa, 1);
                            dopInfaAll.innerHTML = dopInfa;
                        }
                        break;
                    case 'dopInfaPlayer':
                        let dopInfaPlayer = document.querySelector('.dab' + player + '3').children[0].children[1];
                        randDopInfaPlayer = Math.floor(Math.random() * jsons.dopNav.length);
                        dopInfa = jsons.dopNav[randDopInfaPlayer];
                        jsons.dopNav.splice(randDopInfaPlayer, 1);
                        dopInfaPlayer.innerHTML = dopInfa;
                        break;
                    case 'hobbyPlayer':
                        let hobbyPlayer = document.querySelector('.dab' + player + '5').children[0].children[1];
                        randHobbyPlayer = Math.floor(Math.random() * jsons.hobby.length);
                        hobby = jsons.hobby[randHobbyPlayer];
                        jsons.hobby.splice(randHobbyPlayer, 1);
                        hobbyPlayer.innerHTML = hobby;
                        break;
                    case 'hobbyTwo':
                        let hobbyTwo = document.querySelector('.dab' + l + '5').children[0].children[1];
                        randHobbyTwo = Math.floor(Math.random() * jsons.hobby.length);
                        hobby = jsons.hobby[randHobbyTwo];
                        jsons.hobby.splice(randHobbyTwo, 1);
                        hobbyTwo.innerHTML = hobbyTwo.innerHTML + ' + ' + hobby;
                        break;
                    case 'hobbyTwoNew':
                        let hobbyTwoNew = document.querySelector('.dab' + l + '5').children[0].children[1];
                        hobbyTwoNew.innerHTML = hobbyTwoNew.innerHTML + ' + Изучение апокалипсисов';
                        break;
                    case 'hobbyAll':
                        for (let t = 0; t < res; t++) {
                            let hobbyAll = document.querySelector('.dab' + t + '5').children[0].children[1];
                            randHobbyAll = Math.floor(Math.random() * jsons.hobby.length);
                            hobby = jsons.hobby[randHobbyAll];
                            jsons.hobby.splice(randHobbyAll, 1);
                            hobbyAll.innerHTML = hobby;
                        }
                        break;
                    case 'phobiassAll':
                        for (let w = 0; w < res; w++) {
                            let phobiassAll = document.querySelector('.dab' + w + '6').children[0].children[1];
                            randPhobiassAll = Math.floor(Math.random() * jsons.phobias.length);
                            phobiass = jsons.phobias[randPhobiassAll];
                            jsons.phobias.splice(randPhobiassAll, 1);
                            phobiassAll.innerHTML = phobiass;
                        }
                        break;
                    case 'luggagesAll':
                        for (let d = 0; d < res; d++) {
                            let luggagesAll = document.querySelector('.dab' + d + '7').children[0].children[1];
                            randLuggagesAll = Math.floor(Math.random() * jsons.luggage.length);
                            luggages = jsons.luggage[randLuggagesAll];
                            jsons.luggage.splice(randLuggagesAll, 1);
                            luggagesAll.innerHTML = luggages;
                        }
                        break;
                    case 'luggagesMyself':
                        let luggagesMyself = document.querySelector('.dab' + l + '7').children[0].children[1];
                        randLuggagesMyself = Math.floor(Math.random() * jsons.luggage.length);
                        luggages = jsons.luggage[randLuggagesMyself];
                        jsons.luggage.splice(randLuggagesMyself, 1);
                        luggagesMyself.innerHTML = luggages;
                        break;
                    case 'humanQualitiesMyself':
                        let humanQualitiesMyself = document.querySelector('.dab' + l + '4').children[0].children[1];
                        randHumanQualitiesMyself = Math.floor(Math.random() * jsons.humanQualities.length);
                        HumanQualities = jsons.humanQualities[randHumanQualitiesMyself];
                        jsons.humanQualities.splice(randHumanQualitiesMyself, 1);
                        humanQualitiesMyself.innerHTML = HumanQualities;
                        break;
                    case 'phobiassOther':
                        let phobiassOther = document.querySelector('.dab' + player + '6').children[0].children[1];
                        randPhobiassOther = Math.floor(Math.random() * jsons.phobias.length);
                        phobiass = jsons.phobias[randPhobiassOther];
                        jsons.phobias.splice(randPhobiassOther, 1);
                        phobiassOther.innerHTML = phobiass;
                        break;
                    case 'phobiassClaustrophobic':
                        let phobiassClaustrophobic = document.querySelector('.dab' + player + '6').children[0].children[1];
                        phobiassClaustrophobic.innerHTML = 'Клаустрофобия';
                        break;
                    case 'phobiassNot':
                        let phobiassNot = document.querySelector('.dab' + l + '6').children[0].children[1];
                        phobiassNot.innerHTML = 'Нет фобии';
                        break;
                    case 'luggagesTheft':
                        let luggagesTheftTrade = document.querySelector('.dab' + player + '7').children[0].children[1];
                        let luggagesTheftThis = document.querySelector('.dab' + l + '7').children[0].children[1];
                        luggagesTheftThis.innerHTML = luggagesTheftThis.innerHTML + ' + ' + luggagesTheftTrade.innerHTML;
                        luggagesTheftTrade.innerHTML = 'Нету';
                        break;
                    case 'luggagesMedicineChest':
                        let luggagesMedicineChest = document.querySelector('.dab' + l + '7').children[0].children[1];
                        luggagesMedicineChest.innerHTML = luggagesMedicineChest.innerHTML + ' + Аптечка';
                        break;
                    case 'luggagesPreserves':
                        let luggagesPreserves = document.querySelector('.dab' + l + '7').children[0].children[1];
                        luggagesPreserves.innerHTML = luggagesPreserves.innerHTML + ' + 10 консерв';
                        break;
                }
            }
            $(AllCart).css('text-decoration', 'line-through');
            cartUseFirst.setAttribute('disabled', '')

        });
    }
});
