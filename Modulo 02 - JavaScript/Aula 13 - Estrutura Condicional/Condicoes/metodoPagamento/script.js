function calcularPagamento(){
    let valorGasto = parseFloat(document.getElementById("valorCompra").value)
    let formaPagamento = document.getElementById("formaPagamento").value
    let resultado = document.querySelector("#resultado")
    let valorFinal
    
    switch (formaPagamento) {
        case "pix":
            console.log(valorGasto * 0.9);
            resultado.innerHTML = "O valor a ser pago é de R$ " + valorFinal.toFixed(2)
            break
        case "debito":
            console.log(ValorGasto * 0.95);
            resultado.innerHTML = "O valor a ser pago é de R$ " + valorFinal.toFixed(2)
            break
        case "credito":
            console.log(ValorGasto);
            resultado.innerHTML = "O valor a ser pago é de R$ " + valorFinal.toFixed(2)
            break
        default:
            resultado.innerHTML = "VALOR INVÁLIDO"
            break
    }
}