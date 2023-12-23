/*

Ebben a példában a szamolKorkup függvény felelős a körkúp térfogatának és felszínének kiszámításáért. 
A függvény először beolvassa a körkúp sugarát és magasságát, majd ellenőrzi, hogy érvényes számokat adott-e meg a felhasználó. 
Ha minden rendben van, akkor kiszámolja a körkúp térfogatát és felszínét a megadott képletek alapján, majd az eredményt megjeleníti a HTML oldalon.


*/

function szamolKorkup() {
    // Bemeneti adatok beolvasása
    const sugar = parseFloat(document.getElementById('sugar').value);
    const magassag = parseFloat(document.getElementById('magassag').value);
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényes számok-e
    if (isNaN(sugar) || isNaN(magassag)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat a számoláshoz.</p>';
    } else {
      // Körkúp térfogata és felszíne számolása
      const terfogat = (1/3) * Math.PI * sugar**2 * magassag;
      const felszin = Math.PI * sugar * (sugar + Math.sqrt(sugar**2 + magassag**2));

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">Körkúp térfogata: ${terfogat.toFixed(2)}, Körkúp felszíne: ${felszin.toFixed(2)}</p>`;
    }
  }