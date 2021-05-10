/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// РЕШЕНИЕ

console.log(isEven(3)); // false
console.log(isEven(4)); // true

function isEven(num) {
    if (typeof num !== 'number') {
        throw Error('Not a number')
    }
    return num % 2 === 0
}