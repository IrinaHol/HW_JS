// - Знайти та вивести довижину настипних стрінгових значень
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// const arr = str => str.split(' ');
// console.log(arr(str));;

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const array = [10,8,-7,55,987,-1011,0,1050,0];
//
// const string = array.map(value => value.toString());
// console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (arr, text) => {
    arr.sort((a, b) => {
        if (text === 'ascending') {
            return a - b;
        }
        if (text === 'descending') {
            return b - a;
        }
    })
    return arr;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// const sort1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort1);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const sort2 = coursesAndDurationArray.filter(value => value.monthDuration > 5)
// console.log(sort2)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// const newArray = coursesAndDurationArray.map((value, index) => {
//     return {
//         id: index + 1,
//         ...value
//     }
// });
// console.log(newArray);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cardSuit = ['spades', 'diamonds', 'hearts', 'clubs'];
const value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const color = ['red', 'black'];
const deck = [];

for (const itemSuit of cardSuit) {
    let cardColor;
    if (itemSuit === 'spades' || itemSuit === 'clubs') {
        cardColor = color[1];
    } else {
        cardColor = color[0];
    }
    for (const valueItem of value) {
        deck.push({'suit': itemSuit, 'value': valueItem, 'color': cardColor});
    }
}
console.log(deck);

const spadeAce = deck.find(value => value.suit === 'spade' && value.value === 'ace');
console.log(spadeAce);

const six = deck.filter(value => value.value === '6');
console.log(six);

const reCarts = deck.filter(value => value.color === 'red');
console.log(reCarts);

const diamonds = deck.filter(value => value.suit === 'diamond');
console.log(diamonds);

const clubs = deck.filter(value => value.suit === 'clubs' && (value.value >= '9' || value.value === '10'));
console.log(clubs);



// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const cartDeck = deck.reduce((acc, value) => {
    acc[value.suit].push(value);
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(cartDeck);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// const modulesSass = coursesArray.filter(value => value.modules.includes('sass'));
// console.log(modulesSass);
//
// const modulesDocker = coursesArray.filter(value => value.modules.includes('docker'));
// console.log(modulesDocker);