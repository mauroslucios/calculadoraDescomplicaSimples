function insert(valorVisor){
    let numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + valorVisor;
}

function clean(){
    document.getElementById('visor').innerHTML = "";
}

function backspace(){
    let valor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = valor.substring(0,valor.length -1);
}

function calculo(){
    let resultado = document.getElementById('visor').innerHTML;
    if(visor){
        document.getElementById('visor').innerHTML = eval(resultado);
    }
}