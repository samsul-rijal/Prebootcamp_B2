function printBilangan() {
    let input = document.getElementById("inputBilangan").value;
    let pembagi = 0;
    for (let i = 1; i <= input; i++){
        if (input % i == 0 ){
            pembagi++
        }
    }
    if (pembagi == 2){
        document.getElementById("output-bilangan").innerHTML = input + " adalah bilangan prima";
    }else {
        document.getElementById("output-bilangan").innerHTML = input + " bukan bilangan prima";
    }
}