// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//


const div = document.createElement('div');
div.id = 'text';
div.style.width = '200px';
div.style.height = '200px';
div.style.background = 'red';

const btn = document.createElement('button');
btn.innerText = 'Click';

document.body.append(div, btn);

let flag = true;

btn.onclick = () => {
    div.style.display = flag ? 'none' : 'block';
    flag = !flag;
}
