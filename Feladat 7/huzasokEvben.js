/*

Ebben a példában a huzasokEvben függvény felelős a számok kihúzásáért. 
A függvény egy külső ciklusban generál 52 hétre kihúzott számokat, 
és minden héten egy belső ciklusban generál hat különböző véletlenszerű számot. 
A kihúzott számokat a HTML oldalon egy div elemen keresztül jeleníti meg, hetente külön-külön.

*/
function huzasokEvben() {
    // Kihúzott számokat tároló halmaz minden hétre
    let kihuzottSzamokHetente = [];

    // Addig generálunk számokat, amíg nincs kihúzva minden héten egy szám
    while (kihuzottSzamokHetente.length < 52) {
      // Kihúzott számokat tároló halmaz egy hétre
      let kihuzottSzamokEbbenAWeekben = new Set();

      // Addig húzunk számokat, amíg nem leszünk hat különböző számmal egy héten
      while (kihuzottSzamokEbbenAWeekben.size < 6) {
        // Generálunk egy véletlenszerű számot 1 és 45 között
        let huzottSzam = Math.floor(Math.random() * 45) + 1;
        // Ellenőrizzük, hogy ez a szám még nem lett-e kihúzva korábban ezen a héten
        if (!kihuzottSzamokEbbenAWeekben.has(huzottSzam)) {
          // Hozzáadjuk a számot a kihúzott számok halmazához ezen a héten
          kihuzottSzamokEbbenAWeekben.add(huzottSzam);
        }
      }

      // Hozzáadjuk a kihúzott számokat a heti listához
      kihuzottSzamokHetente.push(Array.from(kihuzottSzamokEbbenAWeekben));
    }

    // Az eredményt kiírjuk az oldalra
    document.getElementById('eredmeny').innerHTML = '<p class="font-weight-bold">Kihúzott számok évben:</p>';
    for (let i = 0; i < kihuzottSzamokHetente.length; i++) {
      document.getElementById('eredmeny').innerHTML += `<p>${i + 1}. hét: ${kihuzottSzamokHetente[i].join(', ')}</p>`;
    }
  }