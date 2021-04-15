/**
 * Задача 5.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, count) {
    if (value == null || !(Array.isArray(value) || ['string', 'number'].includes(typeof value))) {
        throw 'Invalid argument'
    }
    let result = []
    for (let i = 0; i < count; i++) {
        result.push(value)
    }
    return result
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
