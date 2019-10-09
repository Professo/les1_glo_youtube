'use strict';
document.addEventListener('DOMContentLoaded', () => {

    //экранная клава
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? '' : '50%';
        };
        const typing = (event) => {
            const target = event.target;
            //console.log(target.textContent);
            //console.log(target.id);
            //console.log(event.target.id);
            if ((target.tagName.toLowerCase() === 'button') && (target.id !== 'keyboard-backspace') && (target.id !== 'spase')) { // нашел кнопки в index и добавил id на кнопки
                searchInput.value += target.textContent.trim();
            } else if (target.id == 'spase') { //обработка пробела (не работает)
                searchInput.value += ' ';
            } else if (target.id == 'keyboard-backspace') { //обработка клавиши backspace
                searchInput.value = searchInput.value.substring(0, searchInput.value.length - 1); //Метод substring/ аналог substr из pl_sql
            }
        };
        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);
    }

    //меню
    {
        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            sidebarMenu.classList.toggle('rollUp');
        });

        sidebarMenu.addEventListener('click', (e) => {
            let target = e.target;
            target = target.closest('a[href="#"]'); //closest(). .parents(). Начинает обход с текущего элемента

            if (target) {
                const parentTarget = target.parentElement;
                sidebarMenu.querySelectorAll('li').forEach((elem) => {

                    if (elem === parentTarget) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                })

            }
        })

    }

    // модалка
    const divYoutuber = document.createElement('div');
})