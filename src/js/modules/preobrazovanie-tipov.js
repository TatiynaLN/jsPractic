"use strict";
function preobrazovanie_tipov() {
    // Преобразование типов = Type Conversion
    // Conversion To String = преобразование к строковому типу
    // Conversion To Number = преобразование к числовому типу


    // Conversion To String 
    let x = 111;
    console.log(x);
    console.log(typeof x);
    console.log(x.length); // length тоесть длинна существует у строк
    // выводится длинна строки, тоесть колличество символов
    // выведет undefined потомучто у нас числа, а не строки

    let q = String(1222); // String преобразуем числа в строки
    console.log(q);
    console.log(typeof q);
    console.log(q.length); // выведет сколько символов в значении 4

    let ww = String(22); // String преобразуем числа в строки
    ww = new Date();
    console.log(ww);
    console.log(typeof ww);
    console.log(ww); //выведет дату и время

    let qq = String(new Date()); // String преобразуем числа в строки
    console.log(typeof qq);
    console.log(qq); //выведет дату и время
    console.log(qq.length);


    // применяли функцию String
    let ee = String(['one', 'two', 'three']); // [] в кватратных скобках пишем массив
    console.log(typeof ee);
    console.log(ee); //выведет дату и время
    console.log(ee.length);

    // применяли функцию toString
    ee = (35).toString();
    console.log(typeof ee);
    console.log(ee); //выведет дату и время
    console.log(ee.length);
}

export default preobrazovanie_tipov;