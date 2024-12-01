document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".section-acc-type[data-acc-app-lazy]");
    if (container) {
        // Insert HTML for FAQ accordion
        container.innerHTML = `
            <style>
                .accordion {
                    width: 100%;
                }
                .accordion-item {
                    border-bottom: 1px solid #ddd;
                }
                .accordion-header {
                    cursor: pointer;
                    padding: 15px;
                    background-color: #f7f7f7;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: background-color 0.3s ease;
                }
                .accordion-header:hover {
                    background-color: #eaeaea;
                }
                .accordion-header::before {
                    content: '\25B6';
                    font-size: 1.2em;
                    margin-right: 10px;
                    transition: transform 0.3s ease;
                }
                .accordion-header.active::before {
                    transform: rotate(90deg);
                }
                .accordion-content {
                    display: none;
                    padding: 15px;
                    background-color: #fff;
                    border-left: 3px solid #007BFF;
                    transition: max-height 0.3s ease;
                }
                .accordion-header.active + .accordion-content {
                    display: block;
                }
            </style>
            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-header">¿Qué es un token y cómo funciona?</div>
                    <div class="accordion-content">Un token es tu pase para crear una canción personalizada. Cada token equivale a una canción única que puedes encargar en cualquier momento dentro del periodo de validez de tu paquete. ¡Solo necesitas enviarnos los detalles de lo que quieres y nosotros nos encargamos de hacerlo realidad!</div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header">¿Cuánto tiempo tarda en estar lista mi canción?</div>
                    <div class="accordion-content">Creamos canciones completamente personalizadas en un máximo de 5 días. Si necesitas tu canción antes, ¡podemos acelerar el proceso! Solo indícalo al momento de realizar tu pedido.</div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header">¿Qué tipo de canciones puedo solicitar?</div>
                    <div class="accordion-content">Podemos crear canciones para cualquier ocasión: desde Navidad y Año Nuevo hasta cumpleaños, aniversarios, bodas, y más. Tú eliges el estilo musical, el tono (emocional, divertido, romántico) y los detalles que deseas incluir.</div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header">¿Qué pasa si no uso todos mis tokens?</div>
                    <div class="accordion-content">Los tokens tienen una validez específica según el paquete que elijas:
                        <ul>
                            <li>1 Token: uso inmediato.</li>
                            <li>6 Tokens: válidos por 6 meses.</li>
                            <li>12 Tokens: válidos por 12 meses.</li>
                        </ul>
                        Si no usas todos los tokens dentro de ese tiempo, lamentablemente no podrán ser reembolsados ni extendidos, así que te recomendamos planificar cómo usarlos para sacarles el mayor provecho.
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header">¿Cómo puedo usar mi token después de comprarlo?</div>
                    <div class="accordion-content">Una vez que compres tu paquete, recibirás una cuenta con tus tokens disponibles. Podrás iniciar el proceso cuando lo desees ingresando a tu cuenta, seleccionando “Usar un token” y completando el formulario con los detalles de tu canción.</div>
                </div>
            </div>
        `;

        // Add JavaScript for accordion functionality
        const headers = container.querySelectorAll(".accordion-header");
        headers.forEach(header => {
            header.addEventListener("click", function () {
                const isActive = header.classList.contains("active");
                headers.forEach(h => h.classList.remove("active"));
                container.querySelectorAll(".accordion-content").forEach(content => content.style.display = "none");
                if (!isActive) {
                    header.classList.add("active");
                    header.nextElementSibling.style.display = "block";
                }
            });
        });
    }
});
