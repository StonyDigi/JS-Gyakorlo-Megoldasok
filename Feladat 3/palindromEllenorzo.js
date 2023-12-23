/*

Ebben a példában egy PalindromEllenorzo osztályt használtunk, amelynek egyetlen statikus metódusa a palindromE, 
ami eldönti, hogy egy szöveg palindrom-e vagy sem. 
Az ellenorizPalindrom függvényben ennek a metódusnak a segítségével ellenőrizzük a palindrom tulajdonságot, 
majd az eredményt a HTML kimeneten jelenítjük meg az eredmeny elemen. 
A kód rövid és könnyen érthető, valamint az objektumorientált szemlélet és a tiszta kód elveit követi.

*/

class PalindromEllenorzo {
    static palindromE(szoveg) {
        // Tisztítjuk a szöveget: kisbetűsítjük és eltávolítjuk a nem betűs karaktereket
      const tisztaSzoveg = szoveg.toLowerCase().replace(/[^a-z0-9]/g, '');
      // Az átalakított szöveget megfordítjuk
      const forditottSzoveg = tisztaSzoveg.split('').reverse().join('');
      // A tiszta és a megfordított szövegek összehasonlítása
      return tisztaSzoveg === forditottSzoveg;
    }
  }

  function ellenorizPalindrom() {
     // Bemeneti szöveg beolvasása
    const bemenetiSzoveg = document.getElementById('textInput').value;
    // Eredmény megjelenítésére szolgáló elem kiválasztása
    const eredmenyElem = document.getElementById('eredmeny');
    // Ellenőrizzük, hogy a bemeneti szöveg üres-e
    if (bemenetiSzoveg.trim() === '') {
        // Ha üres, kiírjuk a figyelmeztetést
      eredmenyElem.innerHTML = `<p class="text-warning">Kérem írjon be szöveget az ellenőrzéshez.</p>`;
       // Ha nem üres, folytatjuk a palindrom ellenőrzést  
    } else if (PalindromEllenorzo.palindromE(bemenetiSzoveg)) {
      eredmenyElem.innerHTML = `<p class="text-success">${bemenetiSzoveg} Ez egy palindrom.</p>`;
    } else {
      eredmenyElem.innerHTML = `<p class="text-danger">${bemenetiSzoveg} Ez nem egy palindrom.</p>`;
    }
  }