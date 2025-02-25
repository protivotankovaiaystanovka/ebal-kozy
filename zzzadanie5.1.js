const existedUserLogin = "the_best_user"
const existedUserPassword = "12345678"
const userLogin = prompt('Введите логин')
const userPassword = prompt("Введите пароль")
const noSpaces = userLogin.trim();
const noSpaces1 = userLogin.trim();
console.log(noSpaces, noSpaces1);

if (existedUserLogin === userLogin & existedUserPassword=== userPassword){
    console.log('Чинааазес')
}else{
    console.log('Фигня, переделывай')
}
