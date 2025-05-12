// Ocultar el navbar al bajar y mostrarlo al subir
let prevScrollPosicion = window.pageYOffset;
const navbar = document.getElementById("navbar");
if (navbar) {
    window.onscroll = function () {
        let actualScrollPosicion = window.pageYOffset;
        if(prevScrollPosicion > actualScrollPosicion) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-180px"; // Depende del ancho de la barra
        }
        prevScrollPosicion = actualScrollPosicion;
    };
}


// Boton para subir al inicio de la pagina
const btnSubir = document.getElementById("btn-subir");
if (btnSubir) {
    window.addEventListener("scroll", () => {
        btnSubir.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btnSubir.addEventListener("click", () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Para aplicar el modal y poder hacer zoom a las imagenes
const imagenModal = document.getElementById("imagenModal");
if (imagenModal) {
    document.querySelectorAll("img[data-bs-toggle='modal']").forEach(img => {
        img.addEventListener("click", () => {
            imagenModal.src = img.src; // Asignar la dirección al modal
        });
    });
}

// Hacer zoom al hacer click en los botones
let currentScale = 1;
document.getElementById("zoomInBtn").addEventListener("click", () => {
    currentScale +=0.1;
    imagenModal.style.transform = `scale(${currentScale})`;
});
document.getElementById("zoomOutBtn").addEventListener("click", () => {
    if(currentScale>0.2) {
        currentScale -=0.1;
        imagenModal.style.transform = `scale(${currentScale})`;
    }
});
    // Restaurar escala cuando se cierre el modal
document.getElementById("modalImagen").addEventListener("hidden.bs.modal", () => {
    currentScale = 1;
    imagenModal.style.transform = `scale(${currentScale})`;
});