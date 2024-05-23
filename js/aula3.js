var time1, time2, pontos1, pontos2, resultado;
time1 = prompt("Informe o nome do primeiro time");
time2 = prompt("Informe o nome do segundo time");
pontos1 = parseInt(prompt(`Informe o placar do ${time1}`));
pontos2 = parseInt(prompt(`Informe o placar do ${time2}`));
resultado = `O placar ficou: ${time1} ${pontos1} X ${pontos2} ${time2}`;
if (pontos1 > pontos2) {
    alert(resultado);
    alert(`${time1} venceu!`)
} else if (pontos1 == pontos2) {
    alert(resultado);
    alert("Empate!");
} else {
    alert(resultado);
    alert(`${time2} venceu!`)
}