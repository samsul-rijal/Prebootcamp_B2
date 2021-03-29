function printGaji (){
    let nama = document.getElementById("inputNama").value;
    let golongan = document.getElementById("inputGolongan").value;

    if (golongan == "A") {
        gajiGolongan = "1000";
    } else if (golongan == "B") {
        gajiGolongan = "2000";
    } else if (golongan == "C") {
        gajiGolongan = "3000";
    } else if (golongan == "D") {
        gajiGolongan = "4000";
    }

    let lamaBekerja = document.getElementById("inputJam").value;
    perhari = gajiGolongan * lamaBekerja;
    bulanan = perhari * 30;
    lembur = 48000;
    totalGaji = bulanan + lembur;
   
    document.getElementById("output-nama").innerHTML = "Nama: " + nama;
    document.getElementById("output-golongan").innerHTML = "Golongan: " + golongan;
    document.getElementById("output-perhari").innerHTML = "Gaji Perhari: Rp " + perhari;
    document.getElementById("output-bulanan").innerHTML = "Gaji Bulanan: Rp " + bulanan;
    document.getElementById("output-lembur").innerHTML = "Lembur: Rp " + lembur;
    document.getElementById("output-total").innerHTML = "Total Keseluruhan: Rp " + totalGaji;
}