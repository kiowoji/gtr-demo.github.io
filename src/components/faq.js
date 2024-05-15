import arrowDown from '/src/public/images/icon-service/arrow-down.svg';
import sunsetPic from '/src/public/images/sunset.png';

document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");
    const currentPage = window.location.pathname;
    if (currentPage === '/hotel.html') {
        const faqImg = document.querySelector('.faq-img');
        if (faqImg) {
            faqImg.style.display = 'none';
        }
    }

    function togglePanel(panel) {
        const isOpen = panel.classList.contains("active");
        if (isOpen) {
            panel.classList.remove("active");
            panel.style.maxHeight = null;
            panel.previousElementSibling.querySelector(".orange-border").classList.add("hidden");
        } else {
            panel.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.previousElementSibling.querySelector(".orange-border").classList.remove("hidden");
        }
    }

    function closeOtherPanels(clickedPanel) {
        accordions.forEach((accordion) => {
            const panel = accordion.nextElementSibling;
            if (accordion !== clickedPanel) {
                panel.classList.remove("active");
                panel.style.maxHeight = null;
                accordion.querySelector("img").style.transform = "rotate(0deg)";
                panel.previousElementSibling.querySelector(".orange-border").classList.add("hidden");
            }
        });
    }

    accordions.forEach((accordion, index) => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            togglePanel(panel);
            closeOtherPanels(this);
            const rotation = panel.classList.contains("active") ? "180deg" : "0deg";
            this.querySelector("img").style.transform = `rotate(${rotation})`;
        });
        if (index === 1) {
            accordion.classList.add("active");
            const panel = accordion.nextElementSibling;
            panel.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
            accordion.querySelector("img").style.transform = "rotate(180deg)";
            panel.previousElementSibling.querySelector(".orange-border").classList.remove("hidden");
        }
    });
});



class Faq extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
    this.innerHTML = `
        <h2 class="main-title">Поширені запитання</h2>
            <div class="faq">
                <div class="w-full">
                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span class="question">Яка середня ціна готелю?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span class="question">Чому варто обрати Go To Rest?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span class="question">Яка середня ціна готелю?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span class="question">Чому варто обрати Go To Rest?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span class="question">Яка середня ціна готелю?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>
                </div>
                <img src="${sunsetPic}" alt="img" class="faq-img">
            </div>
    `;
    this.addStructuredData();
    }

    addStructuredData() {
        const faqItems = Array.from(this.querySelectorAll('.accordion')).map((accordion, index) => {
            const question = accordion.querySelector('.question').innerText.trim();
            console.log(question);
            const answer = accordion.nextElementSibling.querySelector('.panel p').innerText.trim();
            console.log(answer)
            return {
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer
                }
            };
        });
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(structuredData);
        this.appendChild(script);
    }
}

customElements.define('faq-component', Faq);