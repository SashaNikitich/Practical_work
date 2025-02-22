const pages = {
    weight: `
                <h1>Порівняння чисел</h1>
                <div class="calculator">
                    <input type="number" id="A" placeholder="Завантажили 1-ий раз">
                    <input type="number" id="B" placeholder="Завантажили 2-ий раз">
                    <input type="number" id="C" placeholder="Вивантажили">
                    <button onclick="calculateWeight()">Розрахувати Вагу</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    exponentiation: `
                <h1>Піднесення до степеня</h1>
                <div class="calculator">
                    <input type="number" id="number" placeholder="Введіть ціле число">
                    <button onclick="exponent()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `
};

function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page] || '<h1>Сторінка не знайдена</h1>';
}

function calculateWeight() {
    let a = document.getElementById('A').value;
    let b = document.getElementById('B').value;
    let c = document.getElementById('C').value;
    const resultDiv = document.getElementById('result');
    
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    
    if (a >= 0 && b >= 0 && c >= 0) {
        const totalWeight = a + b;
        const remainingWeight = totalWeight > c ? totalWeight - c : 0;
        resultDiv.textContent = `Остача: ${remainingWeight}`;
    } else {
        resultDiv.textContent = 'Введені значення некоректні';
    }
}

function exponent() {
    const number = parseFloat(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    const cube = number * number * number;
    const squaring = number * number;
    if (number % 2 === 0) {
        resultDiv.textContent = `Число парне, тому підносим до квадрата: ${squaring}`;
    } 
    else if (number % 1 === 0) {
        resultDiv.textContent = `Число непарне, тому підносим до куба: ${cube}`
    }
    else {
        resultDiv.textContent = `Введіть число`
    }
}