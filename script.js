// ========================================
// AÑO AUTOMÁTICO
// ========================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ========================================
// LUZ ROJA QUE SIGUE AL CURSOR
// ========================================

const luz = document.getElementById("cursorLuz");

if (luz) {

    document.addEventListener("mousemove", (evento) => {

        luz.style.left =
            evento.clientX + "px";

        luz.style.top =
            evento.clientY + "px";

    });

}


// ========================================
// EFECTO MUY SUAVE EN LOS RELATOS
// ========================================

const libros =
    document.querySelectorAll(".libro");


libros.forEach((libro) => {

    libro.addEventListener(
        "mousemove",
        (evento) => {

            if (window.innerWidth < 950) {
                return;
            }

            const rect =
                libro.getBoundingClientRect();


            const x =
                evento.clientX -
                rect.left;


            const y =
                evento.clientY -
                rect.top;


            const centroX =
                rect.width / 2;


            const centroY =
                rect.height / 2;


            const rotacionY =
                ((x - centroX) / centroX)
                * 1.1;


            const rotacionX =
                ((centroY - y) / centroY)
                * 1.1;


            libro.style.transform =

                `translateY(-10px)
                perspective(900px)
                rotateX(${rotacionX}deg)
                rotateY(${rotacionY}deg)`;

        }
    );


    libro.addEventListener(
        "mouseleave",
        () => {

            libro.style.transform = "";

        }
    );

});


// ========================================
// MENÚ PARA CELULAR
// ========================================

const menuMovil =
    document.getElementById("menuMovil");


const menu =
    document.getElementById("menu");


if (menuMovil && menu) {

    menuMovil.addEventListener(
        "click",
        () => {

            menu.classList.toggle("abierto");

        }
    );


    const enlaces =
        menu.querySelectorAll("a");


    enlaces.forEach((enlace) => {

        enlace.addEventListener(
            "click",
            () => {

                menu.classList.remove("abierto");

            }
        );

    });

}
