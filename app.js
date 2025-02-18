function binarySearch(low, high) {
    return Math.floor((low + high) / 2);
}

let computerOne = Math.floor(Math.random() * 101);
console.log(`Загаданное число: ${computerOne}`);

let low = 0; // Нижняя граница
let high = 0; // Верхняя граница
let computerTwo = Math.floor(Math.random() * 101); // Начальное предположение

while (computerOne !== computerTwo) {
    console.log(`Пробую число ${computerTwo}`);

    if (computerOne > computerTwo) {
        console.log("Больше");
        low = computerTwo + 1; // Обновляем нижнюю границу
    } else if (computerOne < computerTwo) {
        console.log("Меньше");
        high = computerTwo - 1; // Обновляем верхнюю границу
    }
    computerTwo = binarySearch(low, high); // Обновляем предположение
}

console.log("Угадал!");