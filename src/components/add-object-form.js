class addObjectForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="slider-overlay hidden" id="add-object-overlay">
            <div id="add-hotel-popup" class="add-hotel-popup">
                <p class="text-right cursor-pointer text-xl text-orange-700" id="close-form">&#x2715;</p>
                <h1 class="text-xl md:text-xl lg:text-3xl font-bold text-center mb-8">Додати об'єкт до каталогу</h1>
                <form action="#" id="addHotelForm">

                    <div class="tab">
                            <div class="add-form-field">
                            <label for="name"><span class="required">*</span>Ваше ім’я</label>
                            <input id="name" type="text" minlength="1" max="30" required></input>
                            <span class="error-message">Це поле обов'язкове</span>
                        </div>
                        <div class="add-form-field">
                            <label for="phone"><span class="required">*</span>Номер телефону</label>
                            <input id="phone" type="text" placeholder="+380XXXXXXXXX" required></input>
                            <span class="error-message">Це поле обов'язкове</span>
                        </div>
                        <div class="add-form-field">
                            <label for="hotel-name"><span class="required">*</span>Назва об'єкту</label>
                            <input id="hotel-name" type="text" minlength="1" maxlength="40" required></input>
                            <span class="error-message">Це поле обов'язкове</span>
                        </div>
                        <div class="add-form-field">
                            <label for="address"><span class="required">*</span>Адреса</label>
                            <input id="address" type="text" minlength="1" maxlength="100" required></input>
                            <span class="error-message">Це поле обов'язкове</span>
                        </div>
                    </div>

                    <div class="tab">
                        <div class="flex flex-col">
                            <p class="pb-8 text-lg font-bold">Вкажіть тип вашого об'єкту:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 ">
                                <div>
                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="hotel" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Готель</span>
                                    </label>

                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="sadiba" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Садиба</span>
                                    </label>

                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="kompleks" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Туристичний комплекс</span>
                                    </label>
                                </div>
                                <div>
                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="sanatoriy" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Санаторій</span>
                                    </label>

                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="hostel" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Хостел</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div id="hostel" class="flex flex-col pb-7 slot">
                            <h3 class="details">Вкажіть детальну інформацію для розміщення:</h3>
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-row justify-between items-center">
                                    <label>Кількість кімнат</label>
                                    <input class="w-20 h-10" type="number" id="hostel-rooms-quantity" placeholder="0" min="1">
                                    <span class="error-message">Це поле обов'язкове</span>
                                </div>
                                <div class="flex flex-row justify-between items-center">
                                    <label>Максимальна кількість людей в кімнаті</label>
                                    <input class="w-20 h-10" type="number" id="hostel-people-quantity" placeholder="0" min="1">
                                    <span class="error-message">Це поле обов'язкове</span>
                                </div>
                            </div>
                        </div>
                        <div id="sanatoriy" class="flex flex-col pb-7 slot">
                            <h3 class="details">Вкажіть детальну інформацію для розміщення:</h3>
                            <div class="flex flex-row justify-between item-center">
                                <h4 class="text-xl text-orange-400  text-center">Розділ в розробці</h4>
                            </div>
                        </div>
                        <div id="kompleks" class="flex flex-col pb-7 slot">
                            <h3 class="details">Вкажіть детальну інформацію для розміщення:</h3>
                            <div class="flex flex-row justify-between item-center">
                                <h4 class="text-xl text-orange-400 text-center">Розділ в розробці</h4>
                            </div>
                        </div>
                        <div id="sadiba" class="flex flex-col pb-7 slot">
                            <h3 class="details">Вкажіть детальну інформацію для розміщення</h3>
                            <div class="flex flex-col justify-between item-center">
                                <div class="flex justify-between mb-5">
                                    <label class="flex items-center">
                                        <input type="radio" name="sadiba_book" value="fully" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span class="ml-2">Здається повністю</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="sadiba_book" value="part" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span class="ml-2">Здається частково</span>
                                    </label>
                                </div>
                                <div class="flex flex-col gap-3">
                                    <div class="flex flex-row justify-between items-center">
                                        <label>Кількість кімнат</label>
                                        <input class="w-20 h-10" type="number" id="sadiba-rooms-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center">
                                        <label>Максимальна кількість людей для проживання</label>
                                        <input class="w-20 h-10" type="number" id="sadiba-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hotel" class="flex flex-col pb-7 slot">
                            <h3 class="details">Вкажіть детальну інформацію для розміщення:</h3>
                            <div class="flex flex-col justify-center item-center">
                                <div class="flex flex-col md:flex-row lg:flex-row sm:gap-4 justify-between justify-items-center mb-5">
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" id="lux" class="form-checkbox h-5 w-5 text-orange-700 ">
                                        <span>Номер классу "Люкс"</span>
                                    </label>
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" id="pivlux" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Номер класу "Пів-Люкс"</span>
                                    </label>
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" id="standart"class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>Номер класу "Стандарт"</span>
                                    </label>
                                </div>
                                <div id="active_lux" class="flex flex-col active">
                                    <div class="flex flex-row justify-between items-center mb-3">
                                        <label>Вкажіть кількість номерів класу 'Люкс'</label>
                                        <input class="w-20 h-8" type="number" id="lux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mb-6">
                                        <label>Вкажіть вместимість номеру</label>
                                        <input class="w-20 h-8" type="number" id="lux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <label>Надайте опис номеру 'Люкс':</label>
                                        <textarea name="about-lux" rows="3" class="p-1" resize-none></textarea>
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <!-- <div class="flex flex-row mt-4">
                                        <input type="file" id="file" class="hidden" multiple="true" accept=".png,.jpg,.jpeg" />
                                        <div class="flex flex-col">
                                            <div class="flex flex-row w-max">
                                                <div class="btn_add">Додати фото</div>
                                            </div>
                                            <div id="preview" class="preview"></div>
                                        </div>
                                    </div> -->
                                </div>
                                <div id="active_pivlux" class="flex flex-col active mt-5 pt-5 border-t-2 border-gray-300">
                                    <div class="flex flex-row justify-between items-center mb-3">
                                        <label>Вкажіть кількість номерів класу 'Пів-Люкс'</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mb-6">
                                        <label>Вкажіть вместимість номеру</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <label>Надайте опис номеру 'Пів-Люкс':</label>
                                        <textarea name="about-lux" rows="3" class="p-1" resize-none></textarea>
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <!-- <div class="flex flex-row mt-4">
                                        <input type="file" id="file" class="hidden" multiple="true" accept=".png,.jpg,.jpeg" />
                                        <div class="flex flex-col">
                                            <div class="flex flex-row w-max">
                                                <div class="btn_add">Додати фото</div>
                                            </div>
                                            <div id="preview" class="preview"></div>
                                        </div>
                                    </div> -->
                                </div>
                                <div id="active_standart" class="flex flex-col active mt-5 pt-5 border-t-2 border-gray-300">
                                    <div class="flex flex-row justify-between items-center mb-3">
                                        <label>Вкажіть кількість номерів класу 'Стандарт'</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mb-6">
                                        <label>Вкажіть вместимість номеру</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <label>Надайте опис номеру 'Стандарт':</label>
                                        <textarea name="about-lux" rows="3" class="p-1" resize-none></textarea>
                                        <span class="error-message">Це поле обов'язкове</span>
                                    </div>
                                    <!-- <div class="flex flex-row mt-4">
                                        <input type="file" id="file" class="hidden" multiple="true" accept=".png,.jpg,.jpeg" />
                                        <div class="flex flex-col">
                                            <div class="flex flex-row w-max">
                                                <div class="btn_add">Додати фото</div>
                                            </div>
                                            <div id="preview" class="preview"></div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>

                   <div class="tab">
                        <div class="flex flex-col mb-8">
                            <div class="flex flex-col">
                                <label class="font-bold text-lg mb-5">Надайте загальний опис об'єкта:</label>
                               <textarea id="object-desc" rows="5" required></textarea>
                               <span class="error-message">Це поле обов'язкове</span>
                            </div>
                        </div>
                        <div class="font-bold text-lg mb-6">Оберіть доступні послуги:</div>
                        <div class="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8 flex-wrap">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">Послуга №1</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">Послуга №2</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">Послуга №3</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">Послуга №4</span>
                            </label>
                        </div>
                        <div class="flex-col justify-center pt-7 pb-4">
                            <div class="w-full md:w-1/2 lg:w-1/2 mx-auto text-base text-gray-400 text-center">Відправляючи анкету, Ви приймаєте умови <a href="#" class=" text-black">угоди користувача</a></div>
                        </div>
                   </div>

                    <div class="flex items-center justify-between flex-col md:flex-row lg:flex-row">
                        <div class="flex gap-2 mt-3 md:mt-5 lg:mt-8">
                            <span class="step"></span>
                            <span class="step"></span>
                            <span class="step"></span>
                        </div>
                        <div style="overflow:auto;">
                            <button type="button" id="prevBtn">Назад</button>
                            <button type="button" id="nextBtn">Далі</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        `;

        const closeForm = document.getElementById('close-form');
        const sliderOverlay = document.getElementById("add-object-overlay");
        const hotelPopup = document.getElementById('add-hotel-popup');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const phoneInput = document.getElementById('phone');
        const phoneErrorMessage = document.querySelector('#phone + .error-message');

        //step-by-step form functionality
        let currentTab = 0; 
        showTab(currentTab);

        function showTab(n) {
        let x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Додати";
        } else {
            document.getElementById("nextBtn").innerHTML = "Далі";
        }
        fixStepIndicator(n)
        }
      
        function nextPrev(n) {
        let x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
            document.getElementById("addHotelForm").submit();
            sliderOverlay.classList.add('hidden');
            const checkOverlayHidden = setInterval(() => {
            if (sliderOverlay.classList.contains('hidden')) {
                clearInterval(checkOverlayHidden);
                alert('Форма була успішно надіслана!');
            }
            }, 100);
            return false;
        }
        showTab(currentTab);
        }

        prevBtn.addEventListener('click', () => {
        nextPrev(-1);
        });

        nextBtn.addEventListener('click', () => {
        nextPrev(1);
        });

        phoneInput.addEventListener('input', () => {
            const phoneNumber = phoneInput.value;
            const isValidPhoneNumber = /^[\d+()-]*$/.test(phoneNumber);
            if (!isValidPhoneNumber) {
                phoneInput.setCustomValidity('Невірний формат номеру');
                phoneErrorMessage.textContent="Введіть дійсний номер телефону";
                phoneErrorMessage.style.display = "block";
            } else {
                phoneInput.setCustomValidity('');
                phoneErrorMessage.style.display = "none";
            }
        });

        function validateForm() {
            let x, y, i, valid = true;
            x = document.getElementsByClassName("tab");
            if (currentTab >= x.length || currentTab < 0) {
                return false;
            }
            y = x[currentTab].querySelectorAll("input, textarea");
            
            let errorMessages = x[currentTab].querySelectorAll(".error-message");
            errorMessages.forEach((errorMsg) => {
                errorMsg.style.display = "none";
            });

            const phoneNumber = phoneInput.value;
            const isValidPhoneNumber = /^[\d+()-]*$/.test(phoneNumber);
            if (!isValidPhoneNumber) {
                phoneInput.setCustomValidity('Невірний формат номеру');
                phoneErrorMessage.textContent="Введіть дійсний номер телефону";
                phoneErrorMessage.style.display = "block";
                return;
            } 
            
            for (i = 0; i < y.length; i++) {
                if (y[i].hasAttribute("required")) {
                    if (y[i].type === "radio") {
                        let radioGroup = document.getElementsByName(y[i].name);
                        let radioChecked = false;
                        for (let j = 0; j < radioGroup.length; j++) {
                            if (radioGroup[j].checked) {
                                radioChecked = true;
                                break;
                            }
                        }
                        if (!radioChecked) {
                            let errorMessage = y[i].parentNode.querySelector(".error-message");
                            errorMessage.style.display = "block";
                            valid = false;
                        }
                    } else if (y[i].type === "checkbox") {
                        if (!y[i].checked) {
                            let errorMessage = y[i].parentNode.querySelector(".error-message");
                            errorMessage.style.display = "block";
                            valid = false;
                        }
                    } else {
                        if (y[i].value == "") {
                            y[i].classList.add("invalid");
                            let errorMessage = y[i].nextElementSibling;
                            errorMessage.style.display = "block";
                            valid = false;
                        } else {
                            y[i].classList.remove("invalid");
                        }
                    }
                }
            }
            
            if (valid) {
                document.getElementsByClassName("step")[currentTab].classList.add("finish");
            }
            
            return valid;
        }


        closeForm.addEventListener('click', () => {
            sliderOverlay.classList.add('hidden');
        })

        function fixStepIndicator(n) {
        let i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        x[n].className += " active";
        }

        sliderOverlay.addEventListener('click', (e) => {
             if (!hotelPopup.contains(e.target)) {
             sliderOverlay.classList.add('hidden');
            }
        })

        //displaying the selected option

        const id_cheked = document.getElementsByName('estate');

        for (let i = 0; i< id_cheked.length; i++) {
            id_cheked[i].onchange = active_slot
        }

        function active_slot(){
            let slot = document.getElementById(this.value);
            slot.classList.remove("slot");
            for (let i = 0; i< id_cheked.length; i++) {
                if(id_cheked[i].value != this.value){
                    let remove_slot = document.getElementById(id_cheked[i].value);
                    remove_slot.classList.add("slot");

                }
            }
        }

        const activeted_lux =document.getElementById('active_lux');
        const id_lux = document.getElementById('lux');
        id_lux.addEventListener("change", function() {
            if(id_lux.checked){
                activeted_lux.classList.remove("active");
            }else{
                activeted_lux.classList.add("active");
            }
        })

        const active_pivlux =document.getElementById('active_pivlux');
        const pivlux = document.getElementById('pivlux');
        pivlux.addEventListener("change", function() {
            if(pivlux.checked){
                active_pivlux.classList.remove("active");
            }else{
                active_pivlux.classList.add("active");
            }
        })

        const active_standart =document.getElementById('active_standart');
        const standart = document.getElementById('standart');
        standart.addEventListener("change", function() {
            if(standart.checked){
                active_standart.classList.remove("active");
            }else{
                active_standart.classList.add("active");
            }
        })

        const inp = document.querySelector('#file');
        const img = document.getElementById('preview');
        const btn_add = document.querySelector('.btn_add');
    }
}

customElements.define('add-object-form', addObjectForm);