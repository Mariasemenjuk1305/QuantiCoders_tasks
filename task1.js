/* Task 1
Candy weighs X grams, pineapple - Y grams, and apple - Z grams.
Need to write a program that will determine how many different versions of tips weighing exactly W grams can make Santa Claus.
Input data
The function should receive four integers X, Y, Z, and W.
Output data
The function should return a single integer - the number of gift options.
Example: 

X = 10
Y = 25
Z = 15
W = 40
Result: 3*/

function presentBySanta(x, y, z, w) {
  // Створюємо масив з компонентів подарунків
  let arg = [];
  arg.push(x, y, z);
  //Кількість можливих варіантів
  let count = 0;
  /* Якщо вага всього подарунка більша від одного компонента
  то можна пробувати щось складати*/
  if (w>=Math.min(...arg)){
    let res = 0;
    let i = 0;
  //шукаємо кількість можливих варіантів
    while (res <= w) {
      res += arg[i];
      count++;
      i++;
    }
  }
  //повертаємо кількість
  return count;
};

console.log('Скільки різних подарунків можна скласти', presentBySanta(10, 15, 25, 50));



