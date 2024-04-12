function somar(a, b){
    let resultados = a + b;
    return resultados;
}
function subtrair(a, b){
    let resultados = a - b;
    return resultados;
}
function multiplicar(a, b){
    let resultados = a * b;
    return resultados;
}
function dividir(a, b){
    if (b !== 0) {
        let resultados = a / b;
        return resultados;
    } else {
        return "Erro: divisão por zero!";
    }
}

module.exports = {
    somar,
    subtrair,
    dividir, 
    multiplicar
}
