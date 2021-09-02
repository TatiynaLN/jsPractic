"use strict";
function StringMethods() {
    // let result = 'Jack';
    // result = 'Jack' + ' ' + 'Dorwn'; // сложение строк это конкатенация
    // console.log(result);

    // const firstName = 'Jack';
    // const lastName = 'Brown';
    // const space = ' ';
    // const age = 25;
    // const greeting = "Hey there!";
    // result = firstName + space + lastName + space + age + space + greeting
    // console.log(result);

    // // Concatanation

    // result = firstName + space + lastName;

    // result = greeting + space + 'My name is' + space + firstName
    //     + ' ' + lastName + ". I'm " + age + " years old.";
    // console.log(result);

    // //Escaping

    // result = 'I\'m 34 years old';

    // result = "I like \"Star wars\" movie";
    // console.log(result);

    // // Properties and methods = свойства и методы

    // // длинна строки = length ( колличество символов в строке)
    // result = 'Hello! '.length;
    // console.log(result); // выведет 7 (пробелы учитываются)

    // result = firstName.length;
    // console.log(result);

    // // concat()

    // result = firstName.concat(' ', lastName);
    // console.log(result);

    // result = greeting.concat(space, 'My name is ', firstName, space, lastName);
    // console.log(result);

    // // toUpperCase()

    // result = result.toUpperCase();
    // console.log(result);
    // result = result.toLowerCase();
    // console.log(result);

    // // index
    // result = firstName[1];
    // console.log(result); // выведет первый символ "a" отсчет с 0

    // //.indexOf() метод выведет какой по счету символ в строке
    // result = 'Hello'.indexOf('l');
    // console.log(result); // выведет 2 = первый "l" 
    // //.lastIndexOf() метод выведет какой по счету последний заданный символ в строке
    // result = 'Hello lol'.lastIndexOf('l'); // выведет 8 = последний "l" 
    // result = firstName.indexOf('a');
    // console.log(result);
    // result = 'Hello lol'.indexOf('lo');
    // console.log(result);// выведет 3
    // result = firstName.indexOf('b'); // не существующее "b"
    // console.log(result); // выведет -1

    // // charAt()
    // result = firstName.charAt(1);
    // console.log(result); // выведет а

    // const longString = 'Hi, I\'m a long string';
    // result = longString.charAt(longString.length - 1);
    // console.log(result); // выведет последний символ в строке

    // // substring()
    // result = greeting.substring(4, 9); // извлекаем из строки слово "Hey there!"; = "t" с 4 символa первая цифра слова по 9 = е
    // console.log(result);

    // // slice()
    // result = greeting.slice(4, 9); // аналогично substring
    // console.log(result);
    // result = greeting.slice(-6); // Выведет последние 6 символов
    // console.log(result);

    // // split() = разделяет строку на несколько слов
    // result = longString.split(' '); // в данном случает пробел это установленный разделитьль строк
    // console.log(result);
    // const colors = 'red, orange, green, blue';
    // result = colors.split(','); // в данном случает запятая это установленный разделитьль строк
    // console.log(result);

    // //replace()
    // result = colors.replace('blue',
    //     'yellow');
    // console.log(result); // заменит blue на yellow

    // // includes()
    // result = colors.includes('red');
    // console.log(result); // выведет true в строке *colors* содержится red
    // result = colors.includes('indigo');
    // console.log(result); // выведет false в строке *colors* НЕ содержится indigo
}

export default StringMethods;