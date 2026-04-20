
const btnCalcular = document.querySelector('#btnCalcular');
const inputSalario = document.querySelector('#salarioBruto');
const displayNeto = document.querySelector('#montoNeto');
const displayPorcentaje = document.querySelector('#porcentaje');
const contenedorResultado = document.querySelector('#resultado');


btnCalcular.addEventListener('click', () => {
    const salarioBruto = parseFloat(inputSalario.value);

    if (isNaN(salarioBruto) || salarioBruto < 0) {
        alert("Por favor, introduce un salario válido.");
        return;
    }

    let porcentaje;
    if (salarioBruto > 30000) {
        porcentaje = 20;
    } else {
        porcentaje = 15;
    }

    const retencion = salarioBruto * (porcentaje / 100);
    const salarioNetoAnual = salarioBruto - retencion;
    const netoMensual = (salarioNetoAnual / 12).toFixed(2); 

    displayNeto.textContent = netoMensual;
    displayPorcentaje.textContent = porcentaje;
    contenedorResultado.classList.remove('hidden');

    if (netoMensual > 2000) {
        displayNeto.style.color = "green";
    } else {
        displayNeto.style.color = "orange";
    }
});