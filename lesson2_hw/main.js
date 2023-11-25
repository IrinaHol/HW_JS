// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [1, true, 'ok', {name: 'Anna', age: 40}, [123, 55], 4.5, 'hello', 0, 'okten', false];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: '1984',
//     pageCount: 100,
//     genre: 'fantasy'
// };
//
// let book2 = {
//     title: 'The Lord of the Rings',
//     pageCount: 250,
//     genre: 'fantasy'
// };
//
// let book3 = {
//     title: 'Harry Potter',
//     pageCount: 500,
//     genre: 'fantasy'
// };
//
// console.log(book1, book2, book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1 = {
//     title: 'George and the Unbreakable Code',
//     pageCount: 500,
//     genre: 'fantasy',
//     authors: [
//         {name: 'Lucy Hawking', age: 49},
//         {name: 'Stephen Hawking', age: 'died'}
//     ]
// };
//
// let book2 = {
//     title: 'Silent Patient',
//     pageCount: 700,
//     genre: 'thriller and detective',
//     authors: [{
//         name: 'Alex Michaelides',
//         age: 40
//     }]
// };
//
// let book3 = {
//     title: 'The Forest Song',
//     pageCount: 124,
//     genre: 'drama ',
//     authors: [{
//         name: 'Lesya Ukrainka',
//         age: 'died'
//     }]
// };
//
// console.log(book1, book2, book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {name: 'Anna', username: 'anna', password: '1234qwert'},
//     {name: 'Olia', username: 'olia', password: 'qwert'},
//     {name: 'Max', username: 'max', password: '@ffgfgf'},
//     {name: 'Andriy', username: 'andriy', password: 'okten134567'},
//     {name: 'Ira', username: 'iryna', password: '876545'},
//     {name: 'Mykola', username: 'Kolya', password: 'hello1888'},
//     {name: 'Liza', username: 'liza', password: '1234'},
//     {name: 'Katia', username: 'katia', password: '1234'},
//     {name: 'Nazar', username: 'nazar', password: '1234'},
//     {name: 'Ivan', username: 'ivan', password: '1234'},
// ];
//
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 10;
// let x = 1;
// let x = 0;
// let x = -3;
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 59;
//
// if (time >= 0 && time <= 15) {
//     console.log('перша чверть години');
// } else if (time > 15 && time <= 30) {
//     console.log('друга чверть години');
// }else if (time > 30 && time <= 45) {
//     console.log('третя чверть години');
// }else if (time > 45 && time <= 59) {
//     console.log('четверта чверть години');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 2;
//
// if (day >= 1 && day <= 10) {
//     console.log('перша декада');
// } else if (day > 10 && day <= 20) {
//     console.log('друга декада');
// }else if (day > 20 && day <= 31) {
//     console.log('третя декада');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = 6;
// switch (day) {
//     case 1:
//         alert('Йдеш на роботу');
//         break;
//     case 2:
//         alert('Йдеш до стоматолога');
//         break;
//     case 3:
//         alert('Вчишся');
//         break;
//     case 4:
//         alert('Робиш ДЗ');
//         break;
//     case 5:
//         alert('Сидиш вдома');
//         break;
//     case 6:
//         alert('Спиш весь день');
//         break;
//     case 7:
//         alert('Гуляєш');
//         break;
//     default:
//         alert('Такого дня тижня немає');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let num1 = prompt('Введіть число1');
// let num2 = prompt('Введіть число2');
//
// if (num1 > num2) {
//     console.log(num1);
// }
// else if (num2 > num1) {
//     console.log(num2);
// }
// else {
//     console.log(`${num1} = ${num2}`)
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// let x = 0;
// if (x === '' || x === 0 || x === false || x === null || x === undefined || x/0) {
//     x = 'default';
//     console.log(x);
// }
// else
//     console.log('It is not falsy value');

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// if (coursesAndDurationArray[0]['monthDuration'] > 5) {
//     console.log('Super');
// }
// if (coursesAndDurationArray[1]['monthDuration'] > 5) {
//     console.log('Super');
// }
// if (coursesAndDurationArray[2]['monthDuration'] > 5) {
//     console.log('Super');
// }
// if (coursesAndDurationArray[3]['monthDuration'] > 5) {
//     console.log('Super');
// }
// if (coursesAndDurationArray[4]['monthDuration'] > 5) {
//     console.log('Super');
// }
// if (coursesAndDurationArray[5]['monthDuration'] > 5) {
//     console.log('Super');
// }


