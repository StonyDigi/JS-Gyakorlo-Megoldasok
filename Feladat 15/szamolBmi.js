/*

Ebben a példában a szamolBMI függvény felelős a testtömeg-index kiszámításáért és a testsúly-osztályzás meghatározásáért. 
A kiszámolt eredményeket a HTML oldalon egy div elemen keresztül jeleníti meg. 
A testsúly-osztályzás kijelölésekor 24.9-es értéket választottam a normális testsúlynak, 
mivel a hagyományosan elfogadott tartomány 18.5-től 24.9-ig terjed. 


*/

function szamolBMI() {
    // Bemeneti adatok beolvasása
    const tomegInput = document.getElementById('tomeg');
    const magassagInput = document.getElementById('magassag');
    
    const tomeg = parseFloat(tomegInput.value);
    const magassag = parseFloat(magassagInput.value);
    
    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényes számok-e
    if (isNaN(tomeg) || isNaN(magassag) || tomeg <= 0 || magassag <= 0) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat és pozitív értékeket a számoláshoz.</p>';
    } else {
      // Testtömeg-index (BMI) kiszámítása
      const magassagM = magassag / 100; // Átváltás méterre
      const bmi = tomeg / (magassagM * magassagM);

      // Testsúly-osztályzás meghatározása
      let testsulyOsztaly = '';
      if (bmi < 16) {
        testsulyOsztaly = 'Súlyos soványság';
      } else if (bmi < 16.99) {
        testsulyOsztaly = 'Mérsékelt soványság';
      } else if (bmi < 18.49) {
        testsulyOsztaly = 'Enyhe soványság';
      } else if (bmi < 24.99) {
        testsulyOsztaly = 'Normális testsúly';
      } else if (bmi < 34.99) {
        testsulyOsztaly = 'I. fokú elhízás';
      } else if (bmi < 39.99) {
        testsulyOsztaly = 'II. fokú elhízás';
      } else {
        testsulyOsztaly = 'III. fokú elhízás';
      }

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">Testtömeg-index (BMI): ${bmi.toFixed(2)}</p>
                               <p class="font-weight-bold">Testsúly-osztályzás: ${testsulyOsztaly}</p>`;
    }
    
    // Üres mezők ellenőrzése és tájékoztatás
    if (tomegInput.value.trim() === '' || magassagInput.value.trim() === '') {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem töltse ki mindkét mezőt a számoláshoz.</p>';
    }
  }