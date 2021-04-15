/**
 * Задача 4.
 *
 * Дописать требуемый код что бы код работал правильно.
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Необходимо из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120, а именно число 120.
 *
 * Условия:
 * - Если в переменной source передана не строка — нужно вернуть null.
 */

const PRICE = '$120';

function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        return null
    }
    let num = source.slice(1)
    return Number(num)
}

console.log(extractCurrencyValue(PRICE)); // 120
console.log(typeof extractCurrencyValue(PRICE)); // number
console.log(extractCurrencyValue({})); // null