function criarCachorro(raca) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

const doberman = criarCachorro('Doberman');

console.log(doberman.raca()); 