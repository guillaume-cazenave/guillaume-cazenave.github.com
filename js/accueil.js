document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('titre');

    h1.addEventListener('mouseover', () => {
        h1.textContent = "3D artist."; // Change le texte au survol
        h1.style.textDecoration = "line-through"; // Barrer le texte
    });

    h1.addEventListener('mouseout', () => {
        h1.textContent = "psiir."; // Restaure le texte original lorsque la souris quitte l'élément
        h1.style.textDecoration = "none"; // Enlève le barré
    });
});