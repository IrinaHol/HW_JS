let url = new URL(location.href);
let id = url.searchParams.get('id');


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {

            // first option

            document.body.innerHTML = `<h2>USER - ${user.id}</h2>`

            function deeply(key) {
                for (const value in key) {
                    if (typeof key[value] === 'object') {
                        deeply(key[value])
                    } else {
                        const div = document.createElement('div');
                        div.innerText = (`${value} : ${key[value]}`)
                        document.body.appendChild(div);
                    }
                }
            }

            deeply(user)

        //second option

        // const div = document.createElement('div');
        // const id = document.createElement('p');
        // const name = document.createElement('p');
        // const username = document.createElement('p');
        // const email = document.createElement('p');
        // const address = document.createElement('p');
        // const phone = document.createElement('p');
        // const website = document.createElement('p');
        // const company = document.createElement('p');
        //
        // div.innerHTML = `<h2>USER - ${user.id}</h2>`
        //
        // id.innerText = `id: ${user.id}`;
        // name.innerText = `name: ${user.name}`;
        // username.innerText = `username: ${user.username}`;
        // email.innerText = `email: ${user.email}`;
        // address.innerHTML = `Address: <br> street - ${user.address.street}<br>suite - ${user.address.suite} <br> city - ${user.address.city} <br> zipcode - ${user.address.zipcode}<br> geo: <br> lat ${user.address.geo.lat} <br> lng ${user.address.geo.lng}`;
        // phone.innerText = `phone: ${user.phone}`;
        // website.innerText = `website: ${user.website}`;
        // company.innerHTML = `Company: <br> name - ${user.company.name} <br> atchPhrase - ${user.company.catchPhrase} <br> bs - ${user.company.bs}`;
            //
            // div.append(id, name, username, email, address, phone, website, company);
            // document.body.appendChild(div);
        }
    )