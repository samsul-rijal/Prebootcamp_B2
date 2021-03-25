function printBiodata() {
    var namaDepan = document.getElementById("nama-depan").value;
    var namaBelakang = document.getElementById("nama-belakang").value;
    var hobi = document.getElementById("hobi").value;
    var alamat = document.getElementById("alamat").value;

    var namaLengkap = namaDepan + " " + namaBelakang

    var output = `
    <h3>Nama Lengkap : ${namaLengkap}</h3>
    <h3>Hobi : ${hobi}</h3>
    <h3>Alamat : ${alamat}</h3>
    `;

    document.getElementById("output-biodata").innerHTML = output;
}