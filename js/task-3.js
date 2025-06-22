const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    const valueTrim = input.value.trim();
    output.textContent = valueTrim === '' ? 'Anonymous' : valueTrim;
});