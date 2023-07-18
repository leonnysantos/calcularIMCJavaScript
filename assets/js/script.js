const peso = document.getElementById('weight');
const altura = document.getElementById('height');
const calcular = document.getElementById('calculate');

const form = document.getElementById('form');
const info = document.getElementById('infos');
const valor = document.getElementById('value');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    info.classList.remove('hidden');
    const total = (peso.value / (altura.value * altura.value)).toFixed(2);
    valor.innerHTML = total.replace('.', ',');

    valor.classList.add('attention');

    if (total < 18.5) {
        desc = 'Cuidado! Você está abaixo do peso!';
    }
    else if (total >= 18.5 && total <= 25) {
        desc = "Você está no peso ideal!";
        valor.classList.remove('attention');
        valor.classList.add('normal');
    }
    else if (total > 25 && total <= 30) {
        desc = "Cuidado! Você está com sobrepeso!";
    }
    else if (total > 30 && total <= 35) {
        desc = "Cuidado! Você está com obesidade moderada!";
    }
    else if (total > 35 && total <= 40) {
        desc = "Cuidado! Você está com obesidade severa!";
    }
    else {
        desc = "Cuidado! Você está com obesidade morbida!";
    }

    document.getElementById('description').innerHTML = desc;

})
