/* 

Ebben a példában egy egyszerű HTML űrlapot használunk egy input mezővel (szám) és egy gombbal, 
amely meghívja a checkPrime függvényt. A checkPrime függvény az input mezőből kiolvassa az értéket, 
majd meghívja az isPrime függvényt az ellenőrzéshez. Az eredményt az alert függvény segítségével jelenítjük meg felugró ablakban. 
Az primE függvény a prímséget ellenőrzi a megadott számra.

*/

// Függvény, ami eldönti, hogy egy szám prím-e
function primszamEllenorzes(szam) {
    // A számok, amik kisebbek vagy egyenlők 1-nél, nem prímek
    if (szam <= 1) {
        return false;
    }

    // A 2 kivétel, a 2 mindig prímszám
    if (szam === 2) {
        return true;
    }

    // Ellenőrizzük, hogy a szám osztható-e más számmal
    for (var i = 2; i <= Math.sqrt(szam); i++) {
        if (szam % i === 0) {
            return false; // Ha osztható, akkor nem prím
        }
    }

    return true; // Ha nem talált osztót, akkor prím
}

// Gombra kattintáskor elinduló fő függvény
function ellenorizPrimszam() {
    // Kérd be a felhasználótól a számot
    var beirtSzam = parseInt(prompt("Adj meg egy számot:"));

    // Ellenőrizze, hogy a beírt szám prím-e, majd jelenítse meg az eredményt
    if (primszamEllenorzes(beirtSzam)) {
        eredmenyMegjelenites(beirtSzam + " prímszám.");
    } else {
        eredmenyMegjelenites(beirtSzam + " nem prímszám.");
    }
}

// Az eredmények megjelenítésére szolgáló függvény
function eredmenyMegjelenites(uzenet) {
    alert(uzenet);
}
