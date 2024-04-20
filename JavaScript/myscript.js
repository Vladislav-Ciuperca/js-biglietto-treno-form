function azione() {
    let anni = document.getElementById("anni").value;
    let distance = document.getElementById("distanza").value;
    let baseprice = distance * 0.21;
    let nome = document.getElementById("nome").value;
    document.getElementById("passeggero").innerHTML = nome;
    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 60000) + 600000;
    document.getElementById("carrozzan").innerHTML = Math.floor(Math.random() * 100) + 1;

    if (anni == 0) {
        let fixedprice = baseprice.toFixed(2)
        document.getElementById("prezzo").innerHTML = fixedprice + '€';
    }

    else if (anni < 18) {
        const finalprice = baseprice * 0.8
        let fixedprice = finalprice.toFixed(2)
        document.getElementById("prezzo").innerHTML = fixedprice + '€';
        document.getElementById("sconto").innerHTML = '20%';

    }
    else if (anni >= 65) {
        const finalprice = baseprice * 0.6
        let fixedprice = finalprice.toFixed(2)
        document.getElementById("prezzo").innerHTML = fixedprice + '€';
        document.getElementById("sconto").innerHTML = '40%';
    }
    else {
        let fixedprice = baseprice.toFixed(2)
        document.getElementById("prezzo").innerHTML = fixedprice + '€';
    }
}