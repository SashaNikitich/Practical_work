const pages = {
    task1: `
        <h1>Порівняння чисел</h1>
        <div class="calculator">
            <input type="number" id="number1" placeholder="Перше число" />
            <input type="number" id="number2" placeholder="Друге число" />
            <button onclick="compare()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task2: `
        <h1>Обчислення функції y = √(x - 10)</h1>
        <div class="calculator">
            <input type="number" id="x" placeholder="Введіть число" />
            <button onclick="calculateFunction()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task3: `
        <h1>Функція з обмеженням y = √(5 - x) / (x - 1)</h1>
        <div class="calculator">
            <input type="number" id="x" placeholder="Введіть число" />
            <button onclick="calculateFunction2()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task4: `
        <h1>Тип трикутника</h1>
        <div class="calculator">
            <input type="number" id="A" placeholder="Перша сторона" />
            <input type="number" id="B" placeholder="Друга сторона" />
            <input type="number" id="C" placeholder="Третя сторона" />
            <button onclick="triangleType()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task5: `
        <h1>Номер дня тижня</h1>
        <div class="calculator">
            <input type="number" id="dayNumber" placeholder="Введіть номер дня" />
            <button onclick="dayOfWeek()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task6: `
        <h1>Тип дня тижня</h1>
        <div class="calculator">
            <input type="number" id="dayNumber" placeholder="Введіть номер дня" />
            <button onclick="dayType()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task7: `
        <h1>Більше число з тернарним оператором</h1>
        <div class="calculator">
            <input type="number" id="A" placeholder="Перше число" />
            <input type="number" id="B" placeholder="Друге число" />
            <button onclick="findLarger()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task8: `
        <h1>Парне чи непарне число</h1>
        <div class="calculator">
            <input type="number" id="n" placeholder="Введіть число" />
            <button onclick="evenOrOdd()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task9: `
        <h1>Вартість електроенергії</h1>
        <div class="calculator">
            <input type="number" id="start" placeholder="Початкові показники" />
            <input type="number" id="end" placeholder="Кінцеві показники" />
            <button onclick="electricityCost()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task10: `
        <h1>Перевірка на трикутник</h1>
        <div class="calculator">
            <input type="number" id="A" placeholder="Перша сторона" />
            <input type="number" id="B" placeholder="Друга сторона" />
            <input type="number" id="C" placeholder="Третя сторона" />
            <button onclick="canFormTriangle()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task11: `
        <h1>Агрегатний стан води</h1>
        <div class="calculator">
            <input type="number" id="temperature" placeholder="Температура води" />
            <button onclick="waterState()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task12: `
        <h1>Пора року</h1>
        <div class="calculator">
            <input type="number" id="month" placeholder="Номер місяця" />
            <button onclick="season()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task13: `
        <h1>Прямокутний трикутник</h1>
        <div class="calculator">
            <input type="number" id="A" placeholder="Перша сторона" />
            <input type="number" id="B" placeholder="Друга сторона" />
            <input type="number" id="C" placeholder="Третя сторона" />
            <button onclick="isRightTriangle()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task14: `
        <h1>Корені квадратного рівняння</h1>
        <div class="calculator">
            <input type="number" id="a" placeholder="Коефіцієнт a" />
            <input type="number" id="b" placeholder="Коефіцієнт b" />
            <input type="number" id="c" placeholder="Коефіцієнт c" />
            <button onclick="quadraticRoots()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task15: `
        <h1>Кількість днів у місяці</h1>
        <div class="calculator">
            <input type="number" id="month" placeholder="Номер місяця" />
            <input type="number" id="year" placeholder="Рік" />
            <button onclick="daysInMonth()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task16: `
        <h1>Корені квадратного рівняння з обмеженням</h1>
        <div class="calculator">
            <input type="number" id="a" placeholder="Коефіцієнт a" />
            <input type="number" id="b" placeholder="Коефіцієнт b" />
            <input type="number" id="c" placeholder="Коефіцієнт c" />
            <button onclick="countQuadraticRoots()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task17: `
        <h1>Яка чверть?</h1>
        <div class="calculator">
            <input type="number" id="x" placeholder="x" />
            <input type="number" id="y" placeholder="y" />
            <button onclick="findQuarter()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task18: `
        <h1>Номери будинків</h1>
        <div class="calculator">
            <input type="number" id="n" placeholder="Номер будинку 1" />
            <input type="number" id="m" placeholder="Номер будинку 2" />
            <button onclick="sameSide()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
};

function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page] || '<h1>Сторінка не знайдена</h1>';
}

function compare() {
    const resultDiv = document.getElementById('result');
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (number1 > number2) {
        resultDiv.textContent = `Більше число: ${number1}`;
    } else if (number2 > number1) {
        resultDiv.textContent = `Більше число: ${number2}`;
    } else {
        resultDiv.textContent = "Числа рівні.";
    }
}

function calculateFunction() {
    let x = parseInt(document.getElementById('x').value);
    const resultDiv = document.getElementById('result');

    if (x >= 10) {
        const result = Math.sqrt(x - 10);
        resultDiv.textContent = `Результат: ${result}`;
    } else {
        resultDiv.textContent = `Обчислити неможливо`;
    }
}

function calculateFunction2() {
    let x = parseInt(document.getElementById('x').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(x)) {
        resultDiv.textContent = `Будь ласка, введіть число`;
        return;
    }

    if (x !== 1 && x <= 5) {
        const result = Math.sqrt(5 - x) / (x - 1);
        resultDiv.textContent = `Результат: ${result}`;
    } else {
        resultDiv.textContent = `Обчислити неможливо`;
    }
}

function triangleType() {
    let a = parseInt(document.getElementById('A').value);
    let b = parseInt(document.getElementById('B').value);
    let c = parseInt(document.getElementById('C').value);
    const resultDiv = document.getElementById('result');

    if (a === b && b === c) {
        resultDiv.textContent = "Рівносторонній";
    } else if (a === b || b === c || a === c) {
        resultDiv.textContent = "Рівнобедрений";
    } else {
        resultDiv.textContent = "Різносторонній";
    }
}

function dayOfWeek() {
    let dayNumber = parseInt(document.getElementById('dayNumber').value);
    const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
    const resultDiv = document.getElementById('result');

    if (dayNumber >= 1 && dayNumber <= 7) {
        resultDiv.textContent = `День тижня: ${days[dayNumber - 1]}`;
    } else {
        resultDiv.textContent = "Невірний номер дня";
    }
}

function dayType() {
    let dayNumber = parseInt(document.getElementById('dayNumber').value);
    const resultDiv = document.getElementById('result');

    const days = [true, true, true, true, true, false, false]; // 1 = Sunday, 7 = Saturday (false = holiday, true = working)

    if (dayNumber >= 1 && dayNumber <= 7) {
        resultDiv.textContent = days[dayNumber - 1] ? "Робочий" : "Вихідний";
        resultDiv.style.color = days[dayNumber - 1] ? "black" : "red";
    } else {
        resultDiv.textContent = "Невірний номер дня";
    }
}

function findLarger() {
    let a = parseInt(document.getElementById('A').value);
    let b = parseInt(document.getElementById('B').value);
    const resultDiv = document.getElementById('result');

    resultDiv.textContent = `Більше число: ${a > b ? a : b}`;
}

function evenOrOdd() {
    let n = parseInt(document.getElementById('n').value);
    const resultDiv = document.getElementById('result');

    if (n > 0) {
        resultDiv.textContent = n % 2 === 0 ? "Парне" : "Непарне";
    } else {
        resultDiv.textContent = "Використовуються тільки натуральна множина"
    }
}

function electricityCost() {
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    const normRate = 0.9; // 0.9 UAH per kWh for up to 100 kWh
    const excessRate = 1.68; // 1.68 UAH per kWh for consumption over 100 kWh
    const resultDiv = document.getElementById('result');

    let consumption = end - start;
    if (consumption <= 100) {
        resultDiv.textContent = `Сума до сплати: ${consumption * normRate} грн`;
    } else {
        let excessConsumption = consumption - 100;
        resultDiv.textContent = `Сума до сплати: ${(100 * normRate) + (excessConsumption * excessRate)} грн`;
    }
}

function canFormTriangle() {
    let a = parseInt(document.getElementById('A').value);
    let b = parseInt(document.getElementById('B').value);
    let c = parseInt(document.getElementById('C').value);
    const resultDiv = document.getElementById('result');

    if (a + b > c && a + c > b && b + c > a) {
        resultDiv.textContent = "Можна утворити трикутник";
    } else {
        resultDiv.textContent = "Неможливо утворити трикутник";
    }
}

function waterState() {
    let temperature = parseInt(document.getElementById('temperature').value);
    const resultDiv = document.getElementById('result');

    if (temperature <= 0) {
        resultDiv.textContent = "Твердий";
    } else if (temperature > 0 && temperature < 100) {
        resultDiv.textContent = "Рідкий";
    } else {
        resultDiv.textContent = "Газоподібний";
    }
}

function season() {
    let month = parseInt(document.getElementById('month').value);
    const resultDiv = document.getElementById('result');

    if (month === 12 || month === 1 || month === 2) {
        resultDiv.textContent = "Зима";
    } else if (month >= 3 && month <= 5) {
        resultDiv.textContent = "Весна";
    } else if (month >= 6 && month <= 8) {
        resultDiv.textContent = "Літо";
    } else if (month >= 9 && month <= 11) {
        resultDiv.textContent = "Осінь";
    } else {
        resultDiv.textContent = "Невірний номер місяця";
    }
}

function isRightTriangle() {
    let a = parseInt(document.getElementById('A').value);
    let b = parseInt(document.getElementById('B').value);
    let c = parseInt(document.getElementById('C').value);
    const resultDiv = document.getElementById('result');

    let sides = [a, b, c].sort((x, y) => x - y);
    if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) {
        resultDiv.textContent = "Трикутник прямокутний";
    } else {
        resultDiv.textContent = "Трикутник не є прямокутним";
    }
}

function quadraticRoots() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');

    let D = b ** 2 - 4 * a * c;
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        resultDiv.textContent = `Два корені`;
    } else if (D === 0) {
        let x = -b / (2 * a);
        resultDiv.textContent = `Один корінь`;
    } else {
        resultDiv.textContent = "Коренів немає";
    }
}

function daysInMonth() {
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);
    const resultDiv = document.getElementById('result');

    let days = new Date(year, month, 0).getDate();
    resultDiv.textContent = `Кількість днів: ${days}`;
}

function countQuadraticRoots() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');
    
    if (Math.abs(a) > 100 || Math.abs(b) > 100 || Math.abs(c) > 100 || a === 0) {
        resultDiv.textContent = "Неправильне введення: a ≠ 0, і коефіцієнти повинні бути в межах [-100, 100]";
        return;
    }

    let D = b ** 2 - 4 * a * c;

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        resultDiv.textContent = `Два корені: x1 = ${Math.min(x1, x2)}, x2 = ${Math.max(x1, x2)}`;
    } else if (D === 0) {
        let x = -b / (2 * a);
        resultDiv.textContent = `Один корінь: ${x}`;
    } else {
        resultDiv.textContent = "Коренів немає";
    }
}

function findQuarter() {
    let x = parseFloat(document.getElementById('x').value);
    let y = parseFloat(document.getElementById('y').value);
    const resultDiv = document.getElementById('result');

    if (x > 0 && y > 0) {
        resultDiv.textContent = "1";
    } else if (x < 0 && y > 0) {
        resultDiv.textContent = "2";
    } else if (x < 0 && y < 0) {
        resultDiv.textContent = "3";
    } else if (x > 0 && y < 0) {
        resultDiv.textContent = "4";
    } else {
        resultDiv.textContent = "0";
    }
}

function sameSide() {
    let n = parseInt(document.getElementById('n').value);
    let m = parseInt(document.getElementById('m').value);
    const resultDiv = document.getElementById('result');

    if ((n % 2 === 0 && m % 2 === 0) || (n % 2 !== 0 && m % 2 !== 0)) {
        resultDiv.textContent = "1";
    } else {
        resultDiv.textContent = "0";
    }
}
