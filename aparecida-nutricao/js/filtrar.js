var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var listaPacientes = document.querySelectorAll(".paciente");

    if (this.value != "") {
        for (var i = 0; i < listaPacientes.length; i++) {
            var paciente = listaPacientes[i];
            var celulaNome = paciente.querySelector(".info-nome");
            var nome = celulaNome.textContent;

            //expressão regular
            var expressao = new RegExp(this.value, "i"); //

            if (!expressao.test(nome)) {
                paciente.classList.remove("ocultarLinha");
            } else {
                paciente.classList.add("ocultarLinha");
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = listaPacientes[i];
            paciente.classList.remove("ocultarLinha");
        }
    }
});
