function openModal(media, isVideo) {
    const modal = document.getElementById("mediaModal");
    const modalImg = document.getElementById("modalImage");
    const modalVideo = document.getElementById("modalVideo");
    const modalVideoSource = document.getElementById("modalVideoSource");
    const captionText = document.getElementById("caption");

    if (isVideo) {
        modalImg.style.display = "none"; // Ocultar imagen
        modalVideo.style.display = "block"; // Mostrar video
        modalVideoSource.src = media.querySelector('source').src; // Obtener la fuente del video
        modalVideo.load(); // Cargar el video
        captionText.innerHTML = "Video: " + media.parentElement.querySelector('p').innerText; // Establecer el título del video
    } else {
        modalVideo.style.display = "none"; // Ocultar video
        modalImg.style.display = "block"; // Mostrar imagen
        modalImg.src = media.src; // Establecer la imagen en el modal
        captionText.innerHTML = media.alt; // Establecer el título de la imagen
    }

    modal.style.display = "block"; // Mostrar el modal
}

function closeModal() {
    const modal = document.getElementById("mediaModal");
    modal.style.display = "none"; // Ocultar modal
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.pause(); // Pausar video cuando se cierra el modal
    modalVideo.currentTime = 0; // Reiniciar video
}

 // Objeto que contiene las descripciones de los talleres y charlas
 const descripciones = {
    "energia-renovables": "Seminario: Energías Renovables y el Futuro. Una discusión sobre las tecnologías de energía limpia y su impacto en el medio ambiente.",
    "cambio-climatico": "Taller: Cambio Climático y Sostenibilidad. Aprenderás sobre las causas y consecuencias del cambio climático y cómo podemos mitigarlo.",
    "reciclaje": "Charla: Reciclaje y Gestión de Residuos. Se abordarán las mejores prácticas para reciclar y gestionar residuos de manera efectiva.",
    "biodiversidad": "Taller: Importancia de la Biodiversidad. Un análisis de cómo la biodiversidad afecta nuestro ecosistema y qué podemos hacer para protegerla."
};

// Función para mostrar la descripción del taller/charla seleccionado
function mostrarDescripcion() {
    const select = document.getElementById("taller");
    const descripcionDiv = document.getElementById("descripcion");
    const descripcionTexto = document.getElementById("descripcion-texto");

    const seleccionActual = select.value;

    // Verifica si la selección actual tiene una descripción
    if (seleccionActual in descripciones) {
        descripcionTexto.innerText = descripciones[seleccionActual];
        descripcionDiv.style.display = "block"; // Muestra la descripción
    } else {
        descripcionDiv.style.display = "none"; // Oculta la descripción si no hay selección
    }
}

// Función para enviar el formulario
function enviarFormulario(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    alert("¡Inscripción enviada exitosamente!"); // Mensaje de alerta
    setTimeout(() => {
        window.location.href = 'home.html'; // Redirigir después de 3 segundos
    }, 3000); // 3000 ms = 3 segundos
}

// Función para inicializar el formulario (opcional)
function inicializarFormulario() {
    const descripcionDiv = document.getElementById("descripcion");
    descripcionDiv.style.display = "none"; // Asegúrate de ocultar la descripción al cargar
}

// Inicializar el formulario al cargar la página
window.onload = inicializarFormulario;

function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    alert("¡Inscripción enviada exitosamente!"); // Muestra una alerta
    setTimeout(() => {
        window.location.href = 'home.html'; // Redirige a la página principal después de 3 segundos
    }, 3000); // Temporizador de 3000 ms = 3 segundos
}


    // Mostrar el botón cuando se hace scroll
    window.onscroll = function() {
        const button = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block"; // Mostrar el botón
        } else {
            button.style.display = "none"; // Ocultar el botón
        }
    };

    // Función para scroll hacia arriba
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
    }

