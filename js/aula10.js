function pegarMinus() {
    const nomeMinus1 = document.getElementById('minus1');
    transformMais(nomeMinus1.value);
}

function transformMais(textMinus) {
    const minusRes = document.getElementById('mais1');
    minusRes.value = textMinus.toUpperCase();
}

function pegarMais() {
    const nomeMais2 = document.getElementById('mais2');
    transformMinus(nomeMais2.value);
}

function transformMinus(textMais) {
    const maisRes = document.getElementById('minus2');
    maisRes.value = textMais.toLowerCase();
}

function pegarPal() {
    const nomePal = document.getElementById('palavra');
    contaCaracter(nomePal.value);
}

function contaCaracter(textPal) {
    const res = document.getElementById('resultado');
    res.textContent = `A palavra ${textPal} tem ${textPal.length} caractere(s)`
}

function pegarTex() {
    const nomeTex = document.getElementById('tex');
    removerEspaco(nomeTex.value);
}

function removerEspaco(textTex){
    const texRes = document.getElementById('noSpace');
    texRes.value = textTex.replace(/\s/g, '');
}

function pegarPal2() {
    const nomePal2 = document.getElementById('pal2');
    asterisco(nomePal2.value);
}

function asterisco(textPal2){
    const pal2Res = document.getElementById('asterisk');
    pal2Res.value = textPal2.replace(/a|A/g, '*');
}