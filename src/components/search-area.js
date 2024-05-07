import search from '/src/public/images/search_icon.svg';
import result1 from '/src/public/images/search-results/results_1.jpg';
import result2 from '/src/public/images/search-results/results_2.jpg';
import result3 from '/src/public/images/search-results/results_3.jpg';
import result4 from '/src/public/images/search-results/results_4.jpg';
import result5 from '/src/public/images/search-results/results_5.jpg';
import mapIcon from '/src/public/images/icon-map.svg';
import eyeIcon from '/src/public/images/main-cards/icon-eye-off.svg';
import coinIcon from '/src/public/images/main-cards/icon-coins.svg';
import phoneIcon from '/src/public/images/main-cards/icon-phone.svg';
import clockIcon from '/src/public/images/search-results/clock-icon.svg';

class SearchArea extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <form class="search-area" id="search-form">
                    <input id="search-input" class="search_input pl-3.5" type="text" placeholder="Знайти...">
                    <input type="reset" value="&#x2715;" class="reset-btn hidden"/>
                     <button id="search_btn" class="pr-1 lg:pr-2" type="submit">
                         <img src="${search}" alt="icon" class="max-w-fit round-icon">
                     </button>
            </form>
            <div id="search-results" class="hidden">
                <ul>
                    <li class="search-result-item">
                        <img src="${result1}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">Назва локації 1</h2>
                            <span class="text-sm lg:text-base text-gray-400">Локація</span>
                            <p class="result-desc">Місто на річці Уж в Закарпатській області України, центр Ужгородської міської громади та Ужгородськ...</p>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result2}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">Назва житла 1</h2>
                            <span class="text-sm lg:text-base text-gray-400 my-1">Житло</span>
                            <div class="flex flex-row justify-start">
                                <img src="${mapIcon}" alt="icon" class="w-[20px] h-[20px]">
                                <div class="text-gray-700 text-sm lg:text-base pl-2 text-wrap lg:text-nowrap">
                                    с. Лумшори, вул. Лугова, 5, Закарпатська область
                                </div>
                            </div>
                            <div class="hotel-phone">
                                <img src="${phoneIcon}" alt="icon">
                                <div class="phone-overflow !text-gray-700 !text-sm !lg:text-base">+380969036281</div>
                                <img src="${eyeIcon}" alt="icon" class="eye-icon">
                            </div>
                            <div class="flex flex-row justify-start">
                                <img src="${coinIcon}" alt="icon">
                                <div class="text-gray-700 pl-2 text-sm lg:text-base">від 1070 ₴ / ніч</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result3}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">Назва пам’ятки 1</h2>
                            <span class="text-gray-400 text-sm lg:text-base">Визначна пам’ятка</span>
                            <p class="result-desc">Місто на річці Уж в Закарпатській області України, центр Ужгородської міської громади та Ужгородськ...</p>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result4}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">Назва тура 4</h2>
                            <span class="text-gray-400 text-sm lg:text-base">Тур</span>
                            <div class="hotel-phone">
                                <img src="${clockIcon}" alt="icon">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 годин</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${coinIcon}" alt="icon">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">від 1070 ₴</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result5}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">Назва тура 5</h2>
                            <span class="text-gray-400 text-sm lg:text-base">Тур</span>
                            <div class="hotel-phone">
                                <img src="${clockIcon}" alt="icon">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 годин</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${coinIcon}" alt="icon">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">від 1070 ₴</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result1}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">Назва локації 2</h2>
                            <span class="text-sm lg:text-base text-gray-400">Локація</span>
                            <p class="result-desc">Місто на річці Уж в Закарпатській області України, центр Ужгородської міської громади та Ужгородськ...</p>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result2}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">Назва житла 2</h2>
                            <span class="text-sm lg:text-base text-gray-400 my-1">Житло</span>
                            <div class="flex flex-row justify-start">
                                <img src="${mapIcon}" alt="icon" class="w-[20px] h-[20px]">
                                <div class="text-gray-700 text-sm lg:text-base pl-2">
                                    с. Лумшори, вул. Лугова, 5, Закарпатська область
                                </div>
                            </div>
                            <div class="hotel-phone">
                                <img src="${phoneIcon}" alt="icon">
                                <div class="phone-overflow !text-gray-700 !text-sm !lg:text-base">+380969036281</div>
                                <img src="${eyeIcon}" alt="icon" class="eye-icon">
                            </div>
                            <div class="flex flex-row justify-start">
                                <img src="${coinIcon}" alt="icon">
                                <div class="text-gray-700 pl-2 text-sm lg:text-base">від 1070 ₴ / ніч</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result3}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">Назва пам’ятки 2</h2>
                            <span class="text-gray-400 text-sm lg:text-base">Визначна пам’ятка</span>
                            <p class="result-desc">Місто на річці Уж в Закарпатській області України, центр Ужгородської міської громади та Ужгородськ...</p>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result4}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">Назва тура 6</h2>
                            <span class="text-gray-400 text-sm lg:text-base">Тур</span>
                            <div class="hotel-phone">
                                <img src="${clockIcon}" alt="icon">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 годин</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${coinIcon}" alt="icon">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">від 1070 ₴</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${result5}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">Назва тура 7</h2>
                            <span class="text-gray-400 text-sm lg:text-base">Тур</span>
                            <div class="hotel-phone">
                                <img src="${clockIcon}" alt="icon">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 годин</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${coinIcon}" alt="icon">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">від 1070 ₴</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        `;

        document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('search-form');
        const input = document.getElementById('search-input');
        const resultsContainer = document.getElementById('search-results');
        const resetBtn = document.querySelector('.reset-btn');
           
        input.addEventListener('input', () => {
        resetBtn.classList.toggle('hidden', input.value.length === 0);
        });

        resetBtn.addEventListener('click', () => {
            input.value = '';
            input.dispatchEvent(new Event('input'));
            resultsContainer.classList.add('hidden');
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const query = input.value.trim();
            console.log(query);
            
            if (query.length === 0) {
                alert('Введіть будь-ласка запит для пошуку.');
                return;
            } else {
                resultsContainer.classList.remove('hidden');
            } 
        });
            
        document.body.addEventListener('click', function(event) {
            const isClickInsideForm = form.contains(event.target);
            const isClickInsideResults = resultsContainer.contains(event.target);

            if (!isClickInsideForm && !isClickInsideResults) {
                resultsContainer.classList.add('hidden');
            }
        });
        });
        
    const phoneOverflows = document.getElementsByClassName('phone-overflow');
    const eyeIcons = document.getElementsByClassName('eye-icon');

    for (let i = 0; i < eyeIcons.length; i++) {
    eyeIcons[i].addEventListener('click', () => {
        phoneOverflows[i].classList.toggle('!w-max');
    });
    }

    }
}

customElements.define('search-area', SearchArea);