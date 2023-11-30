// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calс(a, b) {
//     return a * b;
// }
//
// console.log(calс(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calс(r) {
//     return 3.14 * Math.pow(r, 2);
// }
//
// console.log(calс(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calс(h, r) {
//     return 2 * 3.14 * h * r;
// }
//
// console.log(calс(10, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

// const arr = [1, 2, true, [100, 'ok'], {name: 'Ivan', age: 32}]
// function array(allArray) {
//     for (const element of allArray) {
//         console.log(element);
//     }
// }

// array(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function build() {
//     document.write(`<p>${arguments[0]}</p>`);
// }
//
// build('Hello Okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function build() {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${arguments[0]}</li>`);
//     }
//     document.write('</ul>')
//
// }
//
// build('Hello Okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function build() {
//     document.write('<ul>')
//     for (let i = 0; i < arguments[1]; i++) {
//         document.write(`<li>${arguments[0]}</li>`);
//     }
//     document.write('</ul>')
//
// }
//
// build('good day', 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const arr = [100, -15, true, false, 0.13, 12];
//
// function build(array) {
//     document.write('<ul>')
//     for (const item of array) {
//             document.write(`<li>${item}</li>`);
//     }
//     document.write('</ul>');
//
// }
//
// build(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const arr = [
//     {
//         id: 1,
//         name: 'Ivan',
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'Olia',
//         age: 28
//     },
//     {
//         id: 3,
//         name: 'Vika',
//         age: 45
//     },
//
// ];
//
// function build(array) {
//     for (const item of array) {
//         document.write('<div>');
//         for (const itemKey in item) {
//             document.write(`${itemKey} : ${item[itemKey]}, `);
//         }
//         document.write('</div>');
//     }
// }
//
// build(arr);

// - створити функцію яка повертає найменьше число з масиву

// const arrNumber = [1, 100, -120, 900, 0, -8, -80];
//
// function minNum(array) {
//     let min = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// }
//
// console.log(minNum(arrNumber));
//
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// const arrNumber = [1, 2, 10];
// function sum(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//     }
//     return sum;
// }
//
// console.log(sum(arrNumber));
//
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(array, index1, index2) {
//
//     let num1 = array[index1];
//     let num2 = array[index2];
//     console.log(num2, num1);
//
//     array[index1] = num2;
//     array[index2] = num1;
//     return array;
// }
//
// console.log(swap([11, 22, 33, 44], 3, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency) {
//             return sumUAH / currencyValue.value;
//         }
//     }
// }
//
// let currentMoney = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');
// console.log(currentMoney);