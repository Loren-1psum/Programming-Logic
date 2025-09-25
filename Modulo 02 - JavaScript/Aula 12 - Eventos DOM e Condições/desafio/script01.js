let res = document.getElementById("resultado")

function calcularMedia() {
    var nota1v = document.getElementById("nota1").value;
    var nota2v = document.getElementById("nota2").value;

    var nota1var = parseFloat(nota1v);
    var nota2var = parseFloat(nota2v);

    var soma = nota1var + nota2var;
    var media = soma/2;

    
    document.getElementById("resultado").innerHTML = "Soma = " + soma + "<br> Media = " + media;
}