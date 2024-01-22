
document.getElementById("rechner").addEventListener('click', function() {

    var kapital = document.getElementById('kapital').value;
    var tage = document.getElementById('tage').value;
    var zinssatz = document.getElementById('zinssatz').value;

    var rendite = kapital * Math.pow((1 + zinssatz / 100), tage);
    document.getElementById('rendite').value = rendite.toFixed(2);

    var mitSteuer = rendite * 0.75;
    document.getElementById('mitSteuer').value = mitSteuer.toFixed(2);
}
)
function berechneZinsen() {
    var kapital = document.getElementById('kapital').value;
    var tage = document.getElementById('tage').value;
    var zinssatz = document.getElementById('zinssatz').value;

    var rendite = kapital * Math.pow((1 + zinssatz / 100), tage);
    document.getElementById('rendite').value = rendite.toFixed(2);

    var mitSteuer = rendite * 0.75;
    document.getElementById('mitSteuer').value = mitSteuer.toFixed(2);
}
