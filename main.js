// criando função para inserir números na tela da calculadora
function insert(num) {
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

// função para limpar toda a tela da calculadora('C')
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

// função para limpar um número de cada vez("<")
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

// função para calcular o resultado total("=")
function calcular() {
     var resultado = document.getElementById('resultado').innerHTML;
     if(resultado)
     {
        document.getElementById('resultado').innerHTML = eval(resultado);
     }
    else
    {
        document.getElementById('resultado').innerHTML = 'erro'
    }
}

