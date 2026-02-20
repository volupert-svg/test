class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getAttribute('color') || this.getRandomColor();
        this.render(number, color);
    }

    render(number, color) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 60px;
                    height: 60px;
                }
                .circle {
                    background-color: ${color};
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease;
                    background-image: radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3), transparent);
                }
                .circle:hover {
                    transform: scale(1.1);
                }
            </style>
            <div class="circle">${number}</div>
        `;
    }

    getRandomColor() {
        const colors = [
            '#f44336', // Red
            '#e91e63', // Pink
            '#9c27b0', // Purple
            '#673ab7', // Deep Purple
            '#3f51b5', // Indigo
            '#2196f3', // Blue
            '#03a9f4', // Light Blue
            '#00bcd4', // Cyan
            '#009688', // Teal
            '#4caf50', // Green
            '#8bc34a', // Light Green
            '#cddc39', // Lime
            '#ffeb3b', // Yellow
            '#ffc107', // Amber
            '#ff9800', // Orange
            '#ff5722'  // Deep Orange
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

customElements.define('lotto-ball', LottoBall);

document.getElementById('generate-button').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers-container');
    numbersContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.className = 'lotto-row';
        numbersContainer.appendChild(row);

        const numbers = [];
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        numbers.sort((a, b) => a - b);

        let bonusNum;
        do {
            bonusNum = Math.floor(Math.random() * 45) + 1;
        } while (numbers.includes(bonusNum));

        // Render main numbers
        numbers.forEach((number, index) => {
            setTimeout(() => {
                const lottoBall = document.createElement('lotto-ball');
                lottoBall.setAttribute('number', number);
                row.appendChild(lottoBall);
            }, (i * 700) + (index * 100));
        });

        // Render bonus number
        setTimeout(() => {
            const bonusContainer = document.createElement('div');
            bonusContainer.className = 'bonus-container';
            
            const plusSign = document.createElement('span');
            plusSign.className = 'bonus-indicator';
            plusSign.textContent = '+';
            
            const bonusBall = document.createElement('lotto-ball');
            bonusBall.setAttribute('number', bonusNum);
            bonusBall.setAttribute('color', '#ff5722'); // Distinct color for bonus ball
            
            bonusContainer.appendChild(plusSign);
            bonusContainer.appendChild(bonusBall);
            row.appendChild(bonusContainer);
        }, (i * 700) + (6 * 100) + 200);
    }
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
        updateThemeIcon('light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeIcon('dark');
    }
});

function updateThemeIcon(theme) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.textContent = icon;
}

// Partnership Form AJAX Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitButton = document.getElementById('submit-button');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = 'Thanks! Your message has been sent successfully.';
                formStatus.className = 'success';
                contactForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.textContent = data['errors'].map(error => error['message']).join(', ');
                } else {
                    formStatus.textContent = 'Oops! There was a problem submitting your form.';
                }
                formStatus.className = 'error';
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem submitting your form.';
            formStatus.className = 'error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            formStatus.style.display = 'block';
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.opacity = '0';
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.style.opacity = '1';
                }, 500);
            }, 5000);
        }
    });
}

/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
 */
/*
var disqus_config = function () {
    this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://tes2-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
