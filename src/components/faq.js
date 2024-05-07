import arrowDown from '/src/public/images/icon-service/arrow-down.svg';
import sunsetPic from '/src/public/images/sunset.png';

document.addEventListener("DOMContentLoaded", function() {
    let acc = document.querySelectorAll(".accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                this.querySelector("img").style.transform = "rotate(0deg)";
            } else {
                panel.style.display = "block";
                this.querySelector("img").style.transform = "rotate(180deg)";
            }
        });
    }
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
                        <span>Яка середня ціна готелю?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                        <span>Чому варто обрати Go To Rest?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel active">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                        <span>Яка середня ціна готелю?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                        <span>Чому варто обрати Go To Rest?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                        <span>Яка середня ціна готелю?</span>
                        <img src="${arrowDown}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>
                </div>
                <img src="${sunsetPic}" alt="img" class="faq-img">
            </div>
    `;
    }
}

customElements.define('faq-component', Faq);