let objeto = {
    nome: "Bruno",
    idade: "18",
    curso: "ADS",
    turma: "MA2"
}

let {nome: vNome, idade: vIdade, curso: vCurso, turma: vTurma} = objeto;

console.log(vNome);
console.log(vIdade);
console.log(vCurso);
console.log(vTurma);


objeto.nome = "João"
objeto.idade = 17;
objeto.curso = "SEG";
objeto.turma = "MA1";

let {nome: aNome, idade: aIdade, curso: aCurso, turma: aTurma} = objeto;

console.log(aNome);
console.log(aIdade);
console.log(aCurso);
console.log(aTurma);
