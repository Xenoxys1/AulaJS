//Function Declaration
function soma(a, b){
    return a+b;
}
//Usando a função
document.getElementById('output').innerHTML += "<p>Soma(2,3): "+soma(2,3)+"</p>";

//Function Expression
const subtrair = function(a,b){
    return a-b;
}
//Usando a função
document.getElementById('output').innerHTML += "<p> Subtração (10, 3):"+subtrair(10, 3)+"</p>";

//Arrow function
const dobrar =x=>x*2;
//Usando a função
document.getElementById('output').innerHTML += "<p>Dobro de 5: "+dobrar(5)+"</p>";