var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) { // pacientes.length é o tamanho da minha lista
    
    var paciente = pacientes[i]; // o item [i] indica que é o i da lista no for
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc") //seleção da coluna do IMC

    var pesoEhValido = validaPeso(peso); //true ou false
    var alturaEhValida = validaAltura(altura);

    if  (!pesoEhValido){                                        //(peso <= 0 || peso >= 1000){ >>>> As barrinhas || representam "ou"
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){ // ! é o operador de negação, usado para inverver 
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }
} 

function validaPeso(peso){
    
    if(peso >= 0 && peso <= 1000){
        return true;
    
    }else{
        return false;
    }
}

function validaAltura(altura){

    if(altura >= 0 && altura <= 3.0){
        return true;
        
    }else{
        return false;
    }
}

function calculaImc (peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2); // toFixed é o número de casas decimais que eu quero que imprima
}