/*

Ebben a példában a ellenorizOsztas függvény felelős az osztói-e egymásnak maradék nélkül ellenőrzésért. 
A függvény először beolvassa a két számot a felhasználó által megadott mezőkből, majd ellenőrzi, 
hogy mindkét számot megadták-e. Ha az egyik szám üres vagy nem érvényes szám, akkor kiír egy figyelmeztető üzenetet. 
Ha mindkét számot megadták, akkor ellenőrzi, hogy osztói-e egymásnak maradék nélkül, és az eredményt megjeleníti az oldalon.


*/

function ellenorizOsztas() {
    // Bemeneti számok beolvasása
    const szam1Input = document.getElementById('number1');
    const szam2Input = document.getElementById('number2');
    
    // Ellenőrizzük, hogy mindkét mezőt kitöltötték-e
    if (szam1Input.value.trim() === '' || szam2Input.value.trim() === '') {
      document.getElementById('eredmeny').innerHTML = '<p class="text-warning">Kérem ne hagyja üresen a számok mezejét!</p>';
      return;
    }

    const szam1 = parseInt(szam1Input.value);
    const szam2 = parseInt(szam2Input.value);

    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy mindkét számot megadták-e
    if (isNaN(szam1) || isNaN(szam2)) {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adjon meg érvényes számokat az ellenőrzéshez.</p>';
    } else {
      // Ellenőrizzük, hogy osztói-e egymásnak maradék nélkül
      if (szam1 % szam2 === 0 || szam2 % szam1 === 0) {
        eredmenyElem.innerHTML = '<p class="font-weight-bold text-success">A számok osztói egymásnak maradék nélkül.</p>';
      } else {
        eredmenyElem.innerHTML = '<p class="font-weight-bold text-danger">A számok nem osztói egymásnak maradék nélkül.</p>';
      }
    }
  }