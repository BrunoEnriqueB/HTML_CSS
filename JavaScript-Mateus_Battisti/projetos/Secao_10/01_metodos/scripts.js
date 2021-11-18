const object = {
    somar: function(a) {
        return a+ 2;
    },
    subtrair: function(a) {
        return a - 2;
    },
    multiplicar: function(a) {
        return a * 2;
    },
    dividir: function(a) {
        return a / 2;
    }
}
let multiplicar = object;
console.log(multiplicar.somar(3));