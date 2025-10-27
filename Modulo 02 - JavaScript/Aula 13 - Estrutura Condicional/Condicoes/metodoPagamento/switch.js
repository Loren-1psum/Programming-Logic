let formaPagamento = debito
let ValorGasto = 1000

switch (formaPagamento) {
    case "pix":
        console.log(valorGasto * 0.9);
        break
    case "debito":
        console.log(ValorGasto * 0.95);
        break
    case "credito":
        console.log(ValorGasto);
        break
}