const passwordInput = document.getElementById('password');
const reqLength = document.getElementById('length');
const reqLowercase = document.getElementById('lowercase');
const reqUppercase = document.getElementById('uppercase');
const reqNumber = document.getElementById('number');
const reqSpecial = document.getElementById('special');

passwordInput.addEventListener('input', function() {
    const value = passwordInput.value;

    // Validar longitud
    if (value.length >= 8) {
        reqLength.style.color = 'green';
        reqLength.textContent = '✔ Al menos 8 caracteres';
    } else {
        reqLength.style.color = 'red';
        reqLength.textContent = '❌ Al menos 8 caracteres';
    }

    // Validar minúscula
    if (/[a-z]/.test(value)) {
        reqLowercase.style.color = 'green';
        reqLowercase.textContent = '✔ Una letra minúscula';
    } else {
        reqLowercase.style.color = 'red';
        reqLowercase.textContent = '❌ Una letra minúscula';
    }

    // Validar mayúscula
    if (/[A-Z]/.test(value)) {
        reqUppercase.style.color = 'green';
        reqUppercase.textContent = '✔ Una letra mayúscula';
    } else {
        reqUppercase.style.color = 'red';
        reqUppercase.textContent = '❌ Una letra mayúscula';
    }

    // Validar número
    if (/\d/.test(value)) {
        reqNumber.style.color = 'green';
        reqNumber.textContent = '✔ Un número';
    } else {
        reqNumber.style.color = 'red';
        reqNumber.textContent = '❌ Un número';
    }

    // Validar carácter especial
    if (/[@$!%*?&]/.test(value)) {
        reqSpecial.style.color = 'green';
        reqSpecial.textContent = '✔ Un carácter especial (@$!%*?&)';
    } else {
        reqSpecial.style.color = 'red';
        reqSpecial.textContent = '❌ Un carácter especial (@$!%*?&)';
    }
});