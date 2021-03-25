function printAngka() {
    let input = document.getElementById("inputAngka").value;
    
    let angka = "";
    for (let i = input.length - 1; i >= 0; i--) {
        angka = angka + input[i];
    }
    document.getElementById("output-angka").innerHTML = "Output : " + angka;
}
