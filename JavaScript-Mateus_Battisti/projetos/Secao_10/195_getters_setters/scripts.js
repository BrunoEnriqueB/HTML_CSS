class Cachorro {
    constructor(raca) {
        this.raca = 'SRD';
    };

    get verRaca() {
        return `A raça é: ${this.raca}`;
    };

    set novaRaca(raca) {
        return this.raca = raca;
    };
}
const labrador = new Cachorro('SRD');

labrador.novaRaca = 'Labrador';
console.log(labrador.verRaca);




