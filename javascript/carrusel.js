
    let imagenes = [
        "assets/images/galeria1.png",
        "assets/images/galeria2.png",
        "assets/images/galeria3.png",
        "assets/images/dos.jpeg",
        "assets/images/tres.jpeg",
        "assets/images/cuatro.jpeg",
        "assets/images/cinco.jpeg",
        "assets/images/seis.jpeg"
    ];

    let btnAnterior = document.getElementById("btnAnterior");
    let btnSiguiente = document.getElementById("btnSiguiente");
    let posicion = 0;

    btnSiguiente.addEventListener("click", function() {
        let slider = document.getElementById("slider");
        posicion++;
        if (posicion >= imagenes.length) {
            posicion = 0; // Regresa a la primera imagen si llega al final
        }
        slider.src = imagenes[posicion];
    });

    btnAnterior.addEventListener("click", function() {
        let slider = document.getElementById("slider");
        posicion--;
        if (posicion < 0) {
            posicion = imagenes.length - 1; // Salta a la última imagen si está en la primera
        }
        slider.src = imagenes[posicion];
    });
