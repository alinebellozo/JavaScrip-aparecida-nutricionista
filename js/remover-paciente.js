
// Event bubbling: quando o código vai de baixo para cima

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();

    },500); //meio segundo (que é o que está no index.css) tem 500 milissegundos
   
});    
    
    
    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover-paciente
    paiDoAlvo.remove();
});


pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){ //double click
        console.log("Fui clicado com duplo clique");
        this.remove(); // this para acessar o dono do evento
    });
});*/