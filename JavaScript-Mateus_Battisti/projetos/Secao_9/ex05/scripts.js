let array = ["João", "Bruno", "Pedro", "Bielzao", "Guizão"];

if (array.includes("Bruno")) {
    console.log("Existe o nome!");
} else {
    console.log("O nome não existe!")
}

array.includes("Sima") ? console.log("O nome existe") : console.log("O nome não existe!");