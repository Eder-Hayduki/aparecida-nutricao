var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("click", function(event){
    //efeito esmaecer
    event.target.parentNode.classList.add("fadeOut");
    
    //antes de executar o comando remover, aplica um delay de 500ms;
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

/* listaPacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    }); 
}); */

// event bubbling