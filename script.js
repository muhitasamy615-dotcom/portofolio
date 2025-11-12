// Message de bienvenue dans la console
console.log("Bienvenue sur le portfolio de Kambale Muhita Samy !");

// Animation bouton "Travaillons ensemble"
document.getElementById("hireMeBtn").addEventListener("click", () => {
    window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: "smooth"
    });
});

// Gestion du formulaire de contact (simulation)
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Merci ${name}, votre message a bien été envoyé !`);
    e.target.reset();
});
