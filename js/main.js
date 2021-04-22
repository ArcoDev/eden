addEventListener("DOMContentLoaded", () => {
    // Detectamos cuando el usuario desplace la pantalla
    window.onscroll = function() {
        // Obtenemos la posicion del scroll en pantall
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scroll);
        const nav = document.getElementById("nav");
        if (scroll > 160) {
            nav.classList.add("fixed-top");
            nav.style.transition = "all 1s ease";
        } else {
            nav.classList.remove("fixed-top");

        }
    }
});