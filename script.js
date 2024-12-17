let man = {
    name: 'John',
    secondName: 'Wick',
    age: 45,
    height: 180,
    login: 'dog',
    password: 'dead',
    money: '1000000$'
}
man.address = 'New York';
console.log(man)

let variable = 'dead';

if(variable == man.password) {
    console.log(`Добро Пожаловать ${man.name} ${man.secondName}`)
} else{
    console.log(`Указанный пароль ${man.password} не верен.Попробуйте еще раз`)
}

