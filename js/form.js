//para adicionar um evento no botão, tenho que selecioná-lo aqui no JS 


var botaoAdicionar = document.querySelector("#adicionar-paciente");
    
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //preventDefault impede o comportamento padrão, que é limpar os campos e atualizar a página

    var form = document.querySelector("#form-adiciona"); //essa função está extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
    var erro = validaPaciente(paciente);
    if(erro.length > 0){
        exibeMensagemDeErro(erro);
        return;
    }

    /*if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
        return; //esse return vazio não deixa o paciente ser adicionado na tabela se os valores não forem válidos
    }

    if(erro.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return;
    }*/    
    
       //adicionando o paciente na tabela
   // var tabela = document.querySelector("#tabela-pacientes");

    adicionaPacienteNaTabela(paciente)

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

/*titulo.addEventListener("click", function(){ //posso chamar uma função nomeada ou anônima

});*/

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; //a propriedade innerHTML permite controlar o HTML interno de um elemento
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li); //appendChild é quando eu quero colocar dentro de algo; no caso, quero colocar a mensagem de erro dentro da ul
    });
}


function obtemPacienteDoFormulario(form){ //Quando falamos em representar um paciente, falamos de objetos. Para isso, usa-se {}

    var paciente = {
        nome: form.nome.value, //os objetos são separados por vírgula
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value) //no último não é necessário colocar nada
    }
    
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr"); //aqui onde está "tr", é para passar a info da tag que queremos criar
    //essa função cria a tr e a td do paciente
    pacienteTr.classList.add("paciente"); //coloco a classe, o nome e o valor dentro das aspas

    /*var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
    substituído por:

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gorduraTd");
    var imcTd = montaTd(paciente.imc, "info-imc");
    substituído por:*/


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/*function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return "O peso é inválido";
    }*/

function validaPaciente(paciente) {

    var erros =[];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco")
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco")
    }

    if (!validaPeso(paciente.peso)) { // também dá pra colocar na mesma linha: if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
        erros.push("Peso é inválido");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco")
    }

    if (!validaAltura(paciente.altura)) { // if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
        erros.push("Altura é inválida");
    }

    if (paciente.gordura.length ==0){
        erros.push("A gordura não pode estar em branco")
    }

    return erros;
}
