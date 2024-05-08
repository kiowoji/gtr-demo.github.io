import closeIcon from '/src/public/images/icon-service/x.svg';
import checkIcon from '/src/public/images/tabler-icon-circle-check.jpg';
import avatar from '/src/public/images/ava.jpg';
import phoneIcon from '/src/public/images/icon-service/icon-phone.svg';


class BookingForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar">
                <div class="price hidden lg:block">від <span>300 ₴</span>/ ніч</div>
                <form id="booking-form" class="form-hotel" action="#">
                    <div class="name-form hidden lg:block">Бронювання</div>
                    <div class="relative">
                    <div class="flex flex-row">
                        <div class="item-form w-full">
                            <label for="check-in-date" class="text-left">Прибуття</label>
                            <input id="check-in-date" type="text" class="w-full !rounded-r-none !border-r-0 text-sm !pr-2" placeholder="01.01.2024" readonly>
                        </div>
                        <div class="item-form !rounded-l-none w-full">
                            <label for="check-out-date" class="text-right pr-2">Виїзд</label>
                            <input id="check-out-date" type="text" class="w-full !rounded-l-none" placeholder="02.01.2024" readonly>
                        </div>
                        
                    </div>
                    <div class="calendar !hidden" id="calendar">
                        <div class="flex flex-row  justify-between">
                        <div class="month" id="prevMonth">
                            <div class="flex flex-row items-center pb-5 justify-between lg:justify-start">
                                <button class="prevMonthBtn calendar-button mr-10" type="button"><</button>
                                <div class="month-name"></div>
                                <button class="nextMonthBtn calendar-button ml-10 block lg:hidden" type="button">></button>
                            </div>
                            <div class="days">
                                <div class="day">Вс</div>
                                <div class="day">Пн</div>
                                <div class="day">Вт</div>
                                <div class="day">Ср</div>
                                <div class="day">Чт</div>
                                <div class="day">Пт</div>
                                <div class="day">Сб</div>
                            </div>
                            <div class="date"></div>
                        </div>
                        <div class="month" id="nextMonth">
                            <div class="flex flex-row items-center pb-5 justify-end">
                                <div class="month-name"></div>
                                <button class="nextMonthBtn calendar-button ml-10" type="button">></button>
                            </div>
                            <div class="days">
                                <div class="day">Вс</div>
                                <div class="day">Пн</div>
                                <div class="day">Вт</div>
                                <div class="day">Ср</div>
                                <div class="day">Чт</div>
                                <div class="day">Пт</div>
                                <div class="day">Сб</div>
                            </div>
                            <div class="date"></div>
                        </div>
                        </div>
                        <div id="calendar-error" class="text-sm text-red-500 hidden !pt-4">Дата виїзду має бути більшою за дату заїзду.</div>
                    </div>
                    <span class="dates-error-message text-red-500 mt-4 hidden">Ці поля обов'язкові</span>
                    </div>
                    <div class="item-form relative">
                        <label for="guests">Гості</label>
                        <div id="guests" class="w-full bg-white p-4 rounded-md border-2 border-gray-300 cursor-pointer flex flex-row justify-between items-center">
                            <span id="total-guests">1 Гість</span>
                            <span class="text-2xl rotate-90" id="toggle-icon">></span>
                        </div>
                        <div id="guests-info" class="absolute bg-white rounded-md p-5 w-full lg:w-[260px] shadow-md hidden mt-[100px]">
                            <ul class="flex flex-col gap-6">
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Дорослі</span>
                                        <span class="text-gray-500">Від 13 років</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-adults">-</button>
                                        <span id="adults">1</span>
                                        <button  type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-adults">+</button>
                                    </div>
                                </li>
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Діти</span>
                                        <span class="text-gray-500">2 - 12 років</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-children">-</button>
                                        <span id="children">0</span>
                                        <button  type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-children">+</button>
                                    </div>
                                </li>
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Немовля</span>
                                        <span class="text-gray-500">Молодше 2</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-infants">-</button>
                                        <span id="infants">0</span>
                                        <button  type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-infants">+</button>
                                    </div>
                                </li>
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">Домашні улюбленці</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-pets">-</button>
                                        <span id="pets">0</span>
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-pets">+</button>
                                    </div>
                                </li>
                                <li class="text-sm text-gray-500">
                                    Помешкання розраховано максимум на 4 особи. Якщо ви плануєте привезти більше 2 улюбленців, повідомте про це власника.
                                </li>
                                <li class="text-right underline cursor-pointer" id="close-info">Закрити</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-form">
                        <label for="mphone">Ваш номер телефону</label>
                        <input id="mphone" type="tel" class="w-full" name="mphone" required placeholder="+380XXXXXXXXX">
                        <span class="error-message">Введіть дійсний номер телефону</span>
                    </div>
                    <button class="btn-add" type="submit">Бронювати</button>
                    <div id="booking-overlay">
                    <div id="success-popup">
                        <div class="flex justify-end absolute top-4 right-4 hidden">
                            <img src=${closeIcon} alt="close">
                        </div>
                        <img src=${checkIcon} alt="img" class="mx-auto w-20 h-20 mb-5">
                        <div class="text-3xl lg:text-5xl mb-7">Чудово!</div>
                        <p class="text-lg lg:text-xl text-gray-600 mb-10 px-8">Заявку на бронювання надіслано успішно. </br>Ми зателефонуємо Вам для уточнення деталей протягом 10 хвилин</p>
                        <button class="main-btn" id="close-popup">Закрити вікно</button>
                    </div>
                </div>
                </form>
                <div class="avtor hidden lg:flex">
                    <img src=${avatar} alt="avatar">
                    <div>
                        <div class="name-avtor">Вікторія</div>
                        <div class="status-avtor">Учасник з 2022</div>
                    </div>
                </div>
                <div class="contact hidden lg:block">
                    <div class="text-xl mb-2">Контакти</div>
                    <div class="contact-tel">
                        <img src=${phoneIcon} alt="icon">
                        <a href="tel:+380672170985" class="text-base ml-2">+38 (067) 217 09 85</a>
                    </div>
                </div>
            </div>
            
    `;
        document.querySelectorAll('.form-hotel').forEach((bookingFormElement) => {
            const bookingForm = bookingFormElement;
            const bookingOverlay = bookingForm.querySelector('#booking-overlay');
            const popup = bookingOverlay.querySelector('#close-popup');
            const checkInDateInput = bookingForm.querySelector('#check-in-date');
            const checkOutDateInput = bookingForm.querySelector('#check-out-date');
            const checkOutDateErrorMessage = checkOutDateInput.nextElementSibling;
            const guestsField = bookingForm.querySelector('#guests');
            const guestsInfo = bookingForm.querySelector('#guests-info');
            const closeInfo = bookingForm.querySelector('#close-info');
            const toggleIcon = bookingForm.querySelector('#toggle-icon');
            const calendar = bookingForm.querySelector('#calendar');
            const prevMonthElement = calendar.querySelector('#prevMonth');
            const nextMonthElement = calendar.querySelector('#nextMonth');
            const calendarErrorMessage = calendar.querySelector('#calendar-error');
            const datesError = bookingForm.querySelector('.dates-error-message');
           

            checkInDateInput.addEventListener('click', () => {
                if (checkInDateInput.value) {
                    checkInDateInput.value = '';
                    checkOutDateInput.value = '';
                    const selectedDates = document.querySelectorAll('.selected-date');
                    selectedDates.forEach((date) => {
                        date.classList.remove('selected-date');
                    });
                    const selectedRange = document.querySelectorAll('.date div');
                    selectedRange.forEach((range) => {
                        range.classList.remove('bg-orange-100');
                    })
                }
                calendar.classList.remove('!hidden');
                checkInDateInput.focus();
                checkInDateInput.classList.add('active-outline');
                checkOutDateInput.classList.remove('active-outline');
            });

            checkOutDateInput.addEventListener('click', () => {
                if (checkOutDateInput.value) {
                    checkOutDateInput.value = '';
                    checkInDateInput.value = '';
                    const selectedDates = document.querySelectorAll('.selected-date');
                    selectedDates.forEach((date) => {
                        date.classList.remove('selected-date');
                    });
                    const selectedRange = document.querySelectorAll('.date div');
                    selectedRange.forEach((range) => {
                        range.classList.remove('bg-orange-100');
                    })
                }
                calendar.classList.remove('!hidden');
                checkInDateInput.focus();
                checkInDateInput.classList.add('active-outline');
            });
            
            document.addEventListener('click', (event) => {
                if (!calendar.contains(event.target) && !checkInDateInput.contains(event.target) && !checkOutDateInput.contains(event.target)) {
                    calendar.classList.add('!hidden');
                }
            });

            guestsField.addEventListener('click', () => {
                guestsInfo.classList.remove('hidden');
                toggleIcon.classList.toggle('-rotate-90');
            })

            closeInfo.addEventListener('click', () => {
                guestsInfo.classList.add('hidden');
            })

            function showPopup() {
                bookingOverlay.style.display = 'block';
            }

            function handleFormSubmit(event) {
                event.preventDefault();

                if (!bookingForm.checkValidity()) {
                    return;
                }

                if (checkInDateInput.value === '' || checkOutDateInput === '') {
                    datesError.classList.remove('hidden');
                    return;
                }

                showPopup();
                const submitTimeout = setTimeout(() => {
                    bookingForm.submit();
                    console.log("submit");
                }, 30000);

                popup.addEventListener('click', () => {
                    bookingOverlay.style.display = 'none';
                    clearTimeout(submitTimeout);
                    bookingForm.submit();
                });
            }

            bookingForm.addEventListener('submit', handleFormSubmit);
            popup.addEventListener('click', () => {
                bookingOverlay.style.display = 'none';
            });

            const phoneInput = bookingForm.querySelector('#mphone');

            phoneInput.addEventListener('input', () => {
                const phoneNumber = phoneInput.value;
                const isValidPhoneNumber = /^[\d+()-]*$/.test(phoneNumber);
                if (!isValidPhoneNumber) {
                    phoneInput.setCustomValidity('Невірний формат номеру');
                } else {
                    phoneInput.setCustomValidity('');
                }
            });

            const requiredInputs = bookingForm.querySelectorAll('.form-hotel input[required]');
            requiredInputs.forEach((input) => {
                input.addEventListener('invalid', () => {
                    input.nextElementSibling.style.display = 'block';
                });

                if (input !== checkOutDateInput) {
                    input.addEventListener('blur', () => {
                        input.nextElementSibling.style.display = input.checkValidity() ? 'none' : 'block';
                    });
                }
            });

            //guests counter
            function initCounter(form) {
                let adults = 1;
                let children = 0;
                let infants = 0;
                let pets = 0;

                form.querySelector('#increase-adults').addEventListener('click', () => {
                    if (adults < 5) {
                        adults++;
                        updateCounter(form);
                    }
                });

                form.querySelector('#decrease-adults').addEventListener('click', () => {
                    if (adults > 0) {
                        adults--;
                        updateCounter(form);
                    }
                });

                form.querySelector('#increase-children').addEventListener('click', () => {
                    if (children < 5) {
                        children++;
                        updateCounter(form);
                    }
                });

                form.querySelector('#decrease-children').addEventListener('click', () => {
                    if (children > 0) {
                        children--;
                        updateCounter(form);
                    }
                });

                form.querySelector('#increase-infants').addEventListener('click', () => {
                    if (infants < 5) {
                        infants++;
                        updateCounter(form);
                    }
                });

                form.querySelector('#decrease-infants').addEventListener('click', () => {
                    if (infants > 0) {
                        infants--;
                        updateCounter(form);
                    }
                });

                form.querySelector('#increase-pets').addEventListener('click', () => {
                    if (pets < 5) {
                        pets++;
                        updateCounter(form);
                    }
                });

                form.querySelector('#decrease-pets').addEventListener('click', () => {
                    if (pets > 0) {
                        pets--;
                        updateCounter(form);
                    }
                });

                function updateCounter(form) {
                    form.querySelector('#adults').innerText = adults;
                    form.querySelector('#children').innerText = children;
                    form.querySelector('#infants').innerText = infants;
                    form.querySelector('#pets').innerText = pets;

                    let totalGuests = adults + children;
                    let totalGuestsText = '';

                    if (totalGuests > 1) {
                        totalGuestsText += `${totalGuests} Гостей`;
                    } else if (totalGuests === 1) {
                        totalGuestsText += `${totalGuests} Гість`;
                    }
                    if (infants > 1) {
                        totalGuestsText += `, ${infants} Немовлят`;
                    } else if (infants === 1) {
                        totalGuestsText += `, ${infants} Немовля`;
                    }
                    if (pets > 1) {
                        totalGuestsText += `, ${pets} Домашніх улюбленців`;
                    } else if (pets === 1) {
                        totalGuestsText += `, ${pets} Домашній улюбленець`;
                    }

                    form.querySelector('#total-guests').innerText = totalGuestsText;
                }
            }

            initCounter(bookingForm);
            
            //calendar

            const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
            let currentMonth = new Date().getMonth();
            let currentYear = new Date().getFullYear();
            
            let prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
            let prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

            renderMonth(prevMonthElement, prevMonthIndex, prevYear);
            renderMonth(nextMonthElement, currentMonth, currentYear);

            let mouseHoveredDate = null;

            function renderMonth(container, month, year) {
                const monthName = months[month];
                const totalDays = new Date(year, month + 1, 0).getDate();
                const firstDayIndex = new Date(year, month, 1).getDay();

                container.querySelector('.month-name').textContent = `${monthName} ${year}`;

                const dateContainer = container.querySelector('.date');
                dateContainer.innerHTML = '';

                for (let i = 0; i < firstDayIndex; i++) {
                    const dateDiv = document.createElement('div');
                    dateDiv.textContent = '';
                    dateContainer.appendChild(dateDiv);
                }

                for (let i = 1; i <= totalDays; i++) {
                    const dateDiv = document.createElement('div');
                    dateDiv.textContent = i;
                    dateContainer.appendChild(dateDiv);

                    dateDiv.addEventListener('click', (event) => {
                        const clickedDate = new Date(year, month, i);
                        const yearString = clickedDate.getFullYear().toString();
                        const monthString = (clickedDate.getMonth() + 1).toString().padStart(2, '0');
                        const dateString = clickedDate.getDate().toString().padStart(2, '0');
                        const formattedDate = `${dateString}.${monthString}.${yearString}`;

                        if (!checkInDateInput.value) {
                            checkInDateInput.value = formattedDate;
                            dateDiv.classList.add('selected-date');
                            checkOutDateInput.focus();
                            checkInDateInput.classList.remove('active-outline');
                            checkOutDateInput.classList.add('active-outline');
                        } else if (!checkOutDateInput.value) {
                            const checkOutDate = new Date(year, month, i);
                            const checkInDate = new Date(checkInDateInput.value.split('.').reverse().join('-'));

                            if (checkOutDate > checkInDate) {
                                checkOutDateInput.value = formattedDate;
                                dateDiv.classList.add('selected-date');
                                calendarErrorMessage.classList.add('hidden');
                                calendar.classList.add('!hidden');
                                checkOutDateInput.classList.remove('active-outline');
                            } else {
                                calendarErrorMessage.classList.remove('hidden');
                            }
                        }
                    });
                }
            }

            document.querySelectorAll('.calendar .date').forEach(dateContainer => {
                dateContainer.addEventListener('mouseover', (event) => {
                    const checkInDateInput = document.querySelector('#check-in-date');
                    const checkInDate = checkInDateInput.value;
                    const hoveredDateDiv = event.target;
                    const year = parseInt(hoveredDateDiv.closest('.month').querySelector('.month-name').textContent.split(' ')[1]);
                    const monthIndex = months.indexOf(hoveredDateDiv.closest('.month').querySelector('.month-name').textContent.split(' ')[0]);
                    const day = parseInt(hoveredDateDiv.textContent);
                    const hoveredDate = new Date(year, monthIndex, day);
                    highlightDateRange(checkInDate, hoveredDate);
                });
            });

            function highlightDateRange(checkinDate, hoverDate) {
                const checkin = new Date(checkinDate.split('.').reverse().join('-'));
                const dateContainers = document.querySelectorAll('.calendar .date');
                dateContainers.forEach(dateContainer => {
                    dateContainer.childNodes.forEach(dateElement => {
                        const year = parseInt(dateContainer.closest('.month').querySelector('.month-name').textContent.split(' ')[1]);
                        const monthIndex = months.indexOf(dateContainer.closest('.month').querySelector('.month-name').textContent.split(' ')[0]);
                        const day = parseInt(dateElement.textContent);
                        const currentDate = new Date(year, monthIndex, day);
                        if (checkin <= currentDate && currentDate <= hoverDate) {
                            dateElement.classList.add('bg-orange-100');
                        } else {
                            dateElement.classList.remove('bg-orange-100');
                        }
                    });
                });
            }

            const prevBtn = bookingForm.querySelector('.prevMonthBtn');
            const nextBtns = bookingForm.querySelectorAll('.nextMonthBtn');

            prevBtn.addEventListener('click', () => {
                if (currentMonth !== new Date().getMonth()) {
                    currentMonth--;
                    if (currentMonth < 0) {
                        currentMonth = 11;
                        currentYear--;
                    }
                }

                prevBtn.disabled = currentMonth === new Date().getMonth();

                prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
                prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
                renderMonth(prevMonthElement, prevMonthIndex, prevYear);
                renderMonth(nextMonthElement, currentMonth, currentYear);
            });

            nextBtns.forEach(nextBtn => {
                nextBtn.addEventListener('click', () => {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
                prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
                renderMonth(prevMonthElement, prevMonthIndex, prevYear);
                renderMonth(nextMonthElement, currentMonth, currentYear);
                prevBtn.disabled = false;
            });
            })          
        });
    }
}

customElements.define('booking-form', BookingForm);