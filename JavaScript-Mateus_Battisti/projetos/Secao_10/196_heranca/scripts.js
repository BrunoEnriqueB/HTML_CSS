class Mamifero {
    constructor (patas) {
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(raca, patas) {
        super(patas, patas);
        this.raca = raca;
    };

    get verRaca() {
        return `A raça é: ${this.raca}`;
    };

    set novaRaca(raca) {
        return this.raca = raca;
    };
}
Cachorro.prototype.cor = 'Branco'
Cachorro.prototype.patas = 4;
const labrador = new Cachorro('SRD');

labrador.novaRaca = 'Labrador';
console.log(labrador.verRaca);
console.log(labrador.patas);
console.log(labrador.cor);




