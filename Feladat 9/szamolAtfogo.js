/*

Ebben a példában a szamolAtfogo függvény felelős a Pitagorasz tétel alkalmazásáért és az eredmény megjelenítéséért. 
A függvény először beolvassa a két befogó hosszát, majd ellenőrzi, hogy érvényes számokat adott-e meg a felhasználó. 
Ha minden rendben van, akkor alkalmazza a Pitagorasz tételt, majd az eredményt megjeleníti a HTML oldalon.


*/
function szamolAtfogo() {
    // Befogók beolvasása
    const befogo1 = parseFloat(document.getElementById('befogo1').value);
    const befogo2 = parseFloat(document.getElementById('befogo2').value);
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényes számok-e
    if (isNaN(befogo1) || isNaN(befogo2)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat a számoláshoz.</p>';
    } else {
      // Pitagorasz tétel alkalmazása
      const atfogo = Math.sqrt(befogo1**2 + befogo2**2);

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">A derékszögű háromszög átfogója: ${atfogo.toFixed(2)}</p>`;
    }
  }