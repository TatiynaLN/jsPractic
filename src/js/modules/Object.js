"use strict";
function Object() {
    // //Объекты в JavaScript
    // let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    // console.log(arr);
    // console.log(arr[1]);// выведет 'вт'

    // // добавим свой ключ = индекс

    // let obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
    // console.log(obj[1]); // выведет 'пн'

    // // изменим порядок
    // obj = { 3: 'value3', 1: 'value1', 2: 'value2' };
    // console.log(obj[1]); // выведет 'value1'
    // console.log(obj[2]); // выведет 'value2'
    // console.log(obj[3]); // выведет 'value3'

    // obj = { 7: 'value1', 50: 'value2', 23: 'value3' };
    // console.log(obj[7]); // выведет 'value1'
    // console.log(obj[50]); // выведет 'value2'
    // console.log(obj[23]); // выведет 'value3'
    // console.log(obj);

    // //Содержимое всего объекта нельзя нормально посмотреть через функцию alert:
    // // алертом можно вывести каждый отдельный элемент объекта
    // obj = { 1: 'a', 2: 'b', 3: 'c' };
    // // alert(obj); // выведет [Object object]
    // // alert(obj[2]);// выведет 'b'

    // //ключи могут быть не только числовыми, но и строковыми
    // //Ключами могут быть любые строки-такие строки не могут начинаться с цифры и не могут содержать внутри себя дефис, пробел и тому подобные вещи.
    // // Такие строки на самом деле являются допустимыми ключами, но только если их взять в кавычки:
    // obj = { key1: 'a', key2: 'b', key3: 'c' };
    // console.log(obj['key3']); // выведет 'c'
    // console.log(obj.key1); // альтернативный способ выведет 'a'

    // let abc = { a: '1', b: '2', c: '3' };
    // console.log(abc['a'] + abc['b'] + abc['c']);

    // abc = { '1a': 1, 'b ': 2, 'c-': 3 };
    // console.log(abc['1a'] + abc['b '] + abc['c-']);

    // let user = { name: 'Киселева', surname: 'Татьяна', patronymic: 'Сергеевна' }
    // document.write(user['name'] + ' ' + user['surname'] + ' ' + user['patronymic']);
}

export default Object;