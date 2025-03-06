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
        `
};