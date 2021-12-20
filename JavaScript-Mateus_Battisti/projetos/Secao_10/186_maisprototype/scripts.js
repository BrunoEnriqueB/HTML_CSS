const pessoa = {
    nome: "Bruno Enrique",
    idade: 18,
    curso: "ADS-MA2"
};

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.nome);
console.log(Object.getPrototypeOf(pessoaNova));
console.log(Object.getPrototypeOf(pessoa));




