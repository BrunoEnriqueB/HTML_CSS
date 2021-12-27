class Cachorro {
    constructor(raca, cor, patas) {
        this.raca = raca;
        this.cor = cor;
        this.patas = patas
    };
}

Cachorro.prototype.latir = function() {
    console.log('au au');
}

Cachorro.prototype.uivar = function() {
    console.log("auuuuuuuu");
}

Cachorro.prototype.patas = 4;

const labrador = new Cachorro('labrador', 'amarelo');

console.log(labrador.raca);
labrador.latir();
labrador.uivar();
console.log(Cachorro.prototype.patas);



