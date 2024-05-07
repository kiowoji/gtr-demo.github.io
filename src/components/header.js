import flagua from '/src/public/images/flag-ua.svg';
import flagru from '/src/public/images/flag-ru.svg';
import flagde from '/src/public/images/flag-germany.svg';
import telegram from '/src/public/images/telegram.svg';
import viber from '/src/public/images/viber.svg';
import menuBurger from '/src/public/images/menu_burger.svg';
import logo from '/src/public/images/logo.png';
import addObject from '/src/public/images/add_object_icon.svg';
import becomeGuide from '/src/public/images/become_a_guide_icon.svg';
import phoneHeader from '/src/public/images/phone-header-icon.svg';
import search from '/src/public/images/search_icon.svg';
import donate from '/src/public/images/donate_button.svg';
import phoneOrange from '/src/public/images/social-icon/phone-orange.svg';
import telegramOrange from '/src/public/images/social-icon/telegram-orange.svg';
import viberOrange from '/src/public/images/social-icon/viber-orange.svg';

class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
    this.innerHTML = `
        <header id="header">
        <div class="bg-header-top">
            <div class="flex-alignment">
                <div class="flex-alignment py-3">
                    <button type="button" class="leng mr-5" id="leng">
                        <div class="uppercase text-sm mr-1 text-gray-400">ua</div>
                        <img src="${flagua}" alt="flag">
                    </button>
                    <button type="button" id="currency">
                        <div class="money-select" id="currency-data">uah</div>
                    </button>
                    <a class=" text-gray-400 text-base mr-5" href="#">Блог</a>
                    <a class=" text-gray-400 text-base "  href="#">Про нас</a> 
                </div>
                <div class="flex-alignment">
                    <a href="#">
                        <img src="${telegram}" alt="icon">
                    </a>
                    <a class=" mx-2" href="#">
                        <img src="${viber}" alt="icon">
                    </a>
                    <a class="text-gray-400 text-base font-semibold" href="tel:+380956480880">+38 (095) 648-0880</a>
                </div> 
            </div>
        </div>

        <ul id="leng-menu" class="!hidden">
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
        </ul>
        <ul id="currency-menu" class="!hidden">
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

        <div class="main-header">
            <div class="sm:block md:block lg:flex justify-between items-center">
                <div class="flex-alignment w-full sm:flex-wrap md:flex-nowrap lg:flex-nowrap">
                    <div class="flex items-center w-max">
                        <button id="btn_menu">
                        <img src="${menuBurger}" alt="menu" class="w-10 h-10 lg:w-[60px] lg:h-[60px] max-w-fit">
                        </button>
                        <a class="ml-4 mr-2 flex" href="/">
                        <img src="${logo}" alt="logo" class="logo">
                        </a>
                    </div>

                    
                    <div class="sm:flex md:flex lg:hidden gap-4 md:order-last">
                        <button id="add-btn">
                            <img src="${addObject}" alt="icon" class="w-[40px] md:max-w-fit">
                        </button>
                        <button id="contact-btn">
                            <img src="${phoneHeader}" alt="icon" class="w-[40px] md:max-w-fit">
                        </button>
                    </div>
                    <ul id="add-section" class="!hidden">
                            <li>
                                <a class="open-add-object flex-alignment cursor-pointer" href="#">
                                    <img src="${addObject}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">Додати об'єкт</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex-alignment cursor-pointer" href="become-a-guide.html">
                                    <img src="${becomeGuide}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">Стати гідом</span>
                                </a>
                            </li>
                    </ul>
                    <ul id="contact-section" class="!hidden">
                            <li>
                                <a class="flex-alignment cursor-pointer" href="tel:+380956480880">
                                    <img src="${phoneOrange}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">+38 (095) 648-0880</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex-alignment cursor-pointer" href="become-a-guide.html">
                                    <img src="${telegramOrange}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">Ник или номер</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex-alignment cursor-pointer" href="#">
                                    <img src="${viberOrange}" alt="donate">
                                    <span class="text-base ml-4 whitespace-nowrap">Ник или номер</span>
                                </a>
                            </li>
                    </ul>
                    <search-area class="w-full"></search-area>
                </div>
               
                
                <div class="header-icons">
                    <a class="open-add-object flex-alignment w-max" href="#">
                        <img src="${addObject}" alt="icon">
                        <div class="text-base mx-3 whitespace-nowrap">Додати об'єкт</div>
                    </a>
                    <a class="flex-alignment ml-8 w-max" href="become-a-guide.html">
                        <img src="${becomeGuide}" alt="icon">
                        <div class="text-base mx-3 whitespace-nowrap">Стати гідом</div>
                    </a>
                </div>
               
            </div>
        </div>

        <div class="menu hidden">
            <div id="menu-items" class="flex flex-col justify-between h-full shadow-lg">
                <ul class="first-menu">
                    <li class="bg-gray-100 font-bold !py-4 lg:!hidden">Категорії<span class="text-gray-600 close-menu">&#x2715;</span></li>
                    <li id="resorts">Курорти<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                    <li id="accomodation">Готелі<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                    <li id="tours">Тури<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                    <li id="services">Активності<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                </ul>
                <div class="menu-link pb-16 lg:pb-8 pt-5 border-t-2 lg:border-t-0 flex flex-row justify-between items-end">
                    <div class="flex flex-col gap-5 pl-5 lg:pl-12">
                        <span class="font-bold">Опублікувати об'єкт</span>
                        <a href="tel:+380956480880" class="text-gray-500">+38(095) 648 0880</a>
                        <a href="https://t.me/infoGoToRest" class="text-gray-500">Telegram</a>
                        <a href="tel:+380956480880" class="text-gray-500">info@go-to.rest</a>
                    </div>
                    <div class="lg:hidden">
                        <button type="button" class="leng mr-5 bg-gray-200 px-4 py-2 cursor-pointer rounded" id="sidebar-leng">
                            <div class="uppercase text-sm mr-1 text-gray-400">ua</div>
                            <img src="${flagua}" alt="flag">
                        </button>
                        <ul id="sidebar-leng-menu" class="!hidden">
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
                        </ul>
                    </div>
                </div>
            </div>
            <ul id="resorts-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>Курорти</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">Закарпаття</li>
                <li>Ужгород</li>
                <li>Мукачево</li>
                <li>Міжгір'я</li>
                <li>Лумшори</li>
                <li>Косино</li>
                <li>Колочево</li>
                <li>Кваси</li>
                <li>Перечин</li>
                <li>Рахів</li>
                <li>Тячев</li>
                <li>Хуст</li>
            </ul>
            <ul id="accomodation-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>Готелі</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">Буковель житло</li>
                <li>Поляниця житло</li>
                <li>Яремче житло</li>
                <li>Міжгіря житло</li>
                <li>Мукачево житло</li>
                <li>Ужгород житло</li>
                <li>Котеджі</li>
                <li>Готелі</li>
                <li>Будиночки в горах</li>
                <li>Котедж в лісі</li>
                <li>Дитячі табори</li>
                <li>Житло з басейном</li>
                <li>Будиночки біля озера</li>
            </ul>
            <ul id="tours-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>Тури</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4" id="popular-dest">Популярні напрямки<span class="text-gray-400">></span></li>
                <li>SPA-тури</li>
                <li>Автобусні тури</li>
                <li>Автомобільна екскурсія</li>
                <li>Авторські тури</li>
                <li>Активні тури</li>
                <li>Велосипедна екскурсія</li>
                <li>Винний тур</li>
                <li>Гастрономічні тури</li>
                <li>Дитячі тури</li>
                <li>Екскурсії</li>
                <li>Індивідуальні тури</li>
                <li>Оздоровчі тури</li>
                <li>Піші прогулянки</li>
                <li>Термальні води</li>
                <li>Тури на двох</li>
                <li>Туристичні походи</li>
                <li>Всі екскурсії по Закарпаттю</li>
            </ul>
            <ul id="popular-dest-list" class="hidden sub-menu lg:!left-[600px] border-l-2 absolute bg-white w-full">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl hide"><</span>
                        <span>Популярні напрямки</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">Говерла</li>
                <li>Синевір</li>
                <li>Екскурсії в Ужгороді</li>
                <li>Екскурсії в Мукачево</li>
                <li>Екскурсії в Міжгір'ї</li>
            </ul>
            <ul id="services-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>Активності</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">Трансфер</li>
                <li>Велопрокат</li>
                <li>Прокат квадроциклів</li>
                <li>Прокат спорядження</li>
                <li>Знайти гіда</li>
            </ul>
        </div>
    </header>
    <add-object-form></add-object-form>
    `;
        const btn_menu = document.getElementById('btn_menu')
        const menu = document.querySelector('.menu')
        const menuItems = document.getElementById('menu-items');
        const menuItemsList = this.querySelectorAll('#menu-items li');
        const subMenus = this.querySelectorAll('.sub-menu');
        const addBtn = document.getElementById('add-btn');
        const addSection = document.getElementById('add-section');
        const contactBtn = document.getElementById('contact-btn');
        const contactSection = document.getElementById('contact-section');
        const leng = document.getElementById('leng');
        const lengMenu = document.getElementById('leng-menu');
        const currency = document.getElementById('currency');
        const currencyMenu = document.getElementById('currency-menu');
        const currencyData = document.getElementById('currency-data');
        const closeMenuBtns = document.querySelectorAll('.close-menu');
        const goBackButtons = document.querySelectorAll('.go-back');
        const hideMenu = document.querySelector('.hide');
        const desktopWidth = 1440;
        const sidebarLeng = document.getElementById('sidebar-leng');
        const sidebarLengMenu = document.getElementById('sidebar-leng-menu');

        sidebarLeng.addEventListener('click', () => {
            sidebarLengMenu.classList.toggle('!hidden');
        })

        document.querySelectorAll('#sidebar-leng-menu li').forEach(item => {
            item.addEventListener('click', () => {
                const selectedLanguage = item.querySelector('.leng').innerHTML;
                sidebarLeng.innerHTML = selectedLanguage;
                sidebarLengMenu.classList.add('!hidden');
            });
        });

        document.addEventListener('click', (e) => {
            if (!sidebarLeng.contains(e.target) && !sidebarLengMenu.contains(e.target)) {
                sidebarLengMenu.classList.add('!hidden');
            }
        });

        function isDesktop() {
            return window.innerWidth >= desktopWidth;
        }

        closeMenuBtns.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.add('hidden');
                menuItems.classList.remove('hidden');
            })
        })

        btn_menu.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            subMenus.forEach(menu => {
                menu.classList.add('hidden');
            });

            if (menu.classList.contains('hidden')) {
                menuItems.classList.remove('hidden');
             }
        })

        document.addEventListener('click', (e) => {
            if (e.target !== btn_menu && !btn_menu.contains(e.target) && !menu.contains(e.target))  {
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    menuItems.classList.remove('hidden');
                }
            }
        })

        menuItemsList.forEach(item => {
            item.addEventListener('click', () => {
                const itemId = item.id;
                
                subMenus.forEach(menu => {
                    menu.classList.add('hidden');
                });

                const subMenu = this.querySelector(`#${itemId}-list`);
                if (subMenu) {
                    if (isDesktop()) {
                        subMenu.classList.remove('hidden');
                    } else {
                        subMenu.classList.remove('hidden');
                    menuItems.classList.add('hidden');
                    }
                    
                }
            });
        });

        goBackButtons.forEach(goBack => {
            goBack.addEventListener('click', () => {
                const parentSubMenu = goBack.closest('.sub-menu');
                if (parentSubMenu) {
                    parentSubMenu.classList.add('hidden');
                    menuItems.classList.remove('hidden');
                }
            });
        });

        document.getElementById('popular-dest').addEventListener('click', () => {
            const subMenu = document.getElementById('popular-dest-list');
            if (subMenu) {
                if (isDesktop()) {
                    subMenu.classList.remove('hidden');
                } else {
                    subMenu.classList.remove('hidden');
                    menuItems.classList.add('hidden');
                }
            }
        });

        hideMenu.addEventListener('click', () => {
            document.getElementById('popular-dest-list').classList.add('hidden');
        })

        addBtn.addEventListener('click', () => {
            addSection.classList.toggle('!hidden');
        })

        document.addEventListener('click', (e) => {
            if (!addBtn.contains(e.target) && !addSection.contains(e.target)) {
                addSection.classList.add('!hidden');
            }
        });

        contactBtn.addEventListener('click', () => {
            contactSection.classList.toggle('!hidden');
        })

        document.addEventListener('click', (e) => {
            if (!contactBtn.contains(e.target) && !contactSection.contains(e.target)) {
                contactSection.classList.add('!hidden');
            }
        });

        currency.addEventListener('click', () => {
            currencyMenu.classList.toggle('!hidden');
        })

        leng.addEventListener('click', () => {
            lengMenu.classList.toggle('!hidden');
        })

        document.querySelectorAll('#leng-menu li').forEach(item => {
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

        document.querySelectorAll('#currency-menu li').forEach(item => {
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

        const addObjectBtns = document.getElementsByClassName('open-add-object');
        Array.from(addObjectBtns).forEach(btn => {
            btn.addEventListener('click', () => {
                const addObjectOverlay = document.getElementById('add-object-overlay');
                addObjectOverlay.classList.remove('hidden');
            })
        });
    }
}

customElements.define('header-component', Header);