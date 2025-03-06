const pages = {
    task1: `
        <h1>Приклад 1</h1>
        
        <p>Визначити менше число. Якщо числа рівні, то повідомляється про це. </p>
        
        <div class="calculator">
            <input type="number" id="number1" placeholder="Перше число" />
            <input type="number" id="number2" placeholder="Друге число" />
            <button onclick="compare()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
        
        
    `,
    task2: `
        <h1>Приклад 2</h1>
        
        <p>Обчислення функції y = √(x - 10)</p>
        
        <div class="calculator">
            <input type="number" id="x" placeholder="Введіть x" />
            <button onclick="calculateFunction()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task3: `
        <h1>Приклад 3</h1>
        
        <p>Функція з обмеженням y = √(5 - x) / (x - 1)</p>
        
        <div class="calculator">
            <input type="number" id="x" placeholder="Введіть x" />
            <button onclick="calculateFunction2()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task4: `
        <h1>Приклад 4</h1>
        
        <p>Програму, яка визначає тип трикутника: “Рівносторонній”, “Рівнобедрений” або “Різносторонній”</p>
        
        <div class="calculator">
            <input type="number" id="A" placeholder="Перша сторона" />
            <input type="number" id="B" placeholder="Друга сторона" />
            <input type="number" id="C" placeholder="Третя сторона" />
            <button onclick="triangleType()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task5: `
        <h1>Приклад 5</h1>
        
        <p>Програма за введеним номером дня тижня визначає його назву.</p>
        
        <div class="calculator">
            <input type="number" id="dayNumber" placeholder="Введіть номер дня" />
            <button onclick="dayOfWeek()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task6: `
        <h1>Приклад 6</h1>
        
        <p>Програма за введеним номером дня тижня визначає робочий цей день чи вихідний. Слово “робочий” виводить чорним кольором, а ”вихідний” – червоним.</p>
        
        <div class="calculator">
            <input type="number" id="dayNumber" placeholder="Введіть номер дня" />
            <button onclick="dayType()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task7: `
        <h1>Приклад 7</h1>
        
        <p>Визначення більшого з двох заданих різних чисел, використавуючи тернарний оператор</p>
        
        <div class="calculator">
            <input type="number" id="A" placeholder="Перше число" />
            <input type="number" id="B" placeholder="Друге число" />
            <button onclick="findLarger()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task8: `
        <h1>Приклад 8</h1>
        
        <p>Дано натуральне число. Визначити парне воно чи ні.</p>
        
        <div class="calculator">
            <input type="number" id="n" placeholder="Введіть число" />
            <button onclick="evenOrOdd()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task9: `
        <h1>Приклад 9</h1>
        
        <p>Відомо початкові та кінцеві показники спожитої електроенергії. Вартість 1кВт·год електроенергії становить 0,9грн, якщо обсяг споживання 
        не перевищує 100кВт·год. Для понаднормових витрат тариф становить 1,68грн. Обчислення кількості спожитої електроенергії за та поза нормою, 
        суму до сплати.</p>
        
        <div class="calculator">
            <input type="number" id="start" placeholder="Початкові показники" />
            <input type="number" id="end" placeholder="Кінцеві показники" />
            <button onclick="electricityCost()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task10: `
        <h1>Приклад 10</h1>
        
        <p>Відомо довжини трьох відрізків. Визначення, чи можна з даних відрізків утворити трикутник</p>
        
        <div class="calculator">
            <input type="number" id="A" placeholder="Перша сторона" />
            <input type="number" id="B" placeholder="Друга сторона" />
            <input type="number" id="C" placeholder="Третя сторона" />
            <button onclick="canFormTriangle()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task11: `
        <h1>Приклад 11</h1>
        
        <p>За заданою температурою води потрібно визначити її агрегатний стан: «Твердий», «Рідкий» чи «Газоподібній»</p>
        
        <div class="calculator">
            <input type="number" id="temperature" placeholder="Температура води" />
            <button onclick="waterState()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task12: `
        <h1>Приклад 12</h1>
        
        <p>Відомо номер місяця. Виведення на екран відповідну пору року.</p>
        
        <div class="calculator">
            <input type="number" id="month" placeholder="Номер місяця" />
            <button onclick="season()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task13: `
        <h1>Приклад 13</h1>
        
        <p>Відомо сторони трикутника, потрібно визначити прямокутний він чи ні</p>
        
        <div class="calculator">
            <input type="number" id="A" placeholder="Перша сторона" />
            <input type="number" id="B" placeholder="Друга сторона" />
            <input type="number" id="C" placeholder="Третя сторона" />
            <button onclick="isRightTriangle()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task14: `
        <h1>Приклад 14</h1>
        
        <p>Відомо коефіцієнти квадратного рівняння. Визначення скільки коренів має дане рівняння: 2, 1 або 0</p>
        
        <div class="calculator">
            <input type="number" id="a" placeholder="Коефіцієнт a" />
            <input type="number" id="b" placeholder="Коефіцієнт b" />
            <input type="number" id="c" placeholder="Коефіцієнт c" />
            <button onclick="quadraticRoots()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task15: `
        <h1>Приклад 15</h1>
        
        <p>Виведення кількість днів в N–му місяці M–го року по григоріанському календарю.</p>
        
        <div class="calculator">
            <input type="number" id="month" placeholder="Номер місяця" />
            <input type="number" id="year" placeholder="Рік" />
            <button onclick="daysInMonth()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task16: `
        <h1>Приклад 16</h1>
        
        <p>Програма для розв’язання квадратного рівняння. 
        Задано 3 числа - коефіцієнти квадратного рівняння відповідно a, b та c. Значення коефіцієнтів не перевищують по модулю 100.</p>
        
        <div class="calculator">
            <input type="number" id="a" placeholder="Коефіцієнт a" />
            <input type="number" id="b" placeholder="Коефіцієнт b" />
            <input type="number" id="c" placeholder="Коефіцієнт c" />
            <button onclick="countQuadraticRoots()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task17: `
        <h1>Приклад 17</h1>
        
        <p>Задано точку з координатами х та у. Визначення, в якій координатній чверті вона розміщена.</p>
        
        <div class="calculator">
            <input type="number" id="x" placeholder="x" />
            <input type="number" id="y" placeholder="y" />
            <button onclick="findQuarter()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
    task18: `
        <h1>Приклад 18</h1>
        
        <p>З'ясування, чи знаходяться будинки з номерами n та m на одній стороні вулиці. Вхідні дані: Значення n та m (1 ≤ n, m ≤ 100).</p>
        
        <div class="calculator">
            <input type="number" id="n" placeholder="Номер будинку 1" />
            <input type="number" id="m" placeholder="Номер будинку 2" />
            <button onclick="sameSide()">Розрахувати</button>
            <div class="result" id="result"></div>
        </div>
    `,
};

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
