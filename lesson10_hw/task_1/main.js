// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

const form = document.forms.form;

form.onsubmit = (e) => {
    e.preventDefault();
    const div = document.createElement('div');
    div.innerText = `name: ${e.target.name.value} surname: ${e.target.surname.value} age: ${e.target.age.value}`;

    e.target.name.value = '';
    e.target.surname.value = '';
    e.target.age.value = '';

    document.body.appendChild(div);

}
