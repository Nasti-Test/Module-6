function createArrayFromZeroToN(n) {
  return Array.from({length: n + 1}, (_, i) => i);
}

const userlnput = prompt("Пожалуйста, введите любое число:");

const numberlnput = Number(userlnput);

if (isNaN(numberlnput)) {
    console.error("Ошибка: Вы ввели не число!");
} else {

    const resultArray = createArrayFromZeroToN(numberinput);
    console.log("Результат:", resultArray);
}