// console.log ('Hello world');

// let num = 4;
// let name = 'Mikhail korov doil';
// const pi = 3.14;
// console.log(name);

// let result = prompt('Enter num',0);
// console.log(result);

// типы данных
// Number
// String
// Boolean
// undefined
// BigInt
// Symbol
// null
// Object
// let num1=123;
// let num2=12.2333;
// // NaN = Not a Number, infinity , - infinity

// console.log(2+3);
// console.log(2**3);
// console.log(5%2);

// String

// let name = 'ddd';
// console.log("im " + num1);
// let r = 12;
// let g = 34;
// let b = 14;
// console.log("RGB("+r+", " + g+", " + b+ ")");
// console.log(`RGB(${r}, ${g}, ${b})`);


// // Type of
// let r = 12;
// console.log(typeof r);

// let age = prompt ('How old r u?');
// console.log(typeof age); // string  всегда выводит

// let num = prompt ('Num?');
//  let pow = Number (num) ** 2; // можно делать + 
//  console.log(pow);

//  let num2 =  123;
//  console.log (String(num2));
// console.log ('3'+3); // concat
// console.log (+'3'+3); // неявное п         реобразование 3 в число и выводит 6
// console.log ('9'*3); // он сам преобразовывает 9 в число и умножает
// console.log ('9 apples '*3); // тут уже Nan так как символы в строке

// let num1 = Number (prompt ('1'));
// let num2 = Number (prompt ('2'));
// let sum = num1+num2;
// console.log (sum);

// IF ELSe == сравнивает строку с числом и по фиг, 
// а вот === сравнивает значение и ТИП ДАННЫХ
// let age = prompt ('How old?');
// if (age== 18) {
//     console.log (
//        'OK' 
//     )
// }else {
//     console.log ('ÓKKK');
// }

// так же можно ELSE IF 

// let num1 = Number(prompt ('Num1?'));
// let num2 = Number (prompt ('Num2?'));
// if ( num1>num2) {
//     console.log (
//         'num1 is bigger'
//     )
// }else if ( num1<num2){
//     console.log ('num2 is bigger');
// }

// else {
//     console.log ('Num1 and Num2 are equals');
// }

//  И ЕЩЕ ВАРИАНТЬЫ
// let num1 = Number(prompt ('Number?'));
// if ( num1<0) {
//         console.log (
//             'num1 is <0'
//         )
//     }else if ( num1==0){
//         console.log ('num1 is 0');
//     }
    
//     else {
//         console.log (Num1 >0);
//     }

// МАССИВЫ 

// let fruits = ['apple', 'banana'];
// console.log (fruits.length);
// console.log (fruits[0]);
// console.log (fruits[fruits.length-1]);
// fruits.push('orange'); // дописали элемент в конец
// console.log (fruits); // вывели весь массив
// fruits.unshift ('Mango'); // дописали элемент в начало
// console.log (fruits); // вывели весь массив


// Вводим элементы массива с клавиатуры и записыввем их в массив
// let fruits = [];
// let fruit1 = prompt('Enter the fruit');
// let fruit2 = prompt('Enter the fruit');
// fruits.push(fruit1,fruit2);
// console.log (fruits);

// // Удаляем элементы из массива
// let fruits = ['apple', 'banana'];
// console.log (fruits.length);
// console.log (fruits[0]);
// console.log (fruits[fruits.length-1]);
// fruits.push('orange'); // дописали элемент в конец
// console.log (fruits); // вывели весь массив
// fruits.unshift ('Mango'); // дописали элемент в начало
// console.log (fruits); // вывели весь массив
// fruits.pop(); // удалили последний элемент 
// fruits.shift () ;// удалили первый элемент
// console.log (fruits); // вывели весь массив
// fruits.splice (0,2); // удалили 2 элемента начиная с 0 индекса
// console.log (fruits); // вывели весь массив

// // разделить массив на части( 
// let fruits1 = fruits.splice(0,2) ;

// let styles = ['Jazz', 'Blues'];
// styles.push('R-n-R');
// styles [1] = 'Classic';
// styles.shift () ;
// styles.unshift ('Rap', 'Reggae');
// console.log (styles); 

// // Задание: Написать программу, в которой объявлен массив с 5 числовыми 
// элементами. Программа должна заполнить новый пустой массив 
// квадратами чисел из первого массива. 
// // Пример: 
// // Исходный массив [1, 4, 2, 5, 3]
// // Итоговый массив [1, 16, 4, 25, 9]
// let num = [1, 4, 2, 5, 3];
// let num1= [0,0,0,0,0];
// num1 [0]= num[0]*num[0];
// num1 [1]= num[1]*num[1];
// num1 [2]= num[2]*num[2];
// num1 [3]= num[3]*num[3];
// num1 [4]= num[4]*num[4];
// console.log (num1);


// ИНКРЕМЕНТ ++ и -- работает, пост-инкремент и пре-инкремент
// let num = [1, 4, 2, 5, 3];
// for (let num =0; num<5; num++){

// console.log (num);
// if (num ==2 ) {
//     break;
//     // также можно continue чтобы 
//     // пропустить какую то итерацию
// }
// }
// Заполняем массив циклом
// let num = [1, 4, 2, 5, 3];
// let num1= [0,0,0,0,0];
// console.log (num);
// console.log (num1);
// for (let i=0; i<num.length; i++){
//     num1[i]=(num[i]**2);
// }
// console.log (num);
// console.log (num1);

// let arr = []; 
// for (let i = 0; i < 5; i++) {
//     arr.push (Number(prompt('Enter number')));
// }
// console.log (arr);


//      ОБЬЕКТЫ
// let user = {
//     name: 'John', 
//     age:30, 
//     'likes car': true} // обьявили обьект
// console.log (user);
// console.log(user.name);

// user.isAdmin=true; // новое свойство обьекта
// console.log (user);

// delete user.name; // удалили свойство
// console.log (user); 

// const cars = {}; // = let cars 

// console.log(user["likes car"]); // если свойство из неск слов то скобки надо

// user['likes birds'] = false;
// console.log (user.age, user["likes car"], user.name); 

// // ЦИКЛ for in
// for (let key in user){ // 
//     console.log(key); // вывод ключей
//     console.log (user[key]); // только значения
// }

// user.age= 100; // ввели новое значение свойства

// let user = {
//     name : 'John',
//     surname : 'SMith', 

// }
// user.name = Pete;
// delete user.name;

// let codes= {
//     '49': 'Germany',
//     '48': 'Swiss',
//     '41': 'GB',
// }
// for (let key in codes){
//     // console.log (codes[key]) выводятся значения по возрастанию

// }

// let codes1= {
//     '+49': 'Germany',
//     '+41': 'GB',
//     '+48': 'Swiss',
    
// }
// for (let key in codes1){
//     console.log (codes1[key]) //выводятся значения по порядку 

// }

// console.log ('name' in user); проверяем есть ли такой ключ в обьекте

// сумма элементов массива
// let numbers = [100, -15, 0, 200, -25, 55, 0];
// let sum = 0;
//  for (let index = 0; index < numbers.length; index++) {
//     sum = sum + numbers[index];  
//  }
// console.log (numbers);
// console.log (sum);

// ВЫВОД СУММЫ ВСЕХ ЭЛЕМЕНТОВ (ключей )ЦИКЛОМ FOR - IN 
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum=0;
// for (const key in salaries) {
     
//         sum = salaries[key]+sum

//     }
//     console.log(sum);


// ФУНКЦИИ - типа метода в Джава

// function showMessage (){
//     console.log('Hello');
// }
// showMessage(); // не надо ничего больше писать, вызывается функция


//  а вот тут функция принимает на входе аргумент или несколько
// можно вводить с терминала переменные их подавать на вход
// function showMessage (userName, age){
//     console.log ('Hello '+ userName + age);
// }
// showMessage('anya');

//  let firstName=prompt('Enter nasme');
//  let age=prompt('Enter age');
// showMessage (firstName, age);

// Переменная видна только внутри функции
//____________________________________________________________
// Обращение к функции которая на вход просит параметры
// function sum (num1, num2){
//     let sum= num1+num2;
//     console.log (sum); // просто вывод на экран
//     return num1+num2; //  а вот это возврат суммы на выход, после этого все игнорируется
// }
// // а вот так снаружи функции мы оперируем с результатом ее работы
// let result = sum (3, 300);
// let result2 = sum (33, 300);
// console.log (result, result2);

// Испорльзование функций 
// function checkAge (age) {
//     if (age>18){
//         return true;
//     }
//     return false;
// }
// let age = Number (prompt ('How old r u'));
// if (checkAge(age)){ // имеется в виду что функция вернула ТРУЕ
//     console.log('Access granted');}
//     else { // имеется в виду что функция вернула ФАЛЬСЕ
//         console.log('Access NOT');
//     }

//Объявить функцию, которая считывает значение через
 //prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
// function min (a){
//     if ((a%2)==0) {
//         console.log ('yes');
//     } else {

//     console.log ('no');}
// }

// let a=Number (prompt('Enter num'));
// min(a);
// ___________________________________________________
