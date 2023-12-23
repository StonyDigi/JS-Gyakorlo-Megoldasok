/*

Ebben a példában a szamolMaganhangzok függvény felelős a százalékos arány kiszámításáért. 
A függvény először beolvassa a bemeneti szöveget, majd egy for ciklussal megszámolja a magánhangzókat. 
Az eredményt a HTML oldalon egy div elemen keresztül jeleníti meg. 
A karakterek számolásakor a speciális karaktereket a replace metódus segítségével eltávolítjuk.


*/

function szamolMaganhangzok() {
    // Bemeneti szöveg beolvasása
    const szoveg = document.getElementById('szoveg').value.toLowerCase();
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Számolás
    let maganhangzoDarab = 0;
    for (let i = 0; i < szoveg.length; i++) {
      const karakter = szoveg.charAt(i);
      // Ellenőrizzük, hogy a karakter egy betű és magánhangzó-e
      if (/^[aeiouáéíóöőúüű]$/.test(karakter)) {
        maganhangzoDarab++;
      }
    }

    // Százalékos arány kiszámítása
    const szovegHossz = szoveg.replace(/[^a-záéíóöőúüű]/g, '').length;
    const szazalekosArany = (maganhangzoDarab / szovegHossz) * 100;

    // Az eredményt kiírjuk az oldalra
    eredmenyElem.innerHTML = `<p class="font-weight-bold">A magánhangzók aránya: ${szazalekosArany.toFixed(2)}%</p>`;
  }