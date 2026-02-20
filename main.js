document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const numbersContainer = document.getElementById('numbers-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // 테마 설정 (라이트/다크 모드)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    /**
     * 보너스 번호 없이 6개의 무작위 로또 번호를 생성합니다.
     */
    function generateLottoSet() {
        const numbers = [];
        while (numbers.length < 6) {
            const r = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(r)) {
                numbers.push(r);
            }
        }
        numbers.sort((a, b) => a - b);
        return { numbers };
    }

    /**
     * 번호가 표시된 공 요소(DOM)를 생성합니다.
     */
    function createBall(number) {
        const ball = document.createElement('div');
        ball.className = 'lotto-ball';
        ball.textContent = number;
        
        // OKLCH를 이용한 번호별 동적 색상 부여
        const hue = (number * 8) % 360;
        ball.style.backgroundColor = `oklch(60% 0.15 ${hue})`;
        return ball;
    }

    /**
     * 생성 버튼 클릭 시 5개 세트의 번호를 화면에 표시합니다.
     */
    generateButton.addEventListener('click', () => {
        numbersContainer.innerHTML = '';
        
        // 사용자에게 충분한 가치를 주기 위해 5개 세트를 생성합니다.
        for (let i = 0; i < 5; i++) {
            const row = document.createElement('div');
            row.className = 'number-row';
            const { numbers } = generateLottoSet();
            
            // 생성된 6개의 번호를 순회하며 공을 추가합니다.
            numbers.forEach(num => {
                row.appendChild(createBall(num));
            });
            
            numbersContainer.appendChild(row);
        }
    });

    // 문의 양식 제출 (AJAX)
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            submitButton.disabled = true;
            submitButton.textContent = '보내는 중...';
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    formStatus.textContent = '메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.';
                    formStatus.style.color = 'var(--accent-lch)';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.textContent = '오류가 발생했습니다. 나중에 다시 시도해 주세요.';
                formStatus.style.color = 'red';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = '메시지 보내기';
            }
        });
    }

    // 정책 링크 클릭 시 해당 섹션 표시 및 스크롤
    const footerLinks = document.querySelectorAll('.footer-nav a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const id = href.substring(1);
                const section = document.getElementById(id);
                if (section) {
                    const container = document.getElementById('policy-container');
                    container.style.display = 'block';
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
