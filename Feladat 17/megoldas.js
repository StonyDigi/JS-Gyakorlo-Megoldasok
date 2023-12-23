/*

Ebben a példában a megoldas függvény felelős a másodfokú egyenlet megoldásáért. 
Az üres mezőket és az érvénytelen adatokat is ellenőrzi, és a felhasználót tájékoztatja. 
Az eredményeket a HTML oldalon egy div elemen keresztül jeleníti meg.

*/

function megoldas() {
    // Bemeneti adatok beolvasása
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényesek-e
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat.</p>';
    } else {
      // Másodfokú egyenlet megoldása
      const delta = b * b - 4 * a * c;

      if (delta < 0) {
        eredmenyElem.innerHTML = '<p class="font-weight-bold">Az egyenletnek nincs valós gyöke.</p>';
      } else if (delta === 0) {
        const x = -b / (2 * a);
        eredmenyElem.innerHTML = `<p class="font-weight-bold">Az egyenletnek egy valós gyöke van: x = ${x}</p>`;
      } else {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a);
        const x2 = (-b + Math.sqrt(delta)) / (2 * a);
        eredmenyElem.innerHTML = `<p class="font-weight-bold">Az egyenletnek két valós gyöke van: x1 = ${x1}, x2 = ${x2}</p>`;
      }
    }
  }