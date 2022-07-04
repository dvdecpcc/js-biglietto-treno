// DECLARING VARIABLES
const km = parseInt(prompt('inserire la distanza in km della tua destinazione:'));
const age = parseInt(prompt('inserire età del passeggero:'));
const euro_km = 0.21;

// RECKONINGS: PRICES AND PERCENTAGES
const children = (20/100)
const elders = (40/100)

let fullPrice = (km * euro_km);
fullPrice = fullPrice.toFixed(2);

// PAYMENTS
if (age > 0 && age <= 18){
    let discount1 = (children * fullPrice);
    let actualPrice1 = (fullPrice - discount1);
    actualPrice1 = actualPrice1.toFixed(2);
    alert('importo totale:'+ actualPrice1 + 'euro');
} else if (age > 64 && age <121){
    let discount2 = (elders * fullPrice);
    let actualPrice2 = (fullPrice - discount2);
    actualPrice2 = actualPrice2.toFixed(2);
    alert('importo totale:'+ actualPrice2 + 'euro');
} else if (age > 120){
    alert('errore: controlla che le informazioni siano valide');
} else {
    alert('importo totale:'+ fullPrice + 'euro');
}
