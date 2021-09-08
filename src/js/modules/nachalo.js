"use strict";
function nachalo() {
    // alert( //Функция состоит из имени (в нашем случае это alert) и круглых скобок, написанных после этого имени.
    //     'Привет, мир!' /*В этих круглых скобках следует писать параметры функции. В нашем случае 
    //                         параметром является текст, который выводится на экран.
    //                         В нашем случае функция имеет один параметр, однако бывают функции, 
    //                         в которые нужно передавать несколько параметров. В этом случае эти параметры пишутся через запятую.
    //                         */
    // );

    // /*Допустимые символы в имени переменной: буквы, цифры, _ , $, $a, $$a.
    //     Учтите, что первый символ имени переменной не должен быть цифрой.
    // */
    // let q = 1; // переменную с именем q: и задаем ей значение 1
    // alert(q); // выведет 1

    // let w; // объявим переменную
    // w = 2; // присвоим ей значение
    // alert(w); // выведем значение переменной на экран

    // // Объявление нескольких переменных
    // let e = 3;
    // let r = 4;
    // let t = 5;
    // console.log(e, r, t);
    // // можно написаnm let один раз и после него перечислив нужные переменные с их значениями, вот так:
    // let y = 1, u = 2, i = 3;
    // console.log(y, u, i);

    // // Можно вначале объявить все переменные, а потом присваивать им значения:
    // var o, p, a; // объявляем все 3 переменные (var устаревшее используем let)

    // // Присваиваем переменным значения:
    // o = 3;
    // p = 2;
    // a = 1;
    // console.log(o + p + a);

    // // Значения let и var могут быть разными (var устаревшее используем let)
    // let qq = 'one'; // первое значение переменной
    // var ww = 'первое';
    // console.log(qq); // выведет первое имя
    // console.log(ww);
    // // меняем значение
    // qq = 'two'; // второе значение переменной
    // ww = 'второе';
    // console.log(qq); // выведет второе значение
    // console.log(ww);


    // // постоянная не изменяемая переменная const

    // const name = 99;
    // console.log(name);

    // let ee = 87;
    // let rr = 80;
    // console.log(ee % rr); // выведет сумму ТОЛЬКО остатка

    // //Возведение в степень
    // let tt = 10;
    // console.log(tt ** 3);

    // //В следующем примере вначале выполнится возведение в степень, а затем умножение:
    // console.log(10 * 2 ** 3);


    // // ПРИМЕТИВНЫЕ ТИПЫ ДАННЫХ
    // // Значение переменной в объявление const не изменяемое
    // const texts = 'text';
    // console.log(typeof texts); // выведет тип strong = строчный

    // const numberFo = 22;
    // console.log(typeof numberFo); // выведет тип number = числовой

    // const booleanFo = false;// или true
    // console.log(typeof booleanFo); // выведет тип boolean = булин

    // const nullFo = null;
    // console.log(typeof nullFo); // выведет тип object = ссылочный( это баг языка js на самом деле это не ссылочный, а примитивный тип данных)

    // let tip;              // выведет тип Undefined
    // console.log(typeof tip);

    // const tipSymbol = Symbol();              // выведет тип Symbol
    // console.log(typeof tipSymbol);

    // // ССЫЛОЧНЫЕ ТИПЫ ДАННЫХ - возвращают объект = object

    // // Arrau массив
    // const massivArrau = [1, 2, 3, 4];              // выведет тип object
    // console.log(typeof massivArrau);

    // // Object Literal = литерал объекта
    // const Literal = {
    //     number: '12',
    //     name: 'вася',
    //     gorod: 'Петербург'
    // };
    // console.log(typeof Literal); // выведет тип object

    // // Function   = задаем значение при помощи конструктора new Function()
    // const somefunction = new Function();
    // console.log(typeof somefunction); // выведет тип function

    // // Date   = задаем значение при помощи конструктора new Date()
    //const someDate = new Date();
    // console.log(typeof someDate); // выведет тип object

    // вывод в документ
    const doc = `<h1>Привет</h1>
    <div>
        <p>Я тег в div</p>
    </div>`;
    document.write(doc);

}

export default nachalo;