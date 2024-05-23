var valor, preco, litros;
preco= 5.99;
alert(`AVISO: O preço da gasolina é R$${preco}`);
valor= parseFloat(prompt("Digite quanto você quer colocar em dinheiro"));
litros = valor/preco;
alert(`O motorista pôde abastecer ${litros.toFixed(1)} litros de gasolina`);