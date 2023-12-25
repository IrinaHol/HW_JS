// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const div = document.getElementById('numberDiv');

class CountGenerator {

    constructor() {
        this.getNumberFromLS();
    }
    getNumberFromLS () {
        let number = JSON.parse(localStorage.getItem('num')) || 3;
        number++;
        div.innerText = ''
        div.innerText = number;
        localStorage.setItem('num', number)
    }
}

new CountGenerator();

