"use strict";

function cicl() {
    // //цикл while

    // //выведем с помощью цикла while числа от одного до пяти:
    // let i = 1; // задаем какую-нибудь переменную

    // while (i <= 3) { //Переменная i называется счетчиком цикла.
    //     console.log(i); // выводим содержимое i в консоль
    //     i++; // увеличиваем i на единицу при каждом проходе цикла
    // }
    // /* Счетчики используются для того, чтобы подсчитывать, сколько раз выполнился цикл. 
    // Кроме того, они выполняют вспомогательную роль - в нашей задаче мы использовали счетчик, чтобы вывести цифры от 1 до 5.
    // Для счетчиков принято использовать буквы i, j и k.*/
    // let j = 11
    // while (j <= 13) { //Переменная j называется счетчиком цикла.
    //     console.log(j);
    //     j++;
    // }

    // i = 2;

    // while (i <= 10) {
    //     console.log(i);
    //     i += 2; // увеличиваем i на 2 при каждом проходе цикла
    // }
    // j = 6
    // //счетчик, наоборот, уменьшается.
    // while (j >= 3) { //Переменная j называется счетчиком цикла.
    //     console.log(j);
    //     j--;
    // }

    // /***************  Цикл for ******************/
    // for (let i = 1; i <= 9; i++) {
    //     console.log(i); // выведет 1, 2... 9
    // }
    // for (let ii = 1; ii <= 9; ii += 1) {
    //     if (ii % 2 != 0) {
    //         console.log(ii); // выведет только НЕ четные числа
    //     }
    // }

    // //с помощью цикла найдем сумму целых чисел
    // let result = 0;
    // for (let iii = 1; iii <= 5; iii++) {
    //     result = result + iii;
    // }
    // console.log(result); // искомая сумма

    // // выведем содержимое массива
    // let arr = [1, 2, 3, 4, 5];

    // for (let w = 0; w <= arr.length - 1; w++) {
    //     console.log(arr[w]);
    // }

    // let arrs = [1, 2, 3, 4, 5];

    // for (let q = 0; q < arrs.length; q++) {
    //     console.log(arrs[q]); // выведет 1, 2, 3, 4, 5
    // }


    // arrs = [1, 2, 3, 4, 5];
    // for (let q = 0; q < arrs.length; q++) {
    //     document.write(arrs[q] + '<br>'); // выведет 1, 2, 3, 4, 5
    // }

    // arrs = [1, 2, 3, 4, 5];
    // for (let q = 0; q < arrs.length; q++) {
    //     const abzac = arrs[q];
    //     let abz = `<p>${abzac}</p>`
    //     document.write(abz); // выведет 1, 2, 3, 4, 5
    // }



    // let dni = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    // for (let dn = 0; dn < dni.length; dn++) {

    //     if (dn === dni.length - 2 || dn === dni.length - 1) {
    //         const cubs = `<p><strong>${dni[dn]}</strong></p>`;
    //         document.write(cubs);
    //     } else {
    //         const cubs = `<p>${dni[dn]}</p>`;
    //         document.write(cubs);
    //     }
    // }

    // let numbers = [2, 5, 9, 15, 1, 4];
    // for (let num = 0; num < numbers.length; num++) {
    //     if (numbers[num] > 3 && numbers[num] < 10) {
    //         let vyvod = `<p style=color:red;>${numbers[num]}</p>`;
    //         document.write(vyvod);
    //     }

    // }
    // document.write('Начало');
    // let sortirovat = [10, 20, 30, 50, 235, 3000];
    // for (let u = 0; u < sortirovat.length; u++) {
    //     let one = sortirovat[u].toString().charAt(0);
    //     if ((one !== '3') && (one !== '2')) {
    //         document.write(`<p>${sortirovat[u]}</p>`);
    //         console.log(`<p>${sortirovat[u]}</p>`);
    //     }
    // }
    // document.write('<h1>Новое</h1>');
    // console.log('<h1>Начало</h1>');
    // let arrg = [10, 20, 30, 50, 235, 3000];

    // for (let ig = 0; ig < arrg.length; ig++) {

    //     let one = arrg[ig].toString().charAt(0);

    //     if ((one == '3') || (one == '2')) {

    //         document.write(arrg[ig] + '<br>');

    //     }

    // }

    // Перебор массива циклом for-of в JavaScript
    let arr = [1, 2, 3, 4, 5];

    for (let elem of arr) {
        console.log(elem);
    }
    let massiv = [1, 2, 3, 4, 5];
    let otvet = 0;
    for (let summa of massiv) {
        otvet += summa;
        let otvets = `<p>${otvet}</p>`;
        document.write(otvets);

    }
    // Давайте с помощью цикла for-in выведем ключи этого объекта:
    let obj = { a: 1, b: 2, c: 3 };

    for (let key in obj) {
        console.log(key); // выведет 'a', 'b', 'c'
    }

    //А теперь выведем элементы:
    let obje = { a: 1, b: 2, c: 3 };

    for (let key in obje) {
        console.log(obje[key]); // выведет 1, 2, 3
    }
    // сумма объектов
    let objec = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    for (let summa of massiv) {
        otvet += massiv[summa];
        let otvets = `<p>${otvet}</p>`;
        document.write(otvets);

    }

    // два счетчика:
    for (let m = 0, n = 0; m <= 9; m++, n += 2) {
        console.log(m, n);
    }


    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let elem of array) {
        let result;

        if (elem % 2 == 0) {
            result = elem * elem;
        } else if (elem % 3 == 0) {
            result = elem * elem * elem;
        } else {
            continue; // перейдем на новую итерацию цикла
        }

        console.log(result); // выполнится, если делится на 2 или 3
    }
}


export default cicl;