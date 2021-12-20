function Cachorro(raca, patas = 4, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("auuuuuuuu");
}

const husky = new Cachorro('husky', 6, 'branco');

console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);
husky.uivar();




