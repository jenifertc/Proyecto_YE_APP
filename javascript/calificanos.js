// SISTEMA DE CALIFICACIONES

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formCalificacion");
    const estrellas = document.querySelectorAll("#estrellas_span");
    const lista = document.getElementById("listaOpiniones");
    const mensaje = document.getElementById("mensaje");

    // Evitar errores si esta sección no existe en la página

    if (!formulario || !lista || !mensaje || estrellas.length === 0) {
        return;
    }

    let calificacion = 0;

    // Mostrar las estrellas seleccionadas

    estrellas.forEach(function (estrella) {

        estrella.addEventListener("click", function () {

            calificacion = Number(this.dataset.valor);

            estrellas.forEach(function (item) {

                const valor = Number(item.dataset.valor);

                item.classList.toggle(
                    "seleccionada",
                    valor <= calificacion
                );

            });

        });

    });

    // Mostrar opiniones guardadas
    function mostrarOpiniones() {

        lista.innerHTML = "";

        const opiniones = JSON.parse(
            localStorage.getItem("opinionesYE") || "[]"
        );

        opiniones.forEach(function (opinion) {

            const tarjeta = document.createElement("div");
            tarjeta.classList.add("opinion");

            const nombre = document.createElement("h3");
            nombre.textContent = opinion.nombre;

            const puntuacion = document.createElement("p");
            puntuacion.classList.add("puntuacion");
            puntuacion.textContent = "★".repeat(opinion.estrellas);

            const comentario = document.createElement("p");
            comentario.textContent = opinion.comentario;

            tarjeta.append(nombre, puntuacion, comentario);

            lista.appendChild(tarjeta);

        });

    }

    // Enviar calificación
    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nombre = document.getElementById("nombreCliente").value.trim();
        const comentario = document.getElementById("comentarioCliente").value.trim();

        if (calificacion === 0) {
            mensaje.textContent = "Selecciona las estrellas.";
            return;
        }

        if (nombre === "" || comentario === "") {
            mensaje.textContent = "Completa todos los campos.";
            return;
        }

        const opiniones = JSON.parse(
            localStorage.getItem("opinionesYE") || "[]"
        );

        opiniones.push({
            nombre: nombre,
            estrellas: calificacion,
            comentario: comentario
        });

        localStorage.setItem(
            "opinionesYE",
            JSON.stringify(opiniones)
        );

        mensaje.textContent = "¡Gracias por calificar nuestro servicio!";

        formulario.reset();
        calificacion = 0;

        estrellas.forEach(function (item) {
            item.classList.remove("seleccionada");
        });

        mostrarOpiniones();

    });

    mostrarOpiniones();

});