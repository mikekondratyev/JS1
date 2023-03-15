// 1.    Составьте программу, которая присваивает переменной d значение 7,
//  а затем выводит на экран: в первой строке - это значение, во второй
//   – квадрат этого значения, в третьей – куб этого значения.
let d=7;
console.log(d); 
console.log(d*d); 
console.log(d**3);
// как сделать одной строкой кода не осилил, спецсимволы <br> и \n для переноса строки не сработали

// 2. Составьте программу, которая принимает с клавиатуры целое число и,
// если оно положительное, увеличивает его вдвое.
// Программа должна выводить на экран новое значение.
let n= Number (prompt ('Input integer'));
if (n>0) {
    console.log(n*2);
}

// 3. Составьте программу, которая принимает с клавиатуры два целых числа и,
// если первое больше второго, выводит на экран их сумму, если же наоборот
//  – выводит на экран их произведение. В случае же, если числа одинаковы, 
//  программа выводит на экран сообщение "числа одинаковые".
let int1= Number (prompt ('Input integer 1'));
let int2= Number (prompt ('Input integer 2'));
if (int1>int2){
    console.log(int1+int2);
}else if (int1<int2){
    console.log(int1*int2);
}else {
    console.log('Both of int1 and int2 equals');
}

// 4. Составьте программу, которая принимает с клавиатуры целое число
//  и выводит на экран его квадрат – но только в том случае, 
//  если введенное число отрицательно. 
// В противном случае – на экран выводится сообщение "ошибка".
let int3= Number (prompt ('Input integer'));
if (int3<0) {
    console.log(int3**2);
}else{
    console.log('Error');
}

// 5. Составьте программу, которая принимает с клавиатуры два числа: 
// первое – количество учеников в классе, второе – количество стульев в кабинете. 
// Программа проверит соответствие между этими двумя значениями и выведет на экран
// соответствующую информацию.
// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает)

let studentsNumber= Number (prompt ('Input number of students'));
let chairsNumber= Number (prompt ('Input number of chairs'));
if (studentsNumber<chairsNumber) {
    console.log('That is enough');
} else {
    console.log('That is NOT enough');
}

// 6. Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. 
// Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш".
// вывод: старт, 1, … 9, финиш)
console.log('Start');
for (let index = 1; index<10; index++) {
    console.log (index);    
}
console.log('Finish');

// 7. Составьте программу, которая выводит на экран все 
// двузначные положительные числа, делящиеся без остатка 
// на 5 (начиная с наименьшего).

console.log('Start');
for (let index = 10; index<99; index++) {
    if (index%5==0){
        console.log(index);
    }    
}
console.log('Finish');
console.log('************');
// 8. Написать цикл, который выводит те числа из массива, которые больше или равны 15.
console.log ('Elements > 15');
let array= [];
for (let index = 0; index < 20; index++) { // массив на 20 элементов
     array[index]=index;  
}
for (let index = 0; index < array.length; index++) {
    if (array[index]>=15){
        console.log (array[index]);
    }
}
console.log('************');
// Написать цикл, который выводит только нечетные числа 
console.log ('Uneven elements');
for (let index = 0; index < array.length; index++) {
    if (array[index]%2!=0){
        console.log (array[index]);
    }
}
console.log('************');
// Вывести только те значения массива, индекс которых кратен трем.
console.log ('Index is a multiple of 3');
for (let index = 0; index < array.length; index++) {
    if (array[index]%3==0){
        console.log (array[index]);
    }
}