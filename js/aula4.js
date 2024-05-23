var veiculo, dist, tempo, vel;
veiculo = prompt("Digite o modelo do veículo");
dist = parseFloat(prompt("Digite a distância que você percorreu (em metros)"));
tempo = parseFloat(prompt("Digite o tempo que demorou (em segundos)"));
vel = dist / tempo;
alert(`Parabéns! O seu carro é um ${veiculo} que percorreu uma distância de ${dist} metros em ${tempo} segundo(s)! A sua velocidade média foi de ${vel}m/s`);