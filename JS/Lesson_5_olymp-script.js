const pages = {
    weight: `
                <h1>Приклад 1</h1>
                
                <p>Водій вантажного таксі отримав замовлення на перевезення вантажу між трьома пунктами. Відомо, що під час
                відвідування першого пункту завантажується вантаж вагою A кілограм. У другому пункті завантажується ще додатково вантаж вагою B кілограм.
                А у третьому пункті вивантажується вантаж вагою C кілограм. Визначте, скільки кілограм вантажу залишиться після візиту третього пункту?
                Вхідні дані. Числа А, В та С є цілими і невід’ємними та не перевищують 1 000 000 000. 
                Вихідні дані. Виведіть одне число – кількість кілограм вантажу, яка залишиться не вивантаженою після візиту третього пункту. Опрацювати ситуацію якщо A + B ≤ C.</p>
                
                <div class="calculator">
                    <input type="number" id="A" placeholder="Завантажили 1-ий раз">
                    <input type="number" id="B" placeholder="Завантажили 2-ий раз">
                    <input type="number" id="C" placeholder="Вивантажили">
                    <button onclick="calculateWeight()">Розрахувати Вагу</button>
                    <div class="result" id="result"></div>
                </div>
            `,
    exponentiation: `
                <h1>Приклад 2</h1>
                
                <p>Дано ціле число A. Залежно від того, чи воно парне, або непарне, обчисліть:
                
                <ul>
                    <li>якщо число A парне, то квадрат цього числа;</li>
                    <li>якщо число A непарне, то куб цього числа.</li>
                </ul>
                
                Вихідні дані: Виведіть одне число – відповідь на задачу.
                </p>
                
                <div class="calculator">
                    <input type="number" id="number" placeholder="Введіть ціле число">
                    <button onclick="exponent()">Розрахувати</button>
                    <div class="result" id="result"></div>
                </div>
            `
};

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