// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const form = document.forms.form;

form.onsubmit = ((e) => {
    e.preventDefault();
    const rows = e.target.rows.value;
    const columns = e.target.column.value;
    const text = e.target.text.value;

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let i = 0; i < columns; i++) {
            const td = document.createElement('td');
            td.innerText = text;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);

})

