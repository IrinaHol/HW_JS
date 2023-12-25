// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом


// let form1 = document.forms.form1;
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     const div = document.getElementById('user');
//     div.innerHTML = `<h3>Name: ${this.name.value}</h3> <h3>Surname: ${this.surname.value}</h3> <h4>Age: ${this.age.value}</h4> `;
//     document.body.appendChild(div);
// }

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

//
// const divNum = document.getElementById('num');
//
// document.body.onload = function () {
//     let number = localStorage.getItem("number") || divNum.innerText;
//     number++;
//     divNum.innerText = number;
//     localStorage.setItem("number", number);
// }

// ==========================
// Є сторінка session.html (назва довільна), при відвідуванні якої в
// локальне сховще, в масив sessions зберігається інформація про
// дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки session.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// const json = localStorage.getItem('sessions');
// const sessions = JSON.parse(json) || [];
// sessions.push({date: new Date().toISOString()});
//
// localStorage.setItem('sessions', JSON.stringify(sessions));

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//

// const array = [];
// for (let i = 0; i < 100; i++) {
//     array.push({id: i + 1, name: 'name_' + i})
// }
//
// const info = document.getElementById('info');
// let currentPage = 1;
// let itemsInPage = 10;
//
// function displayItems(page) {
//     info.innerHTML = ''
//     let startIndex = (page - 1) * itemsInPage;
//     let endIndex = startIndex + itemsInPage;
//
//     let currentMass = array.slice(startIndex, endIndex)
//     currentMass.forEach(item => {
//         let h1 = document.createElement('h1')
//         h1.innerHTML =  `${item.id} - ${item.name}`
//         info.appendChild(h1)
//     })
// }
//
// displayItems(currentPage);
//
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// prev.onclick = function () {
//     if (currentPage > 1) {
//         currentPage--;
//         displayItems(currentPage);
//     }
// }
//
// next.onclick = function () {
//     let totalPages = array.length / itemsInPage;
//     if (currentPage < totalPages) {
//         currentPage++;
//         displayItems(currentPage);
//     }
// }
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const btn = document.getElementById('btn');

btn.onclick = function () {
        let age = document.getElementById('age').value
    if (age < 18){
        alert('your can not visit this site')
    }
    else if (age >= 18) {
        alert('Welcome!')
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається