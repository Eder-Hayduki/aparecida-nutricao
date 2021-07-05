var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var listaPacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < listaPacientes.length; i++) {
    var paciente = listaPacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = calculaImc(peso, altura);

    paciente.classList.add(validaPaciente(imc));
    
    tdImc.textContent = imc;
/* 
    //validando seo imc é do tipo texto/string
    if (typeof(imc) != "number"){
        paciente.classList.add("paciente-invalido")
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = imc.toFixed(2);
    }
 */
}

function calculaImc(peso, altura) {
    //booleana = true or false
    var pesoEhValido = true;
    var alturaEhValida = true;

    var resultadoImc;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        resultadoImc = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        resultadoImc = "Altura inválida";
    }

    if (!pesoEhValido && !alturaEhValida) {
        resultadoImc = "Peso e Altura inválidos";
    }

    //validar se peso e altura são válidos, se sim, calcular IMC
    if (pesoEhValido && alturaEhValida) {
        //var imc = peso / Math.pow(altura, 2);
        var imc = 0;
        imc = peso / (altura * altura);
        resultadoImc = imc.toFixed(2);
    }
    return resultadoImc;
}

function validaPaciente(imc){
    var cssPaciente = "paciente";

    if (isNaN(imc)){
        cssPaciente = "paciente-invalido";
    }

    return cssPaciente;

}