//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

const btn = document.getElementById('btn');

btn.onclick = function () {
    let age = document.getElementById('age').value
    if (age < 18){
        return alert('your can not visit this site')
    }
    return alert('Welcome!')
}