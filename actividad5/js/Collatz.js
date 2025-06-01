//COLLATZ
// === CONJETURA DE COLLATZ ===

const input = document.getElementById('number-input');
const resultMessage = document.getElementById('result-message');
const sequenceContainer = document.getElementById('sequence-container');
const stepBtn = document.getElementById('step-button');

let steps = [];
let currentStepIndex = 0;

if (stepBtn) {
    stepBtn.addEventListener('click', () => {
        const numero = parseInt(input.value);

        if (isNaN(numero) || numero < 1) {
            resultMessage.textContent = 'Ingrese un número positivo';
            sequenceContainer.innerHTML = '';
            return;
        }

        if (steps.length === 0) {
            steps = generarPasosCollatz(numero);
            currentStepIndex = 0;
            resultMessage.textContent = `Ingresaste ${numero}:`;
            sequenceContainer.innerHTML = '';
            stepBtn.disabled = false;
        }

        if (currentStepIndex < steps.length) {
            const p = document.createElement('p');
            p.textContent = steps[currentStepIndex];
            sequenceContainer.appendChild(p);
            currentStepIndex++;
        } else {
            resultMessage.textContent = 'Secuencia completada.';
            stepBtn.disabled = true;
        }
    });
}

function generarPasosCollatz(n) {
    let pasos = [];

    while (n !== 1) {
        let actual = n;
        if (n % 2 === 0) {
            n = n / 2;
            pasos.push(`• ${actual} / 2 = ${n}`);
        } else {
            n = 3 * n + 1;
            pasos.push(`• ${actual} * 3 + 1 = ${n}`);
        }
    }

    return pasos;
}
