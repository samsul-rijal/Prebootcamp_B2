function printGaji (){
    let gajiGolongan, perhari, bulanan, lembur;
    
    let nama = document.getElementById("inputNama").value;
    let golongan = document.getElementById("inputGolongan").value;
    let jamBekerja = document.getElementById("inputJam").value;

    if (golongan == "A") {
        gajiGolongan = 1000;
    } else if (golongan == "B") {
        gajiGolongan = 2000;
    } else if (golongan == "C") {
        gajiGolongan = 3000;
    } else if (golongan == "D") {
        gajiGolongan = 4000;
    } else {
        alert("Silahkan pilih golongan!")
    }

    perhari = gajiGolongan * jamBekerja;
    bulanan = perhari * 30;

    let totalJam = jamBekerja * 30;

    if (totalJam > 200) {
        jamLembur = (totalJam - 200);
        lembur = (jamLembur * (gajiGolongan + 200));
    }
   
    document.getElementById("output-nama").innerHTML = "Nama: " + nama;
    document.getElementById("output-golongan").innerHTML = "Golongan: " + golongan;
    document.getElementById("output-perhari").innerHTML = "Gaji Perhari: Rp " + perhari;
    document.getElementById("output-bulanan").innerHTML = "Gaji Bulanan: Rp " + bulanan;
    document.getElementById("output-lembur").innerHTML = "Lembur: Rp " + lembur;
    document.getElementById("output-total").innerHTML = "Total Keseluruhan: Rp " + (bulanan + lembur);
}