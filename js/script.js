document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // RECURSO JS 1: CARROSSEL DE BANNERS
    // ==========================================
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnProximo = document.getElementById("btn-proximo");
    let slideAtual = 0;

    function mostrarSlide(indice) {
        slides.forEach((slide) => slide.classList.remove("ativo"));
        dots.forEach((dot) => dot.classList.remove("ativo"));

        if (indice >= slides.length) {
            slideAtual = 0;
        } else if (indice < 0) {
            slideAtual = slides.length - 1;
        } else {
            slideAtual = indice;
        }

        slides[slideAtual].classList.add("ativo");
        dots[slideAtual].classList.add("ativo");
    }

    btnProximo.addEventListener("click", () => {
        mostrarSlide(slideAtual + 1);
    });

    btnAnterior.addEventListener("click", () => {
        mostrarSlide(slideAtual - 1);
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const indice = parseInt(dot.getAttribute("data-index"));
            mostrarSlide(indice);
        });
    });

    // Troca automática a cada 6 segundos
    setInterval(() => {
        mostrarSlide(slideAtual + 1);
    }, 6000);

    // ==========================================
    // RECURSO JS 2: BOTÃO "VER DETALHES" DAS VAGAS
    // ==========================================
    const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

    botoesDetalhes.forEach((botao) => {
        botao.addEventListener("click", () => {
            // Localiza a div .detalhes-vaga dentro do mesmo card
            const card = botao.closest(".card-vaga");
            const caixaDetalhes = card.querySelector(".detalhes-vaga");

            // Alterna o atributo hidden e o texto do botão
            if (caixaDetalhes.hidden) {
                caixaDetalhes.hidden = false;
                botao.textContent = "Ocultar detalhes";
            } else {
                caixaDetalhes.hidden = true;
                botao.textContent = "Ver detalhes";
            }
        });
    });
});

// ==========================================
    // RECURSO JS 3: DESTAQUE NO LINK ATIVO DO MENU
    // ==========================================
    const linksMenu = document.querySelectorAll(".menu a");

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            linksMenu.forEach((item) => item.classList.remove("ativo"));
            link.classList.add("ativo");
        });
    });