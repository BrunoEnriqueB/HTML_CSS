let calculadora = {
    soma: function(num1, num2) {
        return num1 + num2
    },
    subtracao: function(num1, num2) {
        return num1 - num2;
    },
    multiplicacao: function(num1, num2) {
        return num1 * num2;
    },
    divisao: function(num1, num2) {
        return num1/num2;
    }
}

console.log(calculadora.soma(4, 2));
console.log(calculadora.subtracao(4, 2));
console.log(calculadora.multiplicacao(4, 2));
console.log(calculadora.divisao(4, 2));