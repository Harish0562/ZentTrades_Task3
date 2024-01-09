function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username as email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Invalid email format for username');
        return;
    }

    // Validate password with specific requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password format. It should contain at least one uppercase letter, one number, and no special characters other than @');
        return;
    }

    // Successful login
    alert('Login successful!');
}