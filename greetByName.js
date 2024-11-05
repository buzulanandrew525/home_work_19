/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 */

function greetByName(msg, name) {
  return msg + ', ' + name;
}

console.log(greetByName('Hi', 'John')) // Hi, John
document.write(greetByName('Hi', 'John') + "<br>")

console.log(greetByName('Hey', 'Bob')) // Hey, Bob
document.write(greetByName('Hey', 'Bob') + "<br>")

console.log(greetByName('Hello', 'Mary')) // Hello, Mary
document.write(greetByName('Hello', 'Mary') + "<br>")