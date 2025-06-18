document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.neumorphic-button');
    const usernameInput = document.querySelector('input[placeholder="Username"]');
    const passwordInput = document.querySelector('input[placeholder="password"]');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            alert('Please fill in both username and password.');
            return;
        }

        // Example dummy check — replace with real authentication logic
        if (username === 'admin' && password === 'password123') {
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Example redirect
        } else {
            alert('Invalid username or password.');
        }
    });
});
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    // ...rest of logic
});
