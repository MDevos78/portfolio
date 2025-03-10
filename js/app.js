// Fonction pour ouvrir le modal et afficher l'image
function openModal(imageSrc, imageAlt) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";  // Afficher le modal
    modalImg.src = imageSrc;       // Afficher l'image dans le modal
    captionText.innerHTML = imageAlt;  // Afficher la description de l'image
}

// Fonction pour fermer le modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";  // Cacher le modal
}