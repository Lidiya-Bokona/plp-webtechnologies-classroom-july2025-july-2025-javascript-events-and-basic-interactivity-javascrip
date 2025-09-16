const alertButton = document.getElementById('alertButton');
const message = document.getElementById('message');

alertButton.addEventListener('click', () => {
  message.textContent = 'Button was clicked! 🎉';
});

const toggleThemeButton = document.getElementById('toggleTheme');

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

const counterButton = document.getElementById('counterButton');
let count = 0;

counterButton.addEventListener('click', () => {
  count++;
  counterButton.textContent = `Click me: ${count}`;
});

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formMessage.textContent = '';

  let valid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully! 🎉';
    form.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix the errors above.';
  }
});
