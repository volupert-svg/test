class LottoBall extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const number = this.getAttribute('number');
        const color = this.getRandomColor();

        const circle = document.createElement('div');
        circle.style.backgroundColor = color;
        circle.style.width = '60px';
        circle.style.height = '60px';
        circle.style.borderRadius = '50%';
        circle.style.display = 'flex';
        circle.style.justifyContent = 'center';
        circle.style.alignItems = 'center';
        circle.style.fontSize = '1.5rem';
        circle.style.fontWeight = 'bold';
        circle.style.color = 'white';
        circle.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        circle.textContent = number;

        shadow.appendChild(circle);
    }

    getRandomColor() {
        const colors = [
            '#007bff',
            '#6c757d',
            '#28a745',
            '#dc3545',
            '#ffc107',
            '#17a2b8',
            '#343a40'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

customElements.define('lotto-ball', LottoBall);

document.getElementById('generate-button').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers-container');
    numbersContainer.innerHTML = '';

    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of numbers) {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        numbersContainer.appendChild(lottoBall);
    }
});
