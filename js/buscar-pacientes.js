var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes")

    var xhr = new XMLHttpRequest()  // XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abre a conexão que quero fazer
                    //essa página que parece uma array é um JSON (JavaScript Object Notation)

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        // console.log(typeof resposta); >>>>> consultar o tipo de resposta (nesse caso, é uma string)
        var pacientes = JSON.parse(resposta); // o JSON.parse "transforma", ele retorna um objeto JavaScript
        
        pacientes.forEach(function(paciente){ // iteração do array
        adicionaPacienteNaTabela(paciente);
        });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
    
    });

// API: interface da programação que disponibiliza dados, funções, métodos

//Tudo está funcionando como estava, incluindo a filtragem. Estamos conseguindo acessar o outro servidor, trazer os pacientes de lá e disponibilizá-los na tabela. A técnica utilizada nessa aula é conhecida como AJAX, essa maneira de fazer uma requisição de forma assíncrona com JavaScript.

//É uma requisição assíncrona porque não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. Durante esse processo de busca de pacientes no servidor externo, é possível excluir e adicionar pacientes.