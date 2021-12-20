class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    };
}

Cachorro.prototype.latir = function() {
    console.log('au au');
}

Cachorro.prototype.uivar = function() {
    console.log("auuuuuuuu");
}

const labrador = new Cachorro('labrador', 'amarelo');

console.log(labrador.raca);
labrador.latir();
labrador.uivar();



