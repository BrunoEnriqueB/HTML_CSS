class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    };

    latir() {
        console.log("Au Au")
    };

    uivar() {
        console.log("auuuuuuuu");
    }
}
Cachorro.prototype.raca = 'SRD';
let patas = Symbol();
Cachorro.prototype[patas] = 4;

const labrador = new Cachorro('labrador', 'amarelo');

console.log(labrador.raca);


//acessando symbol

console.log(Cachorro.prototype[patas]);
console.log(labrador[patas])



