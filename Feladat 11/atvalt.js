/*

Ebben a példában a atvalt függvény felelős az átváltásért és az eredmény megjelenítéséért. 
A függvény először beolvassa az Euró árfolyamát és az átváltandó euró összegét, majd ellenőrzi, 
hogy érvényes számokat adott-e meg a felhasználó. Ha minden rendben van, akkor kiszámolja az átváltott összeget a megadott képletek alapján, 
majd az eredményt megjeleníti a HTML oldalon.


*/

function atvalt() {
    // Bemeneti adatok beolvasása
    const arfolyam = parseFloat(document.getElementById('arfolyam').value);
    const osszegEuro = parseFloat(document.getElementById('osszeg').value);
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényes számok-e
    //Egy logikai értéket ad vissza, amely jelzi, hogy egy érték a fenntartott NaN érték-e (nem szám).
    if (isNaN(arfolyam) || isNaN(osszegEuro)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat a számoláshoz.</p>';
    } else {
      // Átváltás és eredmény kiírása
      const atvaltottOsszeg = arfolyam * osszegEuro;
      eredmenyElem.innerHTML = `<p class="font-weight-bold">${osszegEuro} € átváltva: ${atvaltottOsszeg.toFixed(2)} Ft</p>`;
    }
  }