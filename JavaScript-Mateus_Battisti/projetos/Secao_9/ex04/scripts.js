let onibus = {
    rodas: 8,
    limitedepassageiros: 40,
    portas: 2
};

onibus.janelas = 20;
let rodas = onibus.rodas;
delete onibus.rodas;

console.log(onibus.rodas);
console.log(onibus.limitedepassageiros);
console.log(onibus.portas);
console.log(onibus.janelas);
console.log(rodas);