import flagua from '/src/public/images/flag-ua.svg';
import flagru from '/src/public/images/flag-ru.svg';
import flagde from '/src/public/images/flag-germany.svg';
import flageng from '/src/public/images/flag-eng.svg';
import facebook from '/src/public/images/social-icon/Facebook.svg';
import instagram from '/src/public/images/social-icon/Instagram.svg';
import pinterest from '/src/public/images/social-icon/Pinterest.svg';
import telegram from '/src/public/images/social-icon/Telegram.svg';
import youtube from '/src/public/images/social-icon/Youtube.svg';


class Footer extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
    this.innerHTML = `
    <footer class="bg-white">
        <div class="bg-[#F0F0F0]">
        <div class="email-subscription side-paddings">
            <div class="flex flex-col text-center lg:text-left">
                <div class="text-2xl font-bold whitespace-normal lg:whitespace-nowrap">Підпишись на новини</div>
                <div class="text-lg gray-text sm:mb-8 md:mb-8 lg:mb-0 whitespace-normal lg:whitespace-nowrap">Ми надсилатимемо тільки корисне :)</div>
            </div>
            <div class="w-full flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-5 md:justify-center lg:justify-end">
                <input type="email" placeholder="Ваш email" class="email-input">
                <button class="subscribe-btn">Підписатись</button>
            </div>
        </div>
        </div>

        <div class="main-footer side-paddings ">
            <div class="sm:mb-10 md:mb-0 lg:mb-0">
                <div class="font-bold text-xl mb-6">Опублікувати об’єкт</div>
                <ul>
                    <li class="footer-contact">
                        <span class="gray-text">За телефоном</span>
                        <a href="tel:+380956480880">+38 (095) 648-0880</a>
                    </li>
                    <li class="footer-contact">
                        <span class="gray-text">E-mail</span>
                        <a href="mailto:info@go-to.rest">info@go-to.rest</a>
                    </li>
                    <li class="footer-contact">
                        <span class="gray-text">Telegram</span>
                        <a href="#">@infoGoToRest</a>
                    </li>
                </ul>
            </div>
            <div class="company">
                <div class="font-bold text-xl mb-6">Компанія</div>
                <a href="#" class="footer-text">Як стати гідом</a>
                <a href="#" class="footer-text">Про нас</a>
                <a href="#" class="footer-text">Блог</a>
            </div>
            <div class="rules">
                <div class="font-bold text-xl mb-6">Правила</div>
                <a href="#" class="footer-text">Політика конфіденційності</a>
                <a href="#" class="footer-text">Умови використання</a>
                <a href="#" class="footer-text">Cookies</a>
            </div>
            <div class="footer-icons">
                <a href="#">
                    <img src="${facebook}" alt="Facebook">
                </a>
                <a href="#">
                    <img src="${instagram}" alt="Instagram">
                </a>
                <a href="#">
                    <img src="${pinterest}" alt="Pinterest">
                </a>
                <a href="#">
                    <img src="${telegram}" alt="Telegram">
                </a>
                <a href="#">
                    <img src="${youtube}" alt="Youtube">
                </a> 
            </div>
        </div>

        <div class="copyright side-paddings">
            <div class="flex sm:mb-4 md:mb-4 lg:mb-0">
                <button type="button" class="leng mr-5" id="foo-leng">
                    <div class="uppercase text-base mr-1 text-secondary">ua</div>
                    <img src="${flagua}" alt="flag">
                </button>
                <button type="button" id="foo-currency">
                    <div class="money-select" id="foo-currency-data">uah</div>
                </button>
            </div>
            <ul id="foo-leng-menu" class="!hidden">
                <li>
                    <button type="button" class="leng" data-lang="ua">
                        <div class="leng-select">ua</div>
                        <img src="${flagua}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="ru">
                        <div class="leng-select">ru</div>
                        <img src="${flagru}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="de">
                        <div class="leng-select">de</div>
                        <img src="${flagde}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="eng">
                        <div class="leng-select">eng</div>
                        <img src="${flageng}" alt="flag">
                    </button>
                </li>
            </ul>
            <ul id="foo-currency-menu" class="!hidden">
                <li>
                    <button type="button" class="currency">
                        <div class="currency-select">uan</div>
                    </button>
                </li>
                <li>
                    <button type="button" class="currency">
                        <div class="currency-select">eur</div>
                    </button>
                </li>
            </ul>
            <div class="text-secondary">
                <span>Copyright © 2023 by</span>
                <a href="https://go-to.rest" class="underline">Go-To.Rest</a>
            </div>
        </div>
    </footer>
    `;
        const leng = document.getElementById('foo-leng');
        const lengMenu = document.getElementById('foo-leng-menu');
        const currency = document.getElementById('foo-currency');
        const currencyMenu = document.getElementById('foo-currency-menu');
        const currencyData = document.getElementById('foo-currency-data');
         currency.addEventListener('click', () => {
            currencyMenu.classList.toggle('!hidden');
        })

        leng.addEventListener('click', () => {
            lengMenu.classList.toggle('!hidden');
        })

        document.querySelectorAll('#foo-leng-menu li').forEach(item => {
            item.addEventListener('click', () => {
                const selectedLanguage = item.querySelector('.leng').innerHTML;
                leng.innerHTML = selectedLanguage;
                lengMenu.classList.add('!hidden');
            });
        });

        document.addEventListener('click', (e) => {
            if (!leng.contains(e.target) && !lengMenu.contains(e.target)) {
                lengMenu.classList.add('!hidden');
            }
        });

        document.querySelectorAll('#foo-currency-menu li').forEach(item => {
            item.addEventListener('click', () => {
                const selectedCurrency = item.querySelector('.currency-select').textContent;
                currencyData.textContent = selectedCurrency;
                currencyMenu.classList.add('!hidden');
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!currency.contains(e.target) && !currencyMenu.contains(e.target)) {
                currencyMenu.classList.add('!hidden');
            }
        });
    }
}

customElements.define('footer-component', Footer);