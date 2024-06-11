var arr = [];

function addItem() {
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }
    let novoItem = document.getElementById('val').value;
    arr.push(novoItem);
    document.getElementById('val').value = ' ';
    localStorage.meuArr = JSON.stringify(arr);
}
function showItems() {
    let resultDiv = document.getElementById('d');
    resultDiv.innerHTML = ' ';
    if (localStorage.meuArr) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }
    for (var i in arr) {
        let p = document.createElement('p');
        p.innerHTML = arr[i];
        resultDiv.append(p);
    }
}
function clearItems(){
    arr=[];
    localStorage.meuArr=JSON.stringify(arr);
    showItems();
}