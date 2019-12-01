function chooseFunction() {
    if (document.getElementById("ciphers").value == "ROT13") {

        document.getElementById("answer").innerHTML = rot13Function(document.getElementById("coded").value);
    }
    else if (document.getElementById("ciphers").value == "atbash") {
        document.getElementById("answer").innerHTML = atbashFunction(document.getElementById("coded").value);
    }
        
}
    
function rot13Function(coded) {
    return coded.replace(/[A-Z]/gi, d =>
        "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(d)])
}

function atbashFunction(coded) {
    return coded.replace(/[A-Z]/gi, d =>
        "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba"[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(d)])
}