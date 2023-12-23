/*

Ebben a példában a szamolUtikoltseg függvény felelős az útiköltség kiszámításáért. 
A függvény először beolvassa a három bemeneti értéket, majd ellenőrzi, hogy érvényes számokat adott-e meg a felhasználó. 
Ha minden rendben van, akkor kiszámolja az útiköltséget a megadott képletek alapján, majd az eredményt megjeleníti a HTML oldalon.

*/

function szamolUtikoltseg() {
    // Bemeneti adatok beolvasása
    const fogyasztas = parseFloat(document.getElementById('fogyasztas').value);
    const benzinAr = parseFloat(document.getElementById('benzinAr').value);
    const utHossz = parseFloat(document.getElementById('utHossz').value);
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényes számok-e
    if (isNaN(fogyasztas) || isNaN(benzinAr) || isNaN(utHossz)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat a számoláshoz.</p>';
    } else {
      // Útiköltség számolása
      const utikoltseg = (utHossz / 100) * fogyasztas * benzinAr;

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">Az útiköltség: ${utikoltseg.toFixed(2)} Ft</p>`;
    }
  }