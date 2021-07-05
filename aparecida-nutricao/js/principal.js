titulo.addEventListener("click", mostraMensagem)

function mostraMensagem(){
    console.log("Olá, eu fui clicado!")
}

// função anônima 

titulo.addEventListener("click", function(){
    console.log("Olá, eu fui clicado. Função anônima!!")
});