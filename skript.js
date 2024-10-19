// Выполните задания и прикрепите ссылку на js файл, опубликованный на gitHub/сodepen
// Задание: Работа с массивами в JavaScript

// Задание 1: Найти сумму всех элементов массива
// Напишите функцию  sumArray , которая принимает массив чисел и возвращает сумму всех
// элементов. Реализуйте это с помощью цикла  for .

let numb = [1,2,3,4,5];
function sumArray(numb) { 
         let sum = 0;
        for (let i = 0; i < numb.length; i++) {
            sum += numb[i];
            }
        return sum;
    }
   console.log(sumArray(numb)); 
    
// Задание 2: Найти максимальный элемент массива
// Напишите функцию  findMax , которая принимает массив чисел и возвращает максимальный
// элемент. Используйте цикл  for .

 let numbers = [3, 1, 4, 1, 5, 9];
 function findMax(numbers) { 
  let max;
let min = numbers[0];
     for(let i = 0; i < numbers.length; i++){
         if((numbers[i]) < min){
             min = numbers[i]; 
         } else {
             max = numbers[i];
         }
     }
     return max;
 }
 console.log(findMax(numbers)); 


// Задание 3: Фильтрация массива по условию
// Создайте функцию  filterArray , которая принимает массив чисел и возвращает новый
// массив, содержащий только четные числа. Реализуйте это с использованием цикла  for .



// Задание 4: Реализация метода массива "map" через цикл
// Напишите функцию  mapArray , которая принимает массив и функцию-преобразователь. Эта
// функция должна возвращать новый массив, где каждый элемент является результатом
// применения функции-преобразователя к каждому элементу исходного массива. Реализуйте
// это с использованием цикла.
 let numbers2 = [1, 2, 3, 4, 5]; 
     multiplyByTwo = numbers2.map(function (num) { 
    return num * 2; 
    })
 console.log(multiplyByTwo);
let numbers3 = [1, 2, 3, 4, 5];
       for (let i=0, len=numbers3.length; i<len; i++) {
        numbers3[i] *= 2;
         } 
 console.log(numbers3); 
 
// Задание 5: Реализация метода массива "forEach" через цикл
// Создайте функцию  forEachArray , которая принимает массив и функцию, и применяет эту
// функцию к каждому элементу массива. Реализуйте это с использованием цикла  for .
 let numbers4 = [1, 2, 3, 4, 5]; 
 numbers4.forEach(function printElement(element) { 
   console.log(element); 
 } )
 
 let numbers5 = [1, 2, 3, 4, 5];
    let index1;
    for (index1 = 0; index1 < numbers5.length; ++index1) {
        console.log(numbers5[index1]);
    }    

// Задание 6: Развернуть массив
// Напишите функцию  reverseArray , которая принимает массив и возвращает его развернутую
// версию. Реализуйте это без использования встроенного метода  reverse , используя цикл for .
   let numbers6 = [1, 2, 3, 4, 5]; 
  function reverse(Array) {
    while (Array.length) {
    output.push(Array.pop());
         }
         return numbers6;
      }
       console.log(reverse);
    
 let numbers7 = [1, 2, 3, 4, 5];
 function reverseArray(arr) {
         while (arr.length) {
         numbers7.push(arr.pop());
     }
      return numbers7;
      }
 
  console.log(reverseArray); 