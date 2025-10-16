function greetUser() {
    const userName = document.getElementById('user-name').value;
    const userAge = document.getElementById('user-age').value;
    const greetingMessage = document.getElementById('greeting-message');

    // Check if both fields are filled
    if (userName.trim() === '' || userAge.trim() === '') {
        greetingMessage.textContent = "Please fill in both your name and age.";
        greetingMessage.classList.remove('hidden');
    } else {
        greetingMessage.textContent = `Hello, ${userName}! You are ${userAge} years old.`;
        greetingMessage.classList.remove('hidden');
    }
}
