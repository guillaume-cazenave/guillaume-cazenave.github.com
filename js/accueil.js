document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('titre');

    h1.addEventListener('mouseover', () => {
        h1.innerHTML = "Créatif.";
        h1.style.textDecoration = "line-through";
    });

    h1.addEventListener('mouseout', () => {
        h1.innerHTML = "Guillaume<br>Cazenave";
        h1.style.textDecoration = "none";
    });
});