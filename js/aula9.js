const turnOn = document.getElementById('buttonOn');
const turnOff = document.getElementById('buttonOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada.jpg')>-1;
}
function ligarOn(){
    if (!isLampBroken()){
        lamp.src = '/img/acesa.jpg';
    }
}
function desligarOff(){
    if (!isLampBroken()){
        lamp.src = '/img/apagada.jpg'
    }
}
function quebrarLamp(){
    lamp.src = '/img/quebrada.jpg';
}

turnOn.addEventListener('click', ligarOn);
turnOff.addEventListener('click', desligarOff);
lamp.addEventListener('mouseover', ligarOn);
lamp.addEventListener('mouseleave', desligarOff);
lamp.addEventListener('dblclick', quebrarLamp);