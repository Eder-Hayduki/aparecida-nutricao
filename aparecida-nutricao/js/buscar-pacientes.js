var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

   //objeto responsável por fazer requisições HTTP ao servidor
   var xhr = new XMLHttpRequest();

   //testando a conexão através de um endereço web
   xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

   //carregar as informações da URL;
   xhr.addEventListener("load", function () {

      var erroAjax = document.querySelector("#erro-ajax");

      if (xhr.status == 200) {
         var respostaRequisicao = xhr.responseText;

         var pacientesJSON = JSON.parse(respostaRequisicao);

         pacientesJSON.forEach(function (objPaciente) {
            adicionarPacienteNaTabela(objPaciente);
         });

      } else {
         erroAjax.classList.remove("ocultarLinha");
         console.log(xhr.status);
         console.log(xhr.responseText);
      }

   });

   //realizando a conexão
   xhr.send();
});

