function printText() {
    let input = document.getElementById("inputText").value;
    panjang = input.match(/a/g).length;
    document.getElementById("output").innerHTML = "total huruf a sebanyak " + panjang + " buah";
}
