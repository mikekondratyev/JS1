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


// DOM 
// let elements = document.querySelectorAll('ul>li'); // "массив" тегов <li> которые находятся в <ul>
// console.log (elements); // список элементов без содержимого
// console.log (elements[0].innerHTML); // содержимое элемента 
// console.log (elements[0].innerText); // только текст из элемента

// // цикл обычный для явывода элементов по индексу
// for (let i=0; i<elements.length; i++){
//     console.log (elements[i].innerText);
// }

// // цикл for-of для вывода элементов 
// // присваваивает элементу списка введенный пользователем текст
// // query selector захватил все теги <li> в боди
// for (const elem of elements) {
//     let listText= prompt ('Enter');
//     elem.innerText = listText;
//    //console.log (elem.innerText) ;
// }

// let element = document.querySelector ('.p3'); // выбрали по классу через точку,
// // можно выделять по айди, по классу, по тегу
// // удобная штука для выбора элемента для обработки
// //console.log (element.querySelector('p3')); 
// //console.log (element.innerHTML);
// element.innerText = "newtext";

// В одну строку меняем содержитмое или текст элемента
// document.querySelector('p3').innerText='Yoooo';

// Задача: Написать программу, которая находит параграфы
//  и заменяет в каждом из них текст на  “привет”
// let elements = document.querySelectorAll('p');
// for (let elem of elements) {
//         elem.innerText = 'приветlistText';
// }

// Задача: Написать скрипт, который находит параграфы
//  и первым 3 параграфам
//  меняет текст на указанные пользователем значения.
// let elements = document.querySelectorAll('p');
// for (let i=0; i<3; i++){
//     let listText= prompt ('Enter new text');
//         elements[i].innerText = listText; 
// } 

// рвабота со ссылками 
// let link = document.querySelector ('a');
// link.innerText='Google';
// // замена атрибута, синтаскис название атрибута, содержимое
// link.setAttribute ('href', 'https://learn.javascript.ru/dom-nodes');
// link.setAttribute ('target', '_blank');

// // проверка наличия атрибута
// console.log(link.hasAttribute('id'));
// // геттер атрибута
// console.log(link.getAttribute('id'));
// // удалить атрибут
// link.removeAttribute('id');

// парсим ссылки со страницы и записываем их в массив
// let links = document.querySelectorAll ('a'); //выбрали все теги а 
// let linksArray= []; // создали пустой массив
// for (let link of links) {
//     linksArray.push(link.getAttribute('href'));  // дописали в конец массива значение атрибута хреф 
// }
// console.log(linksArray); // вывели массив
// // конец!

// присваиваем картинке адрес и выводим на экран картинку из интернета
// let image = document.querySelector('img');
// image.setAttribute('src', 'https://www.hueber.de/exercises/530-25137/contents/2c9f850d5fe91c8d015ffe0cef76007f/S3_83062_RR_Schritte_Plus_Neu_A1_wei_.svg')
// image.setAttribute('alt', 'cat')

// Задача: Написать скрипт, который находит 
// картинки в блоке с классом main и первым 5 картинкам 
// меняет url на указанное значение.

// let images = document.querySelectorAll ('.main>img');
// let url = 'google.ru';
// for (let index = 0; index < 5; index++) {
// images[index].setAttribute ('src','https://www.hueber.de/exercises/530-25137/contents/2c9f850d5fe91c8d015ffe0cef76007f/S3_83062_RR_Schritte_Plus_Neu_A1_wei_.svg');   
// }


// ТЕМА С ИЗМЕНЕНИЕМ КЛАССА ИЛИ ЕГО ДОБАВЛЕНИЕМ
// можно его менять и изменять вид через цсс
// важно: цсс выполняется каскадно, по порядку
//  let par = document.querySelector('p');
// par.className = 'par1'; //new class name
// console.log (par.className);
// let num = Number (prompt('Enter nummer'));
// if (num>10){
//     par.classList.toggle ('par1');
//    //par.classList.add ('par1'); // add class name
// // если ввели число больше 10то меняется класс оьекта и 
// // его например цвет который мы прописали в цсс
// }
// console.log (par.className);
// // можно также удалить класс через
// // par.classList.remove ('par1');
// //toggle: если класс есть то удаляем, если нет то добавляем
// // contains - смотрим есть такой класс или нет, возвращает тру или фолс


// вывели классы обьекта 
// let classes= par.classList;
// for (let classname of classes){
//     console.log (classname);
// }



// СОЗДАНИЕ ЭЛЕМЕНТОВ ДОМ

// let div = document.createElement('div'); // создали элемент див , его свойства в цсс
// div.classList.add ('block1'); // добавили ему свойства блок1
// div.innerText = "Hello wrld"; // вписали ему текст 
// document.body.prepend (div); // вывели до 
// document.body.append (div); // вывели после 
// // • node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// // • node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// • node.before(...nodes or strings) – вставляет узлы или строки до node,
// • node.after(...nodes or strings) – вставляет узлы или строки после node,
// • node.replaceWith(...nodes or strings) – заменяет node заданными узлами или строками.


// удаление элементов ДОМ если он есть 
// let par = document.querySelector('p'); // выбрали р
// par.remove();

// ФУНКЦИЯ АЛЕРТ вывод сообщений на экран: пока не нажмешь ОК, не выполняется код
// alert ('hello');


// Cоздать и  вывести циклом 5 раз блок1 
 
    // for (let index = 0; index < 5; index++) {
    //   let div = document.createElement('div'); // создали элемент див , его свойства в цсс
    // div.classList.add ('block1'); // добавили ему свойства блок1
    // div.innerText = "Hello wrld"; // вписали ему текст 
    // if (index%2==0){
    //     document.body.prepend (div); // вывели до  
    // }
    // else{
    //     document.body.append (div); // вывели после  
    // }
    // }


 // +++++++++++++++++++++++++++++++++++++++ 

    // Задание: Создайте функцию clear(elem), 
    // которая удаляет все элементы с заданным селектором.

//     function clear (elem){       
//             let elements = document.querySelectorAll(elem); 
//             for (let list of elements) {
//             console.log (list)  ; 
//                 list.remove();   
//             }
//          }
//          clear ('li'); 
//          clear ('p');
//    // +++++++++++++++++++++++++++++++++++++++    


// Написать скрипт : вводим 10 раз что-то и вносим это в список тега li 

// let list2 = document.querySelector('.list2');
// for (let i = 0; i<10; i++) {
//     let data = prompt ('Input text for element of list ');
//  let li = document.createElement ('li');
//  li.innerText = data;
//  list2.append(li) ;         
    
// }

//++++++++++++++++++++++++++++++++++++
//События в браузере по кнопккам мыши, движению курсора, клавиатуре
// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при  касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.

// События на элементах управления:

// submit – пользователь отправил форму <form>.
// // focus – пользователь фокусируется на элементе, например нажимает на <input>.

// // Клавиатурные события:

// // keydown и keyup – когда пользователь нажимает / отпускает клавишу.


// let paragraph = document.querySelector('p');

// paragraph.addEventListener ('click', function (){alert('Hello')}, true); // указали в обработчике функцию

// function myFunction (){
//     alert ('Hello');
// }
// paragraph.addEventListener ('click', myFunction); //создали функцию и вызвали ее
// paragraph.addEventListener ('mouseover', myFunction3); //создали функцию и вызвали ее

// function myFunction (){
//     alert ('Hello JS'); // если создать две функции, компилятор оброаботает по очереди

// }

// function myFunction2 (){
//     alert ('Hello JS'); // если создать две функции, компилятор оброаботает по очереди
    
// }

// function myFunction3 (){
//     alert ('Hello JS'); // если создать две функции, компилятор оброаботает по очереди
    
// }

// // удаление обработчика событий 
// paragraph.removeEventListener('mouseover', myFunction3);

//Создание кнопки, парный тегButton ,  по клику выводим в консоль Хелло
// let button = document.querySelector ('.click');
// button.addEventListener ('click', myFunction4);
// function myFunction4 () {
//     console.log ('Hello');
// }


//+++++++++++++++++++++++++++++++++++++++++++++++
// Задание: Переделать кнопку таким образом, чтобы при нажатии на нее в 
// параграфе в интерфейсе значение увеличивалось на 1. 
// В начале  рассмотрите процесс, при котором мы каждый раз считываем число
//  из параграфа, меняем и записываем обратно, а потом переделайте  процесс 
//  так, чтобы значение 
// хранилось в переменной, изменялось при клике и записывалось в параграф.

// let button = document.querySelector('.click');
// let paragraph = document.querySelector('p');
// function myFunction5 (){
// Number (paragraph.innerText);
// paragraph.innerText = Number (paragraph.innerText) + 1}
// let num = button.addEventListener ('click', myFunction5);
// //+++++++++++++++++++++++++++++++++++++++++++++++

// Задание: Написать программу, которая создает две кнопки и 
// вешает на них событие нажатия. 
// При нажатии на первую выводится в консоль  “минус”, а 
// при нажатии на вторую ‘плюс’.

// let button1 = document.createElement('button');
// button1.classList.add ('button1');
// document.body.prepend (button1);
// button1.innerText = "Plus";

// let button2 = document.createElement('button');
// button2.classList.add ('button2');
// document.body.prepend (button2);
// button2.innerText = "Minus";


// let onclick1 = document.querySelector('.button1');
// onclick1.addEventListener ('click', myFunction1);

// let onclick2 = document.querySelector('.button2');
// onclick2.addEventListener ('click', myFunction2);

// function myFunction1 (){
//     console.log ('+')
// }

// function myFunction2 (){
//     console.log ('-')
// }

// // Задание: Доработать процесс таким образом, чтобы при нажатии на плюс 
// // в консоль выводилось число, 
// // увеличившись на 1, а при нажатии на  минус уменьшившись на 1. 
// // Для решения этой задачи понадобится
// //  создать переменную и изменять ее при нажатии на ту или иную кнопку.

// let numPlus=0;
// let numMinus=0;
// let button1 = document.createElement('button');
// button1.classList.add ('button1');
// document.body.prepend (button1);
// button1.innerText = "Plus";

// let button2 = document.createElement('button');
// button2.classList.add ('button2');
// document.body.prepend (button2);
// button2.innerText = "Minus";


// let onclick1 = document.querySelector('.button1');
// onclick1.addEventListener ('click', myFunction1);

// let onclick2 = document.querySelector('.button2');
// onclick2.addEventListener ('click', myFunction2);

// function myFunction1 (){
//     numPlus=numPlus +1;
//     console.log (numPlus);

// }

// function myFunction2 (){
//     numMinus=numMinus -1;
//     console.log (numMinus);
// }

// ++++++++++++++++++++

// Изменяем классы и свойства обьектов
// let button1 = document.createElement('button');
// button1.classList.add ('button1');
// document.body.prepend (button1);
// button1.innerText = "Plus";
// button1.style.backgroundColor = "gray";
// button1.style.height = "10";
// // ++++++++++++++++++++



// Задание: Создать квадратный div с рамкой и при
//  наведении курсора на него цвет div-а 
// поменять на введённый пользователем цвет 
// (все шаги  сделать с помощью JS).

// let div = document.createElement('div');
// div.classList.add ('mydiv');
// document.body.prepend (div);
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "5px solid red";

// let mouse = document.querySelector('div');
// mouse.addEventListener ('mouseover', myFunctionMouseOver);

// function myFunctionMouseOver (){
//     let color = prompt ('Input color')
//     div.style.borderColor = color;
// }

// // ++++++++++++++++++++

// Callback FUNCTION 

// function first (){
    
//     console.log ('1');
// }
    

// }

// function second (){
//     console.log ('2')

// }

// first();
// second();

// Функция выполняется по порядку даже если поставить и таймаут 

// CALLBACK METHOD

// function myf (callback) {
//     let a = [4,5,6];
//     let elem = document.querySelector ('.num');
// callback (elem,a);
// }

// function out (elem, arr) {
//     elem.innerText=arr;}

//     myf (out); 