/**
 * Script principal pour le site Centre El Manar
 * Gère les fonctionnalités interactives
 */

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling pour les ancres
  initSmoothScrolling();

  // Changement de couleur navbar au scroll
  initNavbarScrollEffect();

  // Validation du formulaire
  initFormValidation();

  // Gestion de l'envoi du formulaire
  initContactForm();
});

/**
 * Initialise le défilement fluide pour les liens d'ancrage
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        window.scrollTo({
          top: target.offsetTop - navbarHeight,
          behavior: "smooth",
        });

        // Fermer le menu mobile si ouvert
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click();
        }
      }
    });
  });
}

/**
 * Gère l'effet de changement de couleur de la navbar au scroll
 */
function initNavbarScrollEffect() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("bg-dark");
    } else {
      navbar.classList.add("bg-dark");
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Appliquer le style au chargement si on est déjà en bas de page
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("bg-dark");
  }
}

/**
 * Initialise la validation du formulaire
 */
function initFormValidation() {
  const form = document.getElementById("contactForm");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
}

/**
 * Gère l'envoi du formulaire de contact
 */
function initContactForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      // Simuler l'envoi du formulaire
      console.log("Formulaire soumis avec succès !");
      console.log("Nom:", document.getElementById("nom").value);
      console.log("Email:", document.getElementById("email").value);
      console.log("Message:", document.getElementById("message").value);

      // Afficher un message de succès
      alert("Merci pour votre message ! Nous vous contacterons bientôt.");

      // Réinitialiser le formulaire
      form.reset();
      form.classList.remove("was-validated");
    }
  });
}
