"use strict";
function preobrazovanie_tipov() {
    // // Преобразование типов = Type Conversion
    // // Conversion To String = преобразование к строковому типу
    // // Conversion To Number = преобразование к числовому типу


    // // Conversion To String 
    // let x = 111;
    // console.log(x);
    // console.log(typeof x);
    // console.log(x.length); // length тоесть длинна существует у строк
    // // выводится длинна строки, тоесть колличество символов
    // // выведет undefined потомучто у нас числа, а не строки

    // let q = String(1222); // String преобразуем числа в строки
    // console.log(q);
    // console.log(typeof q);
    // console.log(q.length); // выведет сколько символов в значении 4

    // let ww = String(22); // String преобразуем числа в строки
    // ww = new Date();
    // console.log(ww);
    // console.log(typeof ww);
    // console.log(ww); //выведет дату и время

    // let qq = String(new Date()); // String преобразуем числа в строки
    // console.log(typeof qq);
    // console.log(qq); //выведет дату и время
    // console.log(qq.length);


    // // применяли функцию String
    // let ee = String(['one', 'two', 'three']); // [] в кватратных скобках пишем массив
    // console.log(typeof ee);
    // console.log(ee); //выведет дату и время
    // console.log(ee.length);

    // // применяли функцию toString
    // ee = (35).toString();
    // console.log(typeof ee);
    // console.log(ee); //выведет дату и время
    // console.log(ee.length);


    // /********************* Conversion To Number **********************/
    // let y = 5.23534636;
    // console.log(typeof y);
    // console.log(y);
    // console.log(y.toPrecision(4)); // выведет 4 цифры последнюю выводимую цифру округляет
    // /*********** МЕТОД toPrecision() только для цифр ***********/
    // //  преобразование строки в цифры
    // // Number() - метод
    // let yy = Number('1.0984576');
    // console.log(typeof yy);
    // console.log(yy);
    // console.log(yy.toPrecision(2)); // выведет 2 цифры последнюю выводимую цифру округляет

    // // parseInt() метод = распознать целое число

    // let o = parseInt('555.660');
    // console.log(typeof o);
    // console.log(o);
    // console.log(o.toPrecision(2)); // 

    // // parseFloat() метод = распознать десятичное число

    // let oo = parseFloat('555.660');
    // console.log(typeof oo);
    // console.log(oo); // выведет без 0 в конце

    // // parseFloat() метод = распознать десятичное число

    // let ooo = parseFloat('555.660');
    // console.log(typeof ooo);
    // console.log(ooo);
    // console.log(ooo.toPrecision(6)); // выведет с 0 в конце

    // получить числа из строк
    // let num = parseInt('12px');
    // console.log(num); // выведет 12

    // num = parseInt('12.5px');
    // console.log(num); // все равно выведет 12

    // num = parseFloat('12.5px');
    // console.log(num); // выведет 12.5
}

export default preobrazovanie_tipov;