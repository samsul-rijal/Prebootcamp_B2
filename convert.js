function printNilai() {
    let nilai = document.getElementById("inputNilai").value;
    if (nilai >= 86 && nilai <= 100) {
        document.getElementById("output-nilai").innerHTML = "Nilai Konversi adalah A";
    } else if (nilai >= 70 && nilai <= 85) {
        document.getElementById("output-nilai").innerHTML = "Nilai Konversi adalah B";
    } else if (nilai >= 50 && nilai <= 69) {
        document.getElementById("output-nilai").innerHTML = "Nilai Konversi adalah C";
    } else if (nilai >= 30 && nilai <= 49) {
        document.getElementById("output-nilai").innerHTML = "Nilai Konversi adalah D";
    } else if (nilai >= 0 && nilai <= 29) {
        document.getElementById("output-nilai").innerHTML = "Nilai Konversi adalah E";
    } else {
        document.getElementById("output-nilai").innerHTML = "Inputkan nilai yang benar!";

    }
}
