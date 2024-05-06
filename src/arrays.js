const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunosComNotas = alunos.map(function(nomeAtual) {
    return {
        nome: nomeAtual,
        nota: (Math.random() * 10).toFixed(2)
    };
});

console.log(alunosComNotas);

const filtrarAlunosComNotaMaiorIgualASeis = item => item.nota >= 6;

const alunosComNotaMaiorIgualASeis = alunosComNotas.filter(filtrarAlunosComNotaMaiorIgualASeis);

console.log(alunosComNotaMaiorIgualASeis);