/*

Ebben a példában a szamol függvény felelős a kocka felszínének és térfogatának kiszámításáért. 
A függvény először beolvassa a kocka élhosszát, majd ellenőrzi, hogy érvényes számot adott-e meg a felhasználó. 
Ha minden rendben van, akkor kiszámolja a kocka felszínét és térfogatát a megadott képletek alapján, majd az eredményt megjeleníti a HTML oldalon.

*/

function szamol() {
    // Bemeneti adatok beolvasása
    const elhossz = parseFloat(document.getElementById('elhossz').value);
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adat érvényes szám-e
    if (isNaN(elhossz)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számot a számoláshoz.</p>';
    } else {
      // Kocka felszíne és térfogata számolása
      const felszin = 6 * elhossz**2;
      const terfogat = elhossz**3;

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">Kocka felszíne: ${felszin.toFixed(2)}, Kocka térfogata: ${terfogat.toFixed(2)}</p>`;
    }
  }