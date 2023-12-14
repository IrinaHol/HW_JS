// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Dasha', 'Bokatova', 'dasha2001@gmail.com', 38095367832),
    new User(20, 'Sasha', 'Popov', 'sasha2000@gmail.com', 380987654343),
    new User(33, 'Masha', 'Petruk', 'mashapet99@mail.com', 380993456778),
    new User(4, 'Kolia', 'Sokath', 'koliaaa@mail.ua', 380952342334),
    new User(5, 'Olia', 'Tkach', 'oliatk@gmail.com', 380954322334),
    new User(6, 'Dima', 'Bruk', 'dimon@mail.com', 380998766776),
    new User(76, 'Vasia', 'Voll', 'vas@gmail.com', 380931222112),
    new User(10, 'Karina', 'Rand', 'karr@mail.com', 380991233445),
    new User(80, 'Oleg', 'Okten', 'ollegk@mail.com', 380976665445),
    new User(111, 'Yana', 'Tresh', 'yan@gmail.com', 380995556677)
];
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client = [
    new Client(1, 'Dasha', 'Bokatova', 'dasha2001@gmail.com', 38095367832, ['milk', 'bread', 'water']),
    new Client(20, 'Sasha', 'Popov', 'sasha2000@gmail.com', 380987654343, ['cart']),
    new Client(33, 'Masha', 'Petruk', 'mashapet99@mail.com', 380993456778, ['grape', ' apple', 'banana', 'carrot']),
    new Client(4, 'Kolia', 'Sokath', 'koliaaa@mail.ua', 380952342334, ['milk', 'bread', 'water']),
    new Client(5, 'Olia', 'Tkach', 'oliatk@gmail.com', 380954322334, ['cart', 'charge', 'phone']),
    new Client(6, 'Dima', 'Bruk', 'dimon@mail.com', 380998766776, ['grape']),
    new Client(76, 'Vasia', 'Voll', 'vas@gmail.com', 380931222112, ['milk', 'bread', 'water']),
    new Client(10, 'Karina', 'Rand', 'karr@mail.com', 380991233445, ['grape', ' apple', 'banana', 'carrot', 'onion']),
    new Client(80, 'Oleg', 'Okten', 'ollegk@mail.com', 380976665445, ['cart', 'charge']),
    new Client(111, 'Yana', 'Tresh', 'yan@gmail.com', 380995556677, [])
];

console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(client.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Car(model, generator, year, maxSpeed, sizeEngine) {
    this.model = model;
    this.generator = generator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.sizeEngine = sizeEngine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    };
    this.info = function () {
        console.log(`model - ${this.model}, generator - ${this.generator}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, sizeEngine - ${this.sizeEngine}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year = newValue;
    }
    this.addDriver = function (driver) {
        return this.driver = driver;
    }
}

let car = new Car('BMW', 'Germany', '2000', 300, 5);
// console.log(car);
car.drive();
car.info();
console.log(car.increaseMaxSpeed(100));
console.log(car.changeYear(2010));
console.log(car.addDriver({name: 'Vodila', age: 55}));
console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class NewCar {
    constructor(model, generator, year, maxSpeed, sizeEngine) {
        this.model = model;
        this.generator = generator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.sizeEngine = sizeEngine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    };

    info() {
        console.log(`model - ${this.model}, generator - ${this.generator}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, sizeEngine - ${this.sizeEngine}`)
    };

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        return this.driver = driver;
    }
}

let newCar = new NewCar('BMW', 'Germany', '2000', 300, 5);
// console.log(newCar);
newCar.drive();
newCar.info();
console.log(newCar.increaseMaxSpeed(100));
console.log(newCar.changeYear(2010));
console.log(newCar.addDriver({name: 'Vodila', age: 55}));
console.log(newCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderella = [
    new Cinderella('Anna', '18', '34'),
    new Cinderella('Olia', '30', '40'),
    new Cinderella('Vika', '33', '38'),
    new Cinderella('Inna', '25', '35'),
    new Cinderella('Olena', '22', '39'),
    new Cinderella('Mela', '29', '38'),
    new Cinderella('Diana', '40', '37'),
    new Cinderella('Katia', '35', '39'),
    new Cinderella('Nadia', '21', '36'),
    new Cinderella('Ira', '19', '37')
];
console.log(cinderella);

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

const prince = new Prince('Oleg', '35', '40');
console.log(prince);


for (const girl of cinderella) {
    if (girl.footSize === prince.foundShoe) {
        console.log(`${prince.name} found ${girl.name}`)
    }
}

console.log(cinderella.find(value => value.footSize === prince.foundShoe));