/*

Ebben a példában a szamolJutalom függvény felelős a pénztáros jutalom kiszámításáért. 
Az üres mezőket és az érvénytelen adatokat is ellenőrzi, és a felhasználót tájékoztatja. 
Az eredményt a HTML oldalon egy div elemen keresztül jeleníti meg.

*/

function szamolJutalom() {
    //Bemeneti adat beolvasása
    const bevetelInput = document.getElementById('bevetel');
    const bevetel = parseFloat(bevetelInput.value);

    //Elem kiválasztása, amelyre az eredményt írjuk
    const jutalomElem = document.getElementById('jutalom');

    //Ellenőrizzük, hogy a bemeneti adat érvényes-e
    if(isNaN(bevetel) || bevetel < 0) {
        jutalomElem.innerHTML = `<p class="text-warning">Kérem adjon meg érvényes, nem negatív számot.</p>`;    
    } else {
        //Jutalom kiszámítása (5% a napi bevételből)
        const jutalom = Math.round(bevetel * 0.05);

        //Az eredményt kiírjuk az oldalra
        jutalomElem.innerHTML = `<p class="font-weight-bold">A pénztáros jutalma: ${jutalom} Ft</p>`;
    }
    //Üres mező ellenőrzése és tájékoztatás
    if (bevetelInput.value.trim() === '') {
        jutalomElem.innerHTML = `<p class="text-warning">Kérem adja meg a napi bevételt a jutalom kiszámításához.</p>`;
    }
}