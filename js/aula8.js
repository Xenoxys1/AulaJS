function aprovar(valorMedia, diasAula, diasFalta) {
    let resposta;
    let totalDias = diasAula - diasFalta;
    if (valorMedia >= 7 && totalDias >= (0.75 * diasAula)){
        resposta = "aprovado."
    } else {
        resposta = "reprovado."
    }
    return resposta;
}

function mostrarResultado(disciplina, quantDias, quantFaltas, mostraMedia) {
    const res = document.getElementById('resultado');
    res.textContent = `A disciplina é ${disciplina}.
     A disciplina possui ${quantDias} dias de aula,
      o aluno faltou ${quantFaltas} dias nesta disciplina e sua média foi de ${mostraMedia} pontos.
      O aluno está ${aprovar(mostraMedia, quantDias, quantFaltas)}`;
}

function pegarValor() {
    const nomeDis = document.getElementById('dis');
    const dias = document.getElementById('dias');
    const faltas = document.getElementById('falta');
    const media = document.getElementById('media');
    mostrarResultado(nomeDis.value, dias.value, faltas.value, media.value);
}

function limpar() {
    document.getElementById('dis').value = null;
    document.getElementById('dias').value = null;
    document.getElementById('falta').value = null;
    document.getElementById('media').value = null;
    
}
