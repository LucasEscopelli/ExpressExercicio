module.exports = {
    idZerosEsquerda(valor, comprimentoTotal) {
        var quantidadeZeros = comprimentoTotal - valor.toString().length + 1;
        return Array(quantidadeZeros).join('0') + valor;
      }
}