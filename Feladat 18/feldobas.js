/*

Ebben a példában a feldobas függvény háromszor feldobja a pénzt, 
majd az eredményeket szövegesen megjeleníti az oldalon. 
Az eredményeket a HTML oldalon egy div elemen keresztül jeleníti meg.


*/

function feldobas() {
    // Pénzfeldobások száma
    const dobasokSzama = 3;

    // Elem kiválasztása, amelyre az eredményeket írjuk
    const eredmenyekElem = document.getElementById('eredmenyek');

    // Pénzfeldobások eredményeinek tárolása
    const eredmenyek = [];

    // Pénzfeldobások végrehajtása
    for (let i = 0; i < dobasokSzama; i++) {
      // Véletlenszerűen fej vagy írás kiválasztása
      const fejVagyIras = Math.random() < 0.5 ? 'Fej' : 'Írás';
      
      // Eredmény hozzáadása az eredmények tömbhöz
      eredmenyek.push(fejVagyIras);
    }

    // Az eredményeket kiírjuk az oldalra
    eredmenyekElem.innerHTML = `<p class="font-weight-bold">Pénzfeldobás eredményei:</p>`;
    eredmenyek.forEach((eredmeny, index) => {
      eredmenyekElem.innerHTML += `<p>Feldobás ${index + 1}: ${eredmeny}</p>`;
    });
  }