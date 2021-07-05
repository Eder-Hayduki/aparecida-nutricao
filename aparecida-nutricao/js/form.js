var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extrai informações do paciente no formulário
    var objPaciente = obtemPacienteDoFormulario(form);
    var ulErros = document.querySelector("#lista-erros-ul");
    ulErros.innerHTML = "";

    var erros = validaDados(objPaciente);

    //console.log(objPaciente);

    //validando campos vazios

    if (erros.length == 0) { //quando n existir erros, crie a linha e insira os valores
        //Criar TR e TD do paciente
        adicionarPacienteNaTabela(objPaciente);

        form.reset();
    } else {
        //exibir as mensagens
        exibeMensagensDeErros(erros, ulErros);
    }
    
    

});

function obtemPacienteDoFormulario(form) {
    var objPaciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return objPaciente;
}

function montaTr(objPaciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //passos para criar as TD's
    //1. criar o elemento TD
    //2. Adicionar a informação que veio do formulário/objPaciente - recebido como parâmetro
    //3. Adicionar as classes para cada campo (.info-nome, .info-peso...)


    //criando as td da linha da table
    var nomeTd = montaTd(objPaciente.nome, "info-nome");
    var pesoTd = montaTd(objPaciente.peso, "info-peso");
    var alturaTd = montaTd(objPaciente.altura, "info-altura");
    var gorduraTd = montaTd(objPaciente.gordura, "info-gordura");
    var imcTd = montaTd(objPaciente.imc, "info-imc");

    //preenchendo os valores de texto nas td's
    /*
    nomeTd.textContent = objPaciente.nome;
    pesoTd.textContent = objPaciente.peso;
    alturaTd.textContent = objPaciente.altura;
    gorduraTd.textContent = objPaciente.gordura;
    imcTd.textContent = objPaciente.imc;

    //adicionando as classes nas TD's
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");
    */

    //atribuindo as TD'S a TR paciente
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    pacienteTr.classList.add(validaPaciente(objPaciente.imc));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;
    } else {
        return true;
    }
}

function validaDados(paciente) {
    var listaErros = [];

    if (paciente.nome == "") {
        listaErros.push("*Você deve preencher seu nome");
    }

    if (paciente.peso == "") {
        listaErros.push("*Por favor, insira seu peso");
    }
    else if (!validaPeso(paciente.peso)) {
        listaErros.push("*Valor do peso inválido");
    }

    if (paciente.altura == "") {
        listaErros.push("*Por favor, insira sua altura");
    }
    else if (!validaAltura(paciente.altura)) {
        listaErros.push("*Valor da altura inválida!");
    }

    if (paciente.gordura == "") {
        listaErros.push("*Por favor, insira seu percentual de gordura");
    }
    return listaErros;
}

function exibeMensagensDeErros (erros, ulErros) {
    erros.forEach(function (i) {
        var li = document.createElement("li");
        li.textContent = i;
        ulErros.appendChild(li);
    });
}

function adicionarPacienteNaTabela(paciente){
    var pacienteTR = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);  
 }