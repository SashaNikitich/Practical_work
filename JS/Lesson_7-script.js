const pages = {
    task1: `
        <h1>Приклад 1</h1>
        
        <p>Калькулятор</p>
        
        <div class="calculator">
            <input type="number" id="num1" placeholder="Перше число">
            <input type="number" id="num2" placeholder="Друге число">
            
            <label>
                <input type="radio" name="operation" value="+" onclick="calculate()"> Додати
            </label>
            <label>
                <input type="radio" name="operation" value="-" onclick="calculate()"> Відняти
            </label>
            <label>
                <input type="radio" name="operation" value="*" onclick="calculate()"> Множити
            </label>
            <label>
                <input type="radio" name="operation" value="/" onclick="calculate()"> Ділити
            </label>
            <label>
                <input type="radio" name="operation" value="%" onclick="calculate()"> Остача
            </label>
            <label>
                <input type="radio" name="operation" value="^" onclick="calculate()"> Степінь
            </label>
            <h3 id="result"></h3>
        </div>
        
        
    `,
    task2: `
        <h1>Приклад 2</h1>
        
        <p>Зображення геометричних тіл</p>
        
        <div class="calculator">
            <label>
                <input type="radio" name="operation" value="Тетрайдер" onclick="changePhoto()"> Тетрайдер
            </label>
            <label>
                <input type="radio" name="operation" value="Куб" onclick="changePhoto()"> Куб
            </label>
            <label>
                <input type="radio" name="operation" value="Октаедр" onclick="changePhoto()"> Октаедр
            </label>
            <label>
                <input type="radio" name="operation" value="Додекаедр" onclick="changePhoto()"> Додекаедр
            </label>
            <label>
                <input type="radio" name="operation" value="Ікосадаедр" onclick="changePhoto()"> Ікосаедр
            </label>
            <div id="result"></div>
        </div>
    `,
    task3: `
        <h1>Обчислення об'єму тіл обертання</h1>
        <div class="calculator">
            <label>
                <input type="radio" name="shape" value="cylinder"> Циліндр
            </label>
            <label>
                <input type="radio" name="shape" value="cone"> Конус
            </label>
            <label>
                <input type="radio" name="shape" value="sphere"> Куля
            </label>
            <br>
            <input type="number" id="radius" placeholder="Радіус">
            <input type="number" id="height" placeholder="Висота" class="hidden">
            
            <button type="button" id="calculateBtn">Обчислити</button>
            <h3 id="result"></h3>
        </div>
    `
       
};

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.querySelector('input[name="operation"]:checked').value;
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Будь ласка, введіть обидва числа!';
        return;
    }

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            if (num2 === 0) {
                result = 'Помилка: ділення на нуль!';
            } else {
                result = num1 / num2;
            }
            break;
        case '%': result = num1 % num2; break;
        case '^': result = Math.pow(num1, num2); break;
        default: result = 'Оберіть операцію!';
    }

    document.getElementById('result').textContent = 'Результат: ' + result;
}

function changePhoto() {
    var operation = document.querySelector('input[name="operation"]:checked').value;
    var result;
    var img = document.getElementById('resultImage');

    // Очистити зображення перед кожною зміною
    if (img) {
        img.remove();
    }

    switch (operation) {
        case 'Тетрайдер':
            result = 'кількість граней = 4';
            img = document.createElement('img');
            img.src = 'assets/images/Tetrahedron.gif';
            img.alt = 'Тетрайдер';
            break;
        case 'Куб':
            result = 'кількість граней = 6';
            img = document.createElement('img');
            img.src = 'assets/images/Hexahedron.gif'; 
            img.alt = 'Куб';
            break;
        case 'Октаедр':
            result = 'кількість граней = 12';
            img = document.createElement('img');
            img.src = 'assets/images/Octahedron.gif';
            img.alt = 'Октаедр';
            break;
        case 'Додекаедр':
            result = 'кількість трикутних граней = 8';
            img = document.createElement('img');
            img.src = 'assets/images/Dodecahedron.gif'; 
            img.alt = 'Додекаедр';
            break;
        case 'Ікосадаедр':
            result = 'кількість граней = 12';
            img = document.createElement('img');
            img.src = 'assets/images/Icosahedron.gif';
            img.alt = 'Ікосаедр';
            break;
        default:
            result = 'Оберіть операцію!';
    }

    if (img) {
        img.id = 'resultImage';
        document.getElementById('result').textContent = 'Результат: ' + result;
        document.getElementById('result').appendChild(img);
    } else {
        document.getElementById('result').textContent = 'Оберіть операцію!';
    }
}
