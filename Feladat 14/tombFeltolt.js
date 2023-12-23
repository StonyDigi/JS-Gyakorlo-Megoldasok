/*

Ebben a példában a tombFeltolt függvény felelős a tömb feltöltéséért, és több eljárást és függvényt is definiál a feladatok megoldására. 
A példában eljárásokat (kiirTomb, minden5Elem, oszthatokHarommal) és függvényeket (parosElemekOsszege, paratlanElemekAtlag, legkisebbElem, 
legkisebbElemIndex, veletlenElemMegjelenit) is használunk. Az eredményeket a HTML oldalon különböző div elemeken keresztül jelenítjük meg.

*/

// Feltölti a tömböt véletlen számokkal
function tombFeltolt() {
    const elemszam = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    const alsoHatar = parseInt(prompt("Adja meg a véletlenszerű alsó határt:"));
    const felsoHatar = parseInt(prompt("Adja meg a véletlenszerű felső határt:"));

    const tomb = [];
    // Feltölti a tömböt véletlen számokkal
    for (let i = 0; i < elemszam; i++) {
      const veletlenSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
      tomb.push(veletlenSzam);
    }

    // Eljárás: Tömb elemeinek kiírása HTML kimenetre
    function kiirTomb() {
      document.getElementById('tombElemek').innerHTML = "Tömb elemei: " + tomb.join(', ');
    }

    // Függvény: Páros elemek összege
    function parosElemekOsszege() {
      const osszeg = tomb.filter(elem => elem % 2 === 0).reduce((acc, curr) => acc + curr, 0);
      document.getElementById('parosElemekOsszege').innerHTML = "Páros elemek összege: " + osszeg;
    }

    // Függvény: Páratlan elemek átlaga
    function paratlanElemekAtlag() {
      const paratlanok = tomb.filter(elem => elem % 2 !== 0);
      const atlag = paratlanok.length > 0 ? paratlanok.reduce((acc, curr) => acc + curr, 0) / paratlanok.length : 0;
      document.getElementById('paratlanElemekAtlag').innerHTML = "Páratlan elemek átlaga: " + atlag.toFixed(2);
    }

    // Függvény: Legkisebb érték
    function legkisebbElem() {
      const legkisebb = Math.min(...tomb);
      document.getElementById('legkisebbElem').innerHTML = "Legkisebb elem: " + legkisebb;
    }

    // Függvény: Legkisebb értékű elem indexe
    function legkisebbElemIndex() {
      const legkisebbIndexek = [];
      const legkisebb = Math.min(...tomb);
      for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === legkisebb) {
          legkisebbIndexek.push(i);
        }
      }
      document.getElementById('legkisebbElemIndex').innerHTML = "Legkisebb elem(ek) indexe(i): " + legkisebbIndexek.join(', ');
    }

    // Függvény: Véletlen elem megjelenítése felugró ablakban
    function veletlenElemMegjelenit() {
      const veletlenIndex = Math.floor(Math.random() * tomb.length);
      const veletlenElem = tomb[veletlenIndex];
      document.getElementById("veletlenElemMegjelenit").innerHTML = "Véletlen elem: " + veletlenElem;
    }

    // Eljárás: Minden 5. elem kiírása HTML kimenetre
    function minden5Elem() {
      const minden5Indexek = [];
      for (let i = 4; i < tomb.length; i += 5) {
        minden5Indexek.push(tomb[i]);
      }
      document.getElementById('minden5Elem').innerHTML = "Minden 5. elem: " + minden5Indexek.join(', ');
    }

    // Eljárás: Oszthatók 3-mal kiírása HTML kimenetre
    function oszthatokHarommal() {
      const oszthatoHarommal = tomb.filter(elem => elem % 3 === 0);
      if (oszthatoHarommal.length > 0) {
        document.getElementById('oszthatokHarommal').innerHTML = "Osztható 3-mal: " + oszthatoHarommal.join(', ');
      } else {
        document.getElementById('oszthatokHarommal').innerHTML = "Nincs elem, amely osztható 3-mal.";
      }
    }

    // Eljárások és függvények meghívása
    kiirTomb();
    parosElemekOsszege();
    paratlanElemekAtlag();
    legkisebbElem();
    legkisebbElemIndex();
    veletlenElemMegjelenit()
    minden5Elem();
    oszthatokHarommal();
  }