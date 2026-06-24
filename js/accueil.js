document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('titre');

    // Déclencher l'animation blur-in après que le JS a écrit le HTML
    h1.innerHTML = "Guillaume<br>Cazenave";
    // Forcer un reflow pour que l'animation reparte bien
    void h1.offsetWidth;
    h1.classList.add('animate');

    h1.addEventListener('mouseover', () => {
        h1.innerHTML = "Créatif.";
        h1.style.textDecoration = "line-through";
    });

    h1.addEventListener('mouseout', () => {
        h1.innerHTML = "Guillaume<br>Cazenave";
        h1.style.textDecoration = "none";
    });
});
