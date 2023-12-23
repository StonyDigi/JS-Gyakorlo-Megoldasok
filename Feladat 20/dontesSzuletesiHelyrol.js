function dontesSzuletesiHelyrol() {
    // Bemeneti adat beolvasása
    const szuletesiHelyInput = document.getElementById('szuletesihely');
    const szuletesiHely = szuletesiHelyInput.value.trim().toLowerCase();

    // Elem kiválasztása, amelyre az eredményt írjuk
    const eredmenyElem = document.getElementById('eredmeny');

    // Ellenőrizzük, hogy a bemeneti adatok érvényesek-e
    if (szuletesiHely === '') {
      eredmenyElem.innerHTML = '<p class="text-warning">Kérem adja meg a születési helyét a döntéshez.</p>';
    } else {
      // Döntés a születési hely alapján
      let dontes = '';
      if (szuletesiHely === 'budapest' || szuletesiHely === 'bp') {
        dontes = 'A fővárosban született.';
      } else {
        dontes = 'Vidéken született.';
      }

      // Az eredményt kiírjuk az oldalra
      eredmenyElem.innerHTML = `<p class="font-weight-bold">${dontes}</p>`;
    }
  }