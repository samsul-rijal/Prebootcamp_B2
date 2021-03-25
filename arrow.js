printBiodata = () => {
    let namaDepan = document.getElementById("nama-depan").value;
    let namaBelakang = document.getElementById("nama-belakang").value;
    let alamat = document.getElementById("alamat").value;
    let keahlian = document.getElementById("keahlian").value;
    let sekolah = document.getElementById("sekolah").value;

    let namaLengkap = namaDepan + " " + namaBelakang

    let output = `
    <h3>Nama Lengkap : ${namaLengkap}</h3>
    <h3>Alamat : ${alamat}</h3>
    <h3>Keahlian : ${keahlian}</h3>
    <h3>Sekolah : ${sekolah}</h3>
    `;

    document.getElementById("output-biodata").innerHTML = output;
}