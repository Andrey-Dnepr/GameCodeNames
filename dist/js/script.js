window.addEventListener('DOMContentLoaded', () => {
    const menuSection = document.querySelectorAll('.menu'),
          playSection = document.querySelectorAll('.play'),
          capitansSection = document.querySelectorAll('.captains'),
          mapSection = document.querySelectorAll('.map'),
          wordSection = document.querySelectorAll('.word'),
          wordOne = document.querySelectorAll('.word_one'),
          wordTwo = document.querySelectorAll('.word_two'),
          wordWrap = document.querySelectorAll('.word_wrap'),
          menuTeam = document.querySelector('.menu__team__wrap'),
          blueBtn = document.querySelectorAll('.btn__choiсe_blue'),
          redBtn = document.querySelectorAll('.btn__choiсe_red'),
          playBtn = document.querySelector('.btn1'),
          startBtn = document.querySelector('.btn2'),
          mapCard = document.querySelectorAll('.map__card'),
          firstMoveDiv = document.querySelector('.map__descr'),
          okBtn = document.querySelector('.btn3'),
          restartBtn = document.querySelector('.end__restart'),
          end = document.querySelectorAll('.end'),
          words = "Сахара, свинья, ракета, долина, заяц, день, зад, пустыня, рюмка, роман, зебра, духи, серебро, Солнце, снег, дверь, жар-птица, пробка, спутник, рулетка, рука, железо, поклонник, Золушка, порт, сила, скрипка, кабачок, повар, почта, гриф, строчка, город, дробь, игра, камера, губа, почки, сало, гусеница, репка, сельдь, танец, тень, глаз, залив, золото, провал, инопланетянин, картина, пластик, сюжет, трава, снеговик, двигатель, таз, диск, пивная, страус, свеча, звук, помпа, свадьба, персонал, выстрел, Гримм, пистолет, Пушкин, разряд, квадрат, тюлень, деревня, пират, звезда, парус, плитка, Кавказ, Сочи, Франция, сон, клетка, хлеб, кирпич, заряд, театр, утка, Сатурн, революция, кнопка, дельфин, север, качели, Волга, восток, подлодка, дом, ворота, Холмс, поездка, пуля, пальма, винтовка, фильм, тьма, солдат, гора, гараж, кисть, карта, зима, завод, кольцо, пианино, Нью-Йорк, ручка, верблюд, рот, пол, небоскрёб, орёл, голова, цена, точка, Европа, среда, канал, сеть, камень, слово, тигр, шах, дача, шоколад, панда, опера, проба, мышь, Египет, чай, гостиница, посол, футбол, Русь, корень, победа, воздух, рубль, вакуум, телескоп, электричество, история, забор, Сибирь, зуб, кран, патрон, клуб, цветок, коса, грудь, часы, кровь, славяне, гитара, дракон, самолёт, перо, Прибалтика, река, сейф, Москва, зубр, стул, замок, свет, корабль, такт, пост, динозавр, яд, прокат, мир, группа, пятачок, медведь, Бразилия, Змей Горыныч, боб, круг, звонок, дворник, песок, картофель, актёр, труба, хоккей, автомобиль, бычок, собака, морда, норка, Белоруссия, космонавт, масштаб, Америка, былина, колесо, сыщик, иностранец, пицца, лира, хлопок, лес, сосиска, вал, стена, пиво, лошадь, полоса, мост, ветеринар, Африка, кухня, молоко, шашка, такса, хвост, бассейн, яблоко, лама, книга, малина, граница, кобра, письмо, выставка, вертолёт, парк, поезд, лыжи, казино, пляж, мяч, Украина, Китай, банан, куб, фокус, кенгуру, Азия, база, пилот, экран, телега, виски, бор, гольф, крем, капот, небо, лапа, луч, кетчуп, мамонт, царевна, каток, Урал, волна, нога, мина, торт, Германия, выдержка, тур, шпроты, кросс, батарея, школа, веер, Арктика, печать, ворона, палец, финка, концерт, облако, кит, мат, Лондон, лимон, акция, крикет, Пекин, блок, отпуск, шайба, берег, крокодил, парашют, мустанг, центр, алмаз, халва, мёд, юг, металл, ключ, кофе, цыплёнок, водка, огонь, хлыст, липа, царь, богатырь, Вагнер, королева, лист, корона, аквалангист, код, Англия, Чехия, коньяк, модель, бейсбол, ветер, крыло, брак, мороженое, нож, масло, автобус, язык, лёд, варенье, бюст, море, янтарь, Швейк, кот, наряд, лук, Австралия, Мосфильм, бутылка, Юпитер, Баба-Яга, штат, баран, молния, ладья, лаборатория, магазин, крепость, любовь, крыша, бокс, аист, крона, банк, миллионер, багет, марка, Левша, Луна, матрёшка, биатлон, башня, Аладдин, апельсин, лимузин, лодка";

    let teamBlue = [],
        teamRed = [],
        blueChoice = 'men',
        redChoice = 'women',
        neutralCards = ['play__card__neutralW', 'play__card__neutralM'];
        arrWords = words.toUpperCase().split(', '), 
        setWords = [],
        setCards = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
                    'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
                    'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'black'],
        newSetCard = [],
        firstMove = '',
        redCount = 0,
        blueCount = 0;

    function switchDisplay(i) {
        i.classList.toggle('hide_display');
    }

    //Выбираем команды
    menuTeam.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn__choiсe_blue') && !event.target.classList.contains('btn__choiсe_blue_active')) {
            blueBtn.forEach((item) => {
                item.classList.remove('btn__choiсe_blue_active');
            });
            event.target.classList.add('btn__choiсe_blue_active');
            blueChoice = `${event.target.dataset.team}`;
        }
        if (event.target.classList.contains('btn__choiсe_red') && !event.target.classList.contains('btn__choiсe_red_active')) {
            redBtn.forEach((item) => {
                item.classList.remove('btn__choiсe_red_active');
            });
            event.target.classList.add('btn__choiсe_red_active');
            redChoice = `${event.target.dataset.team}`;
        }
    });

    //Окно предупреждение
    playBtn.addEventListener('click', () => {

        switchDisplay(menuSection[0]);
        switchDisplay(capitansSection[0]);

    });

    //Окно с карточкой для капитанов
    startBtn.addEventListener('click', () => {

        switchDisplay(capitansSection[0]);
        switchDisplay(mapSection[0]);

        //Блок устаноки рубашек карточек в зависимости от типов команд
        switch (blueChoice) {
            case 'men': teamBlue[0] = 'play__card__blueM'; break;
            case 'women': teamBlue[0] = 'play__card__blueW'; break;
            case 'both': 
                teamBlue[0] = 'play__card__blueM'; 
                teamBlue[1] = 'play__card__blueW'; 
                break;
        }
        switch (redChoice) {
            case 'men': teamRed[0] = 'play__card__redM'; break;
            case 'women': teamRed[0] = 'play__card__redW'; break;
            case 'both': 
                teamRed[0] = 'play__card__redM'; 
                teamRed[1] = 'play__card__redW'; 
                break;
        }

        //Чей первый ход и у кого больше карточек
        let randomNum = Math.floor(Math.random() * 2);
        if (randomNum == 0) {
            setCards.push('red');
            firstMove = 'red';
            redCount = 9;
            blueCount = 8;
        } else {
            setCards.push('blue');
            firstMove = 'blue';
            redCount = 8;
            blueCount = 9;
        }

        //Выбираем 25 случайных слов
        for (let i = 0; i < 25; i++) {
            let someIndex = Math.floor(Math.random() * arrWords.length); //генерируем случайное число от 0 до длины массива arrWords (не влючительно)
            setWords[i] = arrWords[someIndex];
            arrWords.splice(someIndex, 1);
        }

        //Составляем карту карточек по цветам и показываем ее на экране
        if (firstMove == 'red') {
            firstMoveDiv.innerHTML = 'Первые ходят КРАСНЫЕ'
        } else {
            firstMoveDiv.innerHTML = 'Первые ходят СИНИЕ'
        }
        for (let i = 0; i < 25; i++) {
            let randomCard = Math.floor(Math.random() * setCards.length);
            newSetCard[i] = setCards[randomCard];
            setCards.splice(randomCard, 1); // удаляем использованную карту из массива
        }
        mapCard.forEach((item, i) => {
            item.classList.add(`${newSetCard[i]}`);
            item.innerHTML = `${setWords[i]}`;
            if (setWords[i].length > 8) {
                item.classList.add('map__card_s');
            }
            if (setWords[i].length > 11) {
                item.classList.add('map__card_ss');
            }
            if (item.classList.contains('black')) {
                item.classList.add('map__card_b');
            }
        });

    });

    //Запуск игры
    okBtn.addEventListener('click', () => {

        switchDisplay(mapSection[0]);
        switchDisplay(playSection[0]);

        //Присваиваем типы карточек к созданым картам
        wordWrap.forEach((item, i) => {
            item.dataset.typeOfCard = newSetCard[i];
        });
        
        //Размещаем слова на карточках
        wordOne.forEach((item, i) => {
            item.innerHTML = `${setWords[i]}`;
            if (setWords[i].length > 10) {
                item.classList.add('word_one_s');
            }
        });
        wordTwo.forEach((item, i) => {
            item.innerHTML = `${setWords[i]}`;
            if (setWords[i].length > 10) {
                item.classList.add('word_two_s');
            }
        });
        
        //Показываем слой со словами
        switchDisplay(wordSection[0]);

        //Алгоритм игры
        wordSection[0].addEventListener('click', (event) => {
            if (event.target.classList.contains('word_wrap')) {
                switch (event.target.dataset.typeOfCard) {
                    case 'red':
                        if (teamRed.length == 1) {
                            event.target.classList.add(`${teamRed[0]}`);
                        } else {
                            randomNum = Math.floor(Math.random() * 2);
                            event.target.classList.add(`${teamRed[randomNum]}`);
                        }
                        redCount--;
                        break;
                    case 'blue': 
                        if (teamBlue.length == 1) {
                            event.target.classList.add(`${teamBlue[0]}`);
                        } else {
                            randomNum = Math.floor(Math.random() * 2);
                            event.target.classList.add(`${teamBlue[randomNum]}`);
                        }
                        blueCount--;
                        break;
                    case 'neutral': 
                        randomNum = Math.floor(Math.random() * 2);
                        event.target.classList.add(`${neutralCards[randomNum]}`);
                        break;
                    case 'black': event.target.classList.add('play__card__black'); break;
                }
                if (blueCount == 0 || redCount == 0) {
                    switchDisplay(end[0]);
                    switchDisplay(end[0].children[0]);
                }
                if (event.target.dataset.typeOfCard == 'black') {
                    switchDisplay(end[0]);
                    switchDisplay(end[0].children[1]);
                }
            } 
        });
    });

    restartBtn.addEventListener('click', () => {location.reload()});

});