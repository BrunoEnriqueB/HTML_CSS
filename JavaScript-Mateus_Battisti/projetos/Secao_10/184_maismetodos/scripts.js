let pessoa = {
    nome: '',
    setNome: function(novoNome) {
        this.nome = (novoNome)
    },
    getNome: function() {
        return this.nome;
    }
};

console.log(pessoa.getNome());
pessoa.setNome('Bruno');
console.log(pessoa.getNome())
