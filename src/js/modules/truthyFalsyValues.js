"use strict";
// Truthy Falsy значения (правдивые и лживые значения)
function truthyFalsyValues() {

    // // Значения которые становятся в Falsy когда их конвертируем в булин 
    // // Всего 5 значений Falsy:  0, '', undefined, null, NaN
    // console.log(Boolean(0));
    // console.log(Boolean(''));
    // console.log(Boolean(undefined));
    // console.log(Boolean(null));
    // console.log(Boolean(NaN));
    // // в буллин конвентирует когда используем логические операторы 
    // // и в if else
    // const age = 0;
    // if (age) {
    //     console.log('Человек был рожден');
    // } else {
    //     console.log('Человек не был рожден');
    // }

    // //true значения
    // console.log(Boolean(1));
    // console.log(Boolean('hello'));
    // console.log(Boolean([])); // массив
    // console.log(Boolean({}));// объект
    // console.log(Boolean(3.4));

    // // вычисляем опреденали переменная
    // let vycheslit;
    // if (vycheslit) {
    //     console.log('Переменная определена');
    // } else {
    //     console.log('Переменная не определена');// = false
    // }

    // let vyches = 0;
    // if (vyches) {
    //     console.log('Переменная определена');
    // } else {
    //     console.log('Переменная не определена');// не явное false
    // }

    // let vych = 35;
    // if (vych) {
    //     console.log('Переменная определена');
    // } else {
    //     console.log('Переменная не определена');// явное true
    // }


    // // Boolean логические операторы AND, OR, NOT

    // // AND(И) для его применения используется два символа оператора
    // console.log(true && true);// логическая операция = true
    // console.log(true && false);// логическая операция = false
    // console.log(false && false);// логическая операция = false

    // // OR(ИЛИ) для его применения используется два символа оператора
    // console.log(true || true);// логическая операция = true
    // console.log(true || false);// логическая операция = true
    // console.log(false || false);// логическая операция = false

    // // Not(не) для его применения используется два символа оператора
    // console.log(!true);// логическая операция (не правда) = false
    // console.log(!false);// логическая операция (не лож)= true

    // const hasMoney = true; // Естьли у человека деньги
    // const isAdult = true; // Взрослыйли он
    // if (hasMoney && isAdult) {
    //     console.log('Вы можете купить напиток');
    // } else {
    //     console.log('Вы НЕ можете купить напиток');
    // }

    // const hasMone = true; // Естьли у человека деньги
    // const sRoditelem = false; // с родителем
    // if (hasMone || sRoditelem) {
    //     console.log('Вы можете купить апельсин');
    // } else {
    //     console.log('Вы НЕ можете купить апельсин');
    // }

    // const hasMoneys = true; // Естьли у человека деньги
    // const isAdults = true; // Взрослыйли он
    // const nePiyn = true;
    // if (hasMoneys && isAdults && !nePiyn) {
    //     console.log('Вы можете купить напиток');
    // } else {
    //     console.log('Вы НЕ можете купить напиток');
    // }
}

export default truthyFalsyValues;
