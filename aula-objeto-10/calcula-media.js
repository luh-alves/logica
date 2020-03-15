function media (numeros) {
    let soma = 0;
    let quantidade = numeros.length;
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }

    const resultado = soma / quantidade;

    return resultado;
}

function calculaMediaIdadeAluno(alunos){
    var soma = 0;
    var quantidade = alunos.length;
    alunos.forEach(aluno => {
        soma = soma + aluno.idade
    });

    var resultado = soma / quantidade
    return resultado
}

module.exports = {
    media,
    calculaMediaIdadeAluno
}
