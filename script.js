console.group('First part');
console.error('Warning Error!');
console.warn('!!!!!!!!!!!!!');
console.info('Hello world!🙂123');
console.groupEnd();
let human = {
    one : {
        name: 'Vasya',
        age: 22,
        lastName: 'Parfenov'
    },
    two : {
        name: 'Kolya',
        age: 18,
        lastName: 'Parfenov'
    }
}
console.group('Second part')
console.table(human);
console.time('time till click');
alert('Click to continue');
console.timeEnd('time till click');
console.groupEnd()





var Number1 = Math.ceil(Math.random() * 10);
var user1 = prompt("Угадайте число от 1 до 10");
if(user1 == Number1){
    console.log("Правильно!"); 
}else(console.log("Попробуйте еще раз")); // если не угадал, то надо перезагружать страницу




// var sum = 0;
// var amountOfNumbers = Number(prompt("Введите количество чисел"));
// for( i=0; i<amountOfNumbers; i++){
//     var user = Number(prompt("Введите число"));
//     console.log(user);
//     sum += user;
//     }
// var average = sum/i;
// console.log('среднее арифметическое:' , average);



// var first = (prompt("Введите любое значение:"));
// var second = (prompt("Введите любое значение:"));
// console.log(first);
// console.log(typeof first);
// console.log(second);
// console.log(typeof second);
// if(typeof first == typeof second){
//     console.log("Значения совпадают по типу",true);
// }else{
//     console.log("Значения совпадают по типу",false);
// }
// if(first == second){
//     console.log("Имеют одинаковые значения",true);
// }else{
//     console.log("Имеют одинаковые значения",false);
// }