// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [1, 2, 4, 7, 8, 12, 15];
let check = false
for (let i = 1; i < arr.length; i++){
  if(arr[i] !== arr[0]){
    check = true
    break
  }
};

console.log(check ? 'Не все одинаковые' : 'Все одинаковые')