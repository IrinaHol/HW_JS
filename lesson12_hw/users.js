
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        const div = document.createElement('div');
        const ul = document.createElement('ul');

        div.appendChild(ul);
        document.body.appendChild(div);

        for (const user of users) {
            const li = document.createElement('li');
            li.innerText = `id: ${user.id}; name: ${user.name}`;
            ul.appendChild(li);
            let a = document.createElement('a');
            a.innerText = `   show details ${user.id}`;
            a.href = `user-details.html?id=${user.id}`;
            li.appendChild(a);
        }

        console.log(users)
    })