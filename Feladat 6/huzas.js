/*

Ebben a példában a huzas függvény felelős a számok kihúzásáért. 
A függvény egy Set objektumot használ a már kihúzott számok tárolására, 
majd egy while ciklus segítségével generál öt különböző véletlenszerű számot. 
A kihúzott számokat a HTML oldalon egy div element-en keresztül jeleníti meg.


*/

function huzas() {
    // Korábban már kihúzott számok tárolására használt halmaz
    let kihuzottSzamok = new Set();

    // Addig húzunk számokat, amíg nem leszünk öt különböző számmal
    while (kihuzottSzamok.size < 5) {
      // Generálunk egy véletlenszerű számot 1 és 90 között
      let huzottSzam = Math.floor(Math.random() * 90) + 1;
      // Ellenőrizzük, hogy ez a szám még nem lett-e kihúzva korábban
      //has : egy logikai érték, amely azt jelzi, hogy a megadott értékű elem létezik-e a készletben vagy sem.
      if (!kihuzottSzamok.has(huzottSzam)) {
        // Hozzáadjuk a számot a kihúzott számok halmazához
        kihuzottSzamok.add(huzottSzam);
      }
    }

    // Az eredményt kiírjuk az oldalra
    document.getElementById('eredmeny').innerHTML = `<p class="font-weight-bold">Kihúzott számok: ${Array.from(kihuzottSzamok).join(', ')}</p>`;
  }