function pegarValor() {
    const nomeDis = document.getElementById('dis');
    const dias = document.getElementById('dias');
    const faltas = document.getElementById('falta');
    const media = document.getElementById('media');
    mostrarResultado(nomeDis.value, dias.value, faltas.value, media.value);
}