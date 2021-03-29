
function printAngka() {
    let input = document.getElementById("inputAngka").value;
    let temp = [];
    for (i = 1; i <= input; i++) {
        temp.push(i);
    }
    document.getElementById("output-angka").innerHTML = temp;
}
    
function printKuadrat() {
    let input = document.getElementById("inputKuadrat").value;
    let temp = [];
    for (i = 1; i <= input; i++) {
        temp.push(i * i);
    }
    document.getElementById("output-kuadrat").innerHTML = temp;
}

function printKelipatan() {
    let input = document.getElementById("inputKelipatan").value;
    let temp = [];
    for (i = 1; i <= input; i++) {
        temp.push(i * 3);
    }
    document.getElementById("output-kelipatan").innerHTML = temp;
}