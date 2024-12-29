// JavaScript para interactividad

document.addEventListener("DOMContentLoaded", () => {
    // Navegación suave
    const enlaces = document.querySelectorAll("nav ul li a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", e => {
            e.preventDefault();
            const destino = document.querySelector(enlace.getAttribute("href"));
            destino.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Efecto de galería
    const imagenes = document.querySelectorAll(".gallery img");

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const imagenGrande = document.createElement("img");
            imagenGrande.src = imagen.src;
            imagenGrande.classList.add("imagen-grande");

            overlay.appendChild(imagenGrande);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });

    // Resaltar sección activa
    const secciones = document.querySelectorAll("section");

    const resaltarSeccion = () => {
        const scrollY = window.pageYOffset;

        secciones.forEach(seccion => {
            const alturaSeccion = seccion.offsetHeight;
            const posicionSeccion = seccion.offsetTop - 50;

            if (scrollY > posicionSeccion && scrollY <= posicionSeccion + alturaSeccion) {
                const id = seccion.getAttribute("id");
                enlaces.forEach(enlace => {
                    enlace.classList.remove("activo");
                    if (enlace.getAttribute("href") === `#${id}`) {
                        enlace.classList.add("activo");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", resaltarSeccion);
});