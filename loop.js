function printAngka() {
    let input = document.getElementById("inputAngka").value;
    let angka = "";
    for (i = 1; i <= input; i++) {
      angka += " " + i;
    }
    document.getElementById("output-angka").innerHTML = angka;
}

function printKuadrat() {
    let input = document.getElementById("inputKuadrat").value;
    let kuadrat = "";
    for (a = 1; a <= input; a++){
        if (Math.sqrt (a) % 1 == 0)
        kuadrat += " " + a;
    }
    document.getElementById("output-kuadrat").innerHTML = kuadrat;
}

function printKelipatan() {
    let input = document.getElementById("inputKelipatan").value;
    let kelipatan = "";
    for (b = 1; b <= 60; b++){
        if (b % 3 == 0)
        kelipatan += " " + b;
    }
    document.getElementById("output-kelipatan").innerHTML = kelipatan;
}

    // for (b = 1; b <= 60; b++){
    //     if (b % 3 == 0)
    //     document.write(" " + b);
    // }