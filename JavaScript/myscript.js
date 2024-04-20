function azione() {
    let anni = document.getElementById("anni").value;
    let distance = document.getElementById("distanza").value;
    let baseprice = distance * 0.21;

    if (anni == 0) {
        let fixedprice = baseprice.toFixed(2)
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + fixedprice + " + iva";
    }
    else if (anni < 18) {
        const finalprice = baseprice * 0.8
        let fixedprice = finalprice.toFixed(2)
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + fixedprice + " + iva";
    }
    else if (anni >= 65) {
        const finalprice = baseprice * 0.6
        let fixedprice = finalprice.toFixed(2)
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + fixedprice + " + iva";
    }
    else {
        let fixedprice = baseprice.toFixed(2)
        document.getElementById("demo").innerHTML = "il costo del tuo viaggio è di " + fixedprice + " + iva";
    }
}
function financial(x) {
}