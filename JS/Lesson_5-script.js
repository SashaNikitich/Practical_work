const pages = {
    speed: `
                <h1>Знаходження швидкості руху</h1>
                <div class="calculator">
                    <input type="number" id="way" placeholder="Введіть шлях (км)">
                    <input type="number" id="time" placeholder="Введіть час (год)">
                    <button onclick="calculateSpeed()">Розрахувати швидкість</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    triangle: `
                <h1>Прямокутний трикутник</h1>
                <div class="calculator">
                    <input type="number" id="cathetus1" placeholder="Перший катет">
                    <input type="number" id="cathetus2" placeholder="Другий катет">
                    <button onclick="calculateTriangle()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    circle: `
                <h1>Площа круга</h1>
                <div class="calculator">
                    <input type="number" id="radius" placeholder="Радіус">
                    <button onclick="calculateCircle()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    square: `
                <h1>Квадрат</h1>
                <div class="calculator">
                    <input type="number" id="side" placeholder="Сторона квадрата">
                    <button onclick="calculateSquare()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    trigonometry: `
                <h1>Тригонометрія</h1>
                <div class="calculator">
                    <input type="number" id="angle" placeholder="Кут (градуси)">
                    <button onclick="calculateTrigonometry()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    radiusFromCircumference: `
                <h1>Радіус кола</h1>
                <div class="calculator">
                    <input type="number" id="circumference" placeholder="Довжина кола">
                    <button onclick="calculateRadius()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    complexExpression: `
                <h1>Обчислення виразу y=|x⁵-2|+3</h1>
                <div class="calculator">
                    <input type="number" id="inputX" placeholder="Введіть x">
                    <button onclick="calculateExpression()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    ringRadius: `
                <h1>Радіус внутрішнього кола</h1>
                <div class="calculator">
                    <input type="number" id="ringArea" placeholder="Площа кільця">
                    <input type="number" id="outerRadius" placeholder="Радіус зовнішнього кола">
                    <button onclick="calculateInnerRadius()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `
};

function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page] || '<h1>Сторінка не знайдена</h1>';
}

function calculateSpeed() {
    const way = document.getElementById('way').value;
    const time = document.getElementById('time').value;
    const resultDiv = document.getElementById('result');
    if (time > 0 && way > 0) {
        const speed = way / time;
        resultDiv.textContent = `Швидкість руху: ${speed} км/год`;
    } else {
        resultDiv.textContent = 'Введіть коректне значення.';
    }
}

function calculateTriangle() {
    const cathetus1 = parseFloat(document.getElementById('cathetus1').value);
    const cathetus2 = parseFloat(document.getElementById('cathetus2').value);
    const resultDiv = document.getElementById('result');
    if (cathetus1 > 0 && cathetus2 > 0) {
        const hypotenuse = Math.sqrt(cathetus1 ** 2 + cathetus2 ** 2).toFixed(2);
        const perimeter = (cathetus1 + cathetus2 + parseFloat(hypotenuse)).toFixed(2);
        const area = (0.5 * cathetus1 * cathetus2).toFixed(2);
        resultDiv.textContent = `Гіпотенуза: ${hypotenuse}, Периметр: ${perimeter}, Площа: ${area}`;
    } else {
        resultDiv.textContent = 'Введіть коректні значення.';
    }
}

function calculateCircle() {
    const radius = parseFloat(document.getElementById('radius').value);
    const resultDiv = document.getElementById('result');
    if (radius > 0) {
        const area = (Math.PI * radius ** 2).toFixed(2);
        resultDiv.textContent = `Площа круга: ${area}`;
    } else {
        resultDiv.textContent = 'Введіть коректне значення.';
    }
}

function calculateSquare() {
    const side = parseFloat(document.getElementById('side').value);
    const resultDiv = document.getElementById('result');
    if (side > 0) {
        const perimeter = (4 * side).toFixed(1);
        const area = (side ** 2).toFixed(1);
        const diagonal = (Math.sqrt(2) * side).toFixed(1);
        resultDiv.textContent = `Периметр: ${perimeter}, Площа: ${area}, Діагональ: ${diagonal}`;
    } else {
        resultDiv.textContent = 'Введіть коректне значення.';
    }
}

function calculateTrigonometry() {
    const angle = parseInt(document.getElementById('angle').value);
    const resultDiv = document.getElementById('result');
    if (!isNaN(angle)) {
        const radians = (angle * Math.PI) / 180;
        const sin = Math.sin(radians).toFixed(5);
        const cos = Math.cos(radians).toFixed(5);
        resultDiv.textContent = `Sin(${angle}°): ${sin}, Cos(${angle}°): ${cos}`;
    } else {
        resultDiv.textContent = 'Введіть коректне значення кута.';
    }
}

// Task_6: Обчислення радіусу за довжиною кола
function calculateRadius() {
    const circumference = parseFloat(document.getElementById('circumference').value);
    const resultDiv = document.getElementById('result');
    if (circumference > 0) {
        const radius = (circumference / (2 * Math.PI)).toFixed(3);
        resultDiv.textContent = `Радіус кола: ${radius}`;
    } else {
        resultDiv.textContent = 'Введіть коректне значення довжини кола.';
    }
}

// Task_7: Обчислення значення виразу
function calculateExpression() {
    const x = parseFloat(document.getElementById('inputX').value);
    const resultDiv = document.getElementById('result');
    if (!isNaN(x)) {
        const y = (Math.abs(Math.pow(x, 5) - 2) + 3).toFixed(3);
        resultDiv.textContent = `y = ${y}`;
    } else {
        resultDiv.textContent = 'Введіть коректне дробове число.';
    }
}

// Task_8: Обчислення радіусу внутрішнього кола
function calculateInnerRadius() {
    const ringArea = parseFloat(document.getElementById('ringArea').value);
    const outerRadius = parseFloat(document.getElementById('outerRadius').value);
    const resultDiv = document.getElementById('result');
    if (ringArea > 0 && outerRadius > 0) {
        const innerRadius = Math.sqrt((Math.PI * outerRadius ** 2 - ringArea) / Math.PI).toFixed(2);
        if (innerRadius > 0) {
            resultDiv.textContent = `Радіус внутрішнього кола: ${innerRadius}`;
        } else {
            resultDiv.textContent = 'Значення площі або радіуса зовнішнього кола некоректні.';
        }
    } else {
        resultDiv.textContent = 'Введіть коректні значення.';
    }
}