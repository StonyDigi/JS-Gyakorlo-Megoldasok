/*

Ebben a példában a jellemzes függvény felelős az átlagos napi alvásidő jellemzéséért. 
Az üres mezőket is ellenőrzi, és a felhasználót tájékoztatja, ha valamelyik üres. 
A jellemzés eredményét a HTML oldalon egy div elemen keresztül jeleníti meg.

*/

function jellemzes() {
    // Bemeneti adat beolvasása
    const alvasidoInput = document.getElementById('alvasido');
    const alvasido = parseInt(alvasidoInput.value);

    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényesek-e
    if (isNaN(alvasido) || alvasido < 0) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes, nemnegatív számot.</p>';
    } else {
      // Alvásidej jellemzése
      let jellemzes = '';
      if (alvasido <= 6) {
        jellemzes = 'Kevés alvás';
      } else if (alvasido <= 9) {
        jellemzes = 'Átlagos alvás';
      } else if (alvasido <= 12) {
        jellemzes = 'Sok alvás';
      } else {
        jellemzes = 'Nagyon sok alvás';
      }

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">Az átlagos napi alvásidő jellemzése: ${jellemzes}</p>`;
    }

    // Üres mező ellenőrzése és tájékoztatás
    if (alvasidoInput.value.trim() === '') {
      eredmenyElem.innerHTML = '<p class="text-danger">Kérem adja meg az átlagos napi alvásidőt a jellemzéshez.</p>';
    }
  }