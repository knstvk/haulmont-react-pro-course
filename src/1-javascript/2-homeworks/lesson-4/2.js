/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

function f(...params) {
    return params.reduce(((previousValue, currentValue) => {
        if (typeof currentValue !== 'number') {
            throw Error('Not a number')
        }
        return previousValue + currentValue
    }))
}