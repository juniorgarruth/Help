/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    const active = nav.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        active
    );

});


/* Fecha o menu ao clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(42, 8, 83, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   SIMULADOR DE FATURAMENTO
===================================================== */

const cleanings =
    document.getElementById("cleanings");

const cleaningsValue =
    document.getElementById("cleaningsValue");

const priceSelect =
    document.getElementById("priceSelect");

const daysSelect =
    document.getElementById("daysSelect");

const weeklyResult =
    document.getElementById("weeklyResult");

const monthlyResult =
    document.getElementById("monthlyResult");


function formatCurrency(value) {

    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


function calculateRevenue() {

    const numberOfCleanings =
        Number(cleanings.value);

    const price =
        Number(priceSelect.value);

    const days =
        Number(daysSelect.value);


    /*
       Faturamento semanal:

       limpezas por dia
       × valor por limpeza
       × dias trabalhados
    */

    const weekly =
        numberOfCleanings *
        price *
        days;


    /*
       Utilizamos aproximadamente
       4,33 semanas por mês.
    */

    const monthly =
        weekly * 4.33;


    cleaningsValue.textContent =
        numberOfCleanings;


    weeklyResult.textContent =
        formatCurrency(weekly);


    monthlyResult.textContent =
        formatCurrency(monthly);

}


/* Eventos */

cleanings.addEventListener(
    "input",
    calculateRevenue
);


priceSelect.addEventListener(
    "change",
    calculateRevenue
);


daysSelect.addEventListener(
    "change",
    calculateRevenue
);


/* Calcula ao carregar */

calculateRevenue();


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("visible");

    } else {

        backTop.classList.remove("visible");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   ANIMAÇÃO DE ELEMENTOS AO ENTRAR NA TELA
===================================================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(
        ".method-card, .pricing-card, .testimonial, .audience-grid article"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });


/* Classe adicionada dinamicamente */

const animationStyle =
    document.createElement("style");

animationStyle.textContent = `

    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(animationStyle);


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   PROTEÇÃO CONTRA LINKS "#" DESNECESSÁRIOS
===================================================== */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Configure aqui o link de compra do seu e-book."
        );

    });

});