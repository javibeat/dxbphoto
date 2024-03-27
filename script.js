function initializeMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Esto manejará el clic en el ícono de hamburguesa.
    hamburger.addEventListener("click", () => {
        // Agrega o quita la clase 'active' al ícono de hamburguesa y al menú.
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Esto manejará el clic en cada enlace del menú.
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        // Remueve la clase 'active' del ícono de hamburguesa y del menú para cerrarlo.
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}
