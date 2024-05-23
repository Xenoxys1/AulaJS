var idade;
idade = parseInt(prompt("Digite a idade do nadador"));
if (idade >= 5 && idade <= 7) {
    alert("O nadador está na categoria Infantil A");
} else if (idade >= 8 && idade <= 10) {
    alert("O nadador está na categoria Infantil B");
} else if (idade >= 11 && idade <= 13) {
    alert("O nadador está na categoria Juvenil A");
} else if (idade >= 14 && idade <= 17) {
    alert("O nadador está na categoria Juvenil B");
} else if (idade >= 18) {
    alert("O nadador está na categoria Adulto");
} else {
    alert("O nadador é jovem demais para nadar!");
}