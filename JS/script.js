const pages = {
    calculator: `
                <h1>Периметр та площа квадрата</h1>
                <div class="calculator">
                    <input type="number" id="sideLength" placeholder="Введіть довжину сторони (м)">
                    <button onclick="calculateArea()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    average: `
                <h1>Середнє арифметичне двох чисел</h1>
                <div class="calculator">
                    <input type="number" id="number1" placeholder="Перше число">
                    <input type="number" id="number2" placeholder="Друге число">
                    <button onclick="calculateAverage()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    rectangle: `
                <h1>Периметр і площа прямокутника</h1>
                <div class="calculator">
                    <input type="number" id="length" placeholder="Довжина">
                    <input type="number" id="width" placeholder="Ширина">
                    <button onclick="calculateRectangle()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    midpoint: `
                <h1>Координати середини відрізка</h1>
                <div class="calculator">
                    <input type="number" id="x1" placeholder="X1">
                    <input type="number" id="y1" placeholder="Y1">
                    <input type="number" id="x2" placeholder="X2">
                    <input type="number" id="y2" placeholder="Y2">
                    <button onclick="calculateMidpoint()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    water: `
                <h1>Споживання води</h1>
                <div class="calculator">
                    <input type="number" id="waterUsage" placeholder="Об’єм води (м³)">
                    <input type="number" id="waterRate" placeholder="Вартість за м³">
                    <button onclick="calculateWaterCost()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `
};

function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page] || '<h1>Сторінка не знайдена</h1>';
}

function calculateArea() {
    const sideLength = document.getElementById('sideLength').value;
    const resultDiv = document.getElementById('result');
    if (sideLength > 0) {
        const area = sideLength * sideLength;
        const perimeter = sideLength * 4;
        resultDiv.textContent = `Периметр: ${perimeter}, Площа: ${area}`;
    } else {
        resultDiv.textContent = 'Введіть коректне значення.';
    }
}

function calculateAverage() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');
    if (!isNaN(number1) && !isNaN(number2)) {
        const average = (number1 + number2) / 2;
        resultDiv.textContent = `Середнє арифметичне: ${average}`;
    } else {
        resultDiv.textContent = 'Введіть обидва числа.';
    }
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const resultDiv = document.getElementById('result');
    if (length > 0 && width > 0) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        resultDiv.textContent = `Периметр: ${perimeter}, Площа: ${area}`;
    } else {
        resultDiv.textContent = 'Введіть коректні значення.';
    }
}

function calculateMidpoint() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const resultDiv = document.getElementById('result');
    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        const midpointX = (x1 + x2) / 2;
        const midpointY = (y1 + y2) / 2;
        resultDiv.textContent = `Середина відрізка: (${midpointX}, ${midpointY})`;
    } else {
        resultDiv.textContent = 'Введіть всі координати.';
    }
}

function calculateWaterCost() {
    const waterUsage = parseFloat(document.getElementById('waterUsage').value);
    const waterRate = parseFloat(document.getElementById('waterRate').value);
    const resultDiv = document.getElementById('result');
    if (waterUsage > 0 && waterRate > 0) {
        const cost = waterUsage * waterRate;
        resultDiv.textContent = `Загальна вартість: ${cost} грн.`;
    } else {
        resultDiv.textContent = 'Введіть коректні значення.';
    }
}