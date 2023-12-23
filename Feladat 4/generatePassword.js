function generatePassword() {
    // Bemeneti hossz beolvasása
    const passwordLength = document.getElementById('passwordLength').value;
    // Elem kiválasztása, amelyre az eredményt írjuk
    const generatedPasswordElem = document.getElementById('generatedPassword');
    // Elkészítjük az angol ABC és számok karaktereit tartalmazó karakterláncot
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Ellenőrizzük, hogy a hossz mező üres-e
    if (passwordLength.trim() === '') {
        generatedPasswordElem.innerHTML = `<p class="text-warning">Kérem ne hagyja üresen a hossz-t!</p>`;
    } else {
    let password = '';
    
    // Generáljuk a jelszót a megadott hosszúságig
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    // Az eredményt kiírjuk az oldalra
    generatedPasswordElem.innerHTML = `<p class="font-color-green font-weight-bold">Generált jelszó: ${password}</p>`;
  }
}