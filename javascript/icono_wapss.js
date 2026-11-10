// Botón para volver arriba
const btn_arriba = document.getElementById("btn_arriba");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        btn_arriba.classList.add("mostrar");
    } else {
        btn_arriba.classList.remove("mostrar");
    }
});

btn_arriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});