import telegramIcon from '/src/public/images/telegram2.svg';
import facebookIcon from '/src/public/images/facebook.svg';
import googleIcon from '/src/public/images/google.svg';
import emailIcon from '/src/public/images/email.svg';

class AuthForm extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <div id="auth-overlay" class="auth-overlay hidden">
            <div id="auth-popup">
                <div id="main-window" class="">
                    <div class="flex sticky top-0 bg-white z-[9999] text-base md:text-xl lg:text-xl py-4 md:py-8 lg:py-8 border-b-2 border-gray-section font-semibold mb-6 lg:mb-10 justify-center rounded-2xl">
                        <span id="close-auth" class="cursor-pointer absolute left-[20px] md:left-[50px] lg:left-[50px]">&#x2715;</span>
                        <span>Увійдіть або зареєструйтесь</span>
                    </div>
                    <div class="form-wrapper overflow-y-auto max-h-[78vh] px-4 md:px-10 lg:px-10 pb-10">
                    <h2 class="font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 lg:mb-8">Ласкаво просимо до Go To Rest</h2>
                    <form action="#" class="pb-8 border-b-2 relative" id="auth-phone-form">
                        <label for="auth-phone" class="text-base md:text-xl lg:text-xl">Введіть ваш номер телефону</label>
                        <input id="auth-phone" type="tel" class="w-full border-[1px] border-[#6a6a6a] auth-fields mt-5 mb-5 text-base md:text-xl lg:text-xl focus:outline-orange-500" name="phone" required placeholder="Номер телефону">
                        <span class="auth-error-message pt-0 pb-5 hidden text-red-500">Введіть дійсний номер телефону</span>
                        <button type="submit" class="bg-main-orange hover:bg-hover-orange auth-fields text-white w-full text-base md:text-xl lg:text-xl h-[44px] md:h-[68px] lg:h-[68px]">Продовжити</button>
                    </form> 
                    <form action="#" class="pb-8 border-b-2 relative hidden" id="auth-email-form">
                        <label for="auth-email" class="text-base md:text-xl lg:text-xl">Введіть вашу електронну пошту</label>
                        <input id="auth-email" type="email" class="w-full border-[1px] border-[#6a6a6a] auth-fields mt-5 mb-5 text-base md:text-xl lg:text-xl focus:outline-orange-500" name="email" required placeholder="Електронна пошта">
                        <span class="auth-error-message pt-0 pb-5 hidden text-red-500">Введіть дійсну адресу електронної пошти</span>
                        <button id="submit-email" type="submit" class="bg-main-orange hover:bg-hover-orange auth-fields text-white w-full text-base md:text-xl lg:text-xl h-[44px] md:h-[68px] lg:h-[68px]">Продовжити</button>
                        <div class="loader">
                            <span class="dot" style="--i:3"></span>
                            <span class="dot" style="--i:2"></span>
                            <span class="dot" style="--i:1"></span>
                            <span class="dot" style="--i:0"></span>
                        </div>
                    </form> 
                    <div class="relative">
                        <span class="absolute top-[-55px] left-[45%] md:left-[48%] lg:left-[48%] p-2 bg-white">або</span>
                        <a href="https://t.me/infoGoToRest" class="flex flex-row auth-fields border-2 border-black items-center justify-center gap-5 mt-8 cursor-pointer hover:bg-zinc-100">
                            <img src=${telegramIcon} alt="telegram" class="auth-icons">
                            <span class="text-base md:text-xl lg:text-xl grow text-center">Продовжити через Telegram</span>
                        </a>
                        <a href="#" class="flex flex-row auth-fields border-2 border-black items-center justify-center gap-5 mt-5 cursor-pointer hover:bg-zinc-100">
                            <img src=${facebookIcon} alt="facebook" class="auth-icons">
                            <span class="text-base md:text-xl lg:text-xl grow text-center">Продовжити через Facebook</span>
                        </a>
                        <a href="#" class="flex flex-row auth-fields border-2 border-black items-center justify-center gap-5 mt-5 cursor-pointer hover:bg-zinc-100">
                            <img src=${googleIcon} alt="google" class="auth-icons">
                            <span class="text-base md:text-xl lg:text-xl grow text-center">Продовжити через Google</span>
                        </a>
                        <a href="#" class="flex flex-row auth-fields border-2 border-black items-center justify-center gap-5 mt-5 cursor-pointer hover:bg-zinc-100 mb-5" id="continue-by-email">
                            <img src=${emailIcon} alt="email" class="auth-icons">
                            <span class="text-base md:text-xl lg:text-xl grow text-center">Продовжити через пошту</span>
                        </a>
                    </div>
                    </div>  
                </div>

                <div id="signin-email-window" class="hidden">
                    <div class="flex items-center sticky top-0 bg-white z-[9999] text-base md:text-xl lg:text-xl py-4 md:py-8 lg:py-8 border-b-2 border-gray-section font-semibold mb-4 justify-center px-4 md:px-10 lg:px-10 rounded-2xl">
                        <span id="go-back-signin" class="cursor-pointer absolute left-[20px] md:left-[50px] lg:left-[40px] text-3xl font-medium"><</span>
                        <span>Завершіть реєстрацію</span>
                    </div>
                    <div class="form-wrapper overflow-y-auto max-h-[78vh] px-4 md:px-10 lg:px-10">
                        <form action="#" id="signin-form" class="flex flex-col">
                            <label for="signin-first-name">Oфіційне ім'я</label>
                            <input type="text" name="signin-first-name" id="signin-first-name" required placeholder="Ваше ім'я" class="w-full">
                            <span class="error-message pb-3">Це поле обов'язкове</span>
                            <input type="text" name="signin-second-name" id="signin-second-name" required placeholder="Ваше прізвище" class="mt-1 w-full">
                            <span class="error-message pb-3">Це поле обов'язкове</span>
                            <p class="sign-in-info">Надані дані мають відповідати вашому посвідченню особи державного зразка.</p>
                            <label for="signin-date">Дата народження</label>
                            <input type="date" name="signin-date" id="signin-date" required class="w-full">
                            <span class="error-message pb-3">Це поле обов'язкове</span>
                            <p class="sign-in-info">Для реєстрації вам має бути щонайменше 18 років. Інформація щодо вашого дня народження не буде доступна іншим користувачам Go To Rest.</p>
                            <label for="signin-email">Електронна пошта</label>
                            <input type="email" name="signin-email" id="signin-email" placeholder="Електронна пошта" required class="w-full"> 
                            <span class="error-message pb-3">Введіть коректну електронну пошту</span>
                            <label for="signin-phone">Номер телефону</label>
                            <input type="tel" name="signin-phone" id="signin-phone" placeholder="Номер телефону" class="w-full">
                            <span class="error-message pb-3">Введіть коректний номер телефону</span>
                            <label for="signin-password">Пароль</label>
                            <input type="password" name="signin-password" id="signin-password" placeholder="Пароль" required class="w-full">
                            <span class="error-message pb-3">Це поле обов'язкове</span>
                            <div class="mt-3 flex gap-3">
                                <input type="checkbox" name="password-checkbox" id="password-checkbox" class="w-6 h-6 accent-main-orange">
                                <span class="text-base text-secondary">Показати пароль</span>
                            </div>
                            <p class="mt-5 text-base text-secondary">Натискаючи "Погодитися і продовжити", я погоджуюсь з Умовами надання послуг Go To Rest, Умовами здійснення платежів та Політикою недискримінації, а також визнаю Політику конфіденційності.</p>
                            <button type="submit" class="h-[44px] md:h-[68px] lg:h-[68px]">Погодитися і продовжити</button>
                        </form>
                        <p class="text-base text-secondary mt-5">Go To Rest надсилатиме вам пропозиції для учасників, ідеї для натхнення, маркетингові електронні листи та push-сповіщення. Ви можете в будь-який час відмовитися від отримання цих повідомлень у налаштуваннях акаунта або безпосередньо в маркетинговому сповіщенні.</p>
                        <div class="mt-5 flex gap-3 mb-10">
                            <input type="checkbox" name="mailings-checkbox" id="mailings-checkbox" class="w-6 h-6 accent-main-orange">
                            <span class="text-base text-secondary w-fit">Я не хочу отримувати маркетингові повідомлення від Go To Rest.</span>
                        </div>
                    </div>
                </div>

                <div id="login-email-window" class="hidden">
                    <div class="flex items-center sticky top-0 bg-white z-[9999] text-base md:text-xl lg:text-xl py-4 md:py-8 lg:py-8 border-b-2 border-gray-section font-semibold mb-4 justify-center px-4 md:px-10 lg:px-10 rounded-2xl">
                        <span id="go-back-login" class="cursor-pointer absolute left-[20px] md:left-[50px] lg:left-[40px] text-3xl font-medium"><</span>
                        <span>Увійдіть у систему</span>
                    </div>
                    <div class="form-wrapper overflow-y-auto max-h-[78vh] px-4 md:px-10 lg:px-10">
                        <form action="#" id="signin-form" class="flex flex-col">
                            <label for="login-email">Електронна пошта</label>
                            <input type="email" name="login-email" id="login-email" placeholder="Електронна пошта" required class="w-full">
                            <span class="error-message">Введіть коректну електронну пошту</span>
                            <label for="login-password">Пароль</label>
                            <input type="password" name="login-password" id="login-password" placeholder="Пароль" required class="w-full">
                            <span class="error-message pb-3">Це поле обов'язкове</span>
                            <div class="mt-3 flex gap-3">
                                <input type="checkbox" name="password-checkbox" id="login-password-checkbox" class="w-6 h-6 accent-main-orange">
                                <span class="text-base text-secondary">Показати пароль</span>
                            </div>
                            <button type="submit" class="h-[44px] md:h-[68px] lg:h-[68px] mb-10">Увійти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
        
    document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("auth-overlay");
    const authPhoneForm = overlay.querySelector('#auth-phone-form');
    const authEmailForm = overlay.querySelector('#auth-email-form');
    const closeSignin = document.getElementById("close-auth");
    const likeButtons = document.querySelectorAll(".like-icon");
    const phoneInput = document.getElementById("auth-phone");
    const emailInput = document.getElementById('auth-email');
    const phoneErrorMessage = authPhoneForm.querySelector(".auth-error-message");
    const emailErrorMessage = authEmailForm.querySelector(".auth-error-message");
    const continueByEmail = overlay.querySelector('#continue-by-email');
    const mainWindow = overlay.querySelector('#main-window');
    const signinEmailWindow = overlay.querySelector('#signin-email-window');
    const signinEmail = overlay.querySelector("#signin-email");
    const goBack = overlay.querySelector('#go-back-signin');
    const signInForm = overlay.querySelector('#signin-form');
    const requiredInputs = signInForm.querySelectorAll('input[required]');
    const birthdateInput = signInForm.querySelector('#signin-date');
    const signinPhoneInput = signInForm.querySelector('#signin-phone');
    const signinPassword = signInForm.querySelector('#signin-password');
    const loader = overlay.querySelector('.loader');
    const submitEmailBtn = overlay.querySelector('#submit-email');
    const passwordCheckbox = overlay.querySelector('#password-checkbox');
    const loginWindow = overlay.querySelector('#login-email-window');
    const loginForm = loginWindow.querySelector('form');
    const loginRequiredInputs = loginForm.querySelectorAll('input[required]');
    const loginPassword = loginForm.querySelector('#login-password');
    const loginCheckbox = loginForm.querySelector('#login-password-checkbox');
    const loginEmail = loginForm.querySelector('#login-email');

    let formSubmissionAllowed = false;
    let phoneFormSubmissionAllowed = false;

    function closeOverlay() {
        overlay.classList.add("hidden");
        authPhoneForm.reset();
        authEmailForm.reset();
        authPhoneForm.classList.remove('hidden');
        authEmailForm.classList.add('hidden');
        continueByEmail.classList.remove('hidden');
    }

    goBack.addEventListener('click', () => {
        mainWindow.classList.remove('hidden');
        signinEmailWindow.classList.add('hidden');
    })

    closeSignin.addEventListener("click", function() {
        closeOverlay();
    });

    window.addEventListener("click", function(event) {
        if (event.target === overlay) {
            closeOverlay();
        }
    });

    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener("click", function(event) {
        overlay.classList.remove("hidden");
        event.stopPropagation();
    });
    })
    
    authPhoneForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!authPhoneForm.checkValidity() || !phoneFormSubmissionAllowed) {
            return;
        } else {
            // authPhoneForm.submit();
            window.location.href = "https://t.me/infoGoToRest";
            authPhoneForm.reset();
        }
    });

    phoneInput.addEventListener('input', function (event) {
        const inputValue = phoneInput.value.trim();

        if (!/^[0-9+\-()]{8,15}$/.test(inputValue)) {
            phoneErrorMessage.style.display = 'block';
            phoneFormSubmissionAllowed = false;
        } else {
            phoneErrorMessage.style.display = 'none';
            phoneFormSubmissionAllowed = true;
        }
    });

    phoneInput.addEventListener('invalid', () => {
        phoneErrorMessage.style.display = 'block';
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.checkValidity()) {
            emailErrorMessage.style.display = 'none';
        } else {
            emailErrorMessage.style.display = 'block';
        }
    });

    emailInput.addEventListener('invalid', () => {
        emailErrorMessage.style.display = 'block';
    })

    continueByEmail.addEventListener('click',() =>{
        authPhoneForm.classList.add('hidden');
        authEmailForm.classList.remove('hidden');
        continueByEmail.classList.add('hidden');
    })

    authEmailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!authEmailForm.checkValidity()) {
            return;
        } else {
            // authPhoneForm.submit();

            loader.style.display = 'block';
            submitEmailBtn.classList.add('loading-btn');
            submitEmailBtn.textContent = " ";

            setTimeout(function() {
                const usersEmail = emailInput.value;
                signinEmail.value = usersEmail;
                loginEmail.value = usersEmail;
                mainWindow.classList.add('hidden');
                signinEmailWindow.classList.remove('hidden');
                
                loader.style.display = 'none';
                submitEmailBtn.classList.remove('loading-btn');
                submitEmailBtn.textContent = "Продовжити";
            }, 2000);
        }
    });

   requiredInputs.forEach((input) => {
    input.addEventListener('invalid', () => {
        input.nextElementSibling.style.display = 'block';
    });

    input.addEventListener('input', () => {
        if (input.checkValidity()) {
        input.nextElementSibling.style.display = 'none';
        }
    });
   });
    
    birthdateInput.addEventListener('input', () => {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (age < 18 || (age === 18 && monthDiff < 0)) {
        birthdateInput.nextElementSibling.style.display = 'block';
        birthdateInput.nextElementSibling.textContent = "Вам має бути щонайменше 18 років";
        formSubmissionAllowed = false;
    } else {
        birthdateInput.nextElementSibling.style.display = 'none';
        formSubmissionAllowed = true;
    }
    });
    
    signinPhoneInput.addEventListener('input', function (event) {
        const inputValue = signinPhoneInput.value.trim();
        if (!inputValue && !inputValue.value) {
            signinPhoneInput.nextElementSibling.style.display = 'none';
        } else if (!/^[0-9+\-()]{8,15}$/.test(inputValue)) {
            signinPhoneInput.nextElementSibling.style.display = 'block';
        } else {
            signinPhoneInput.nextElementSibling.style.display = 'none';
        }
    });

    signinPassword.addEventListener('input', () => {
        if (signinPassword.value.length <= 7) {
            signinPassword.nextElementSibling.textContent = "Введіть щонайменше 8 символів";
            signinPassword.nextElementSibling.style.display = 'block';
        } else {
            signinPassword.nextElementSibling.style.display = 'none';
        }
    })

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (signinPassword.value.length <= 7) {
            return;
        } else if (!formSubmissionAllowed){
            return;
        } else {
            signInForm.submit();
        }
    })

    passwordCheckbox.addEventListener('click', () => {
        if (signinPassword.type === "password") {
            signinPassword.type = "text";
        } else {
            signinPassword.type = "password";
        }
    })

    // login

    loginRequiredInputs.forEach((input) => {
    input.addEventListener('invalid', () => {
        input.nextElementSibling.style.display = 'block';
    });

    input.addEventListener('input', () => {
        if (input.checkValidity()) {
        input.nextElementSibling.style.display = 'none';
        }
    });
    });
    
    loginPassword.addEventListener('input', () => {
        if (loginPassword.value.length <= 7) {
            loginPassword.nextElementSibling.textContent = "Введіть щонайменше 8 символів";
            loginPassword.nextElementSibling.style.display = 'block';
        } else {
            loginPassword.nextElementSibling.style.display = 'none';
        }
    })

    loginCheckbox.addEventListener('click', () => {
        if (loginPassword.type === "password") {
            loginPassword.type = "text";
        } else {
           loginPassword.type = "password";
        }
    })

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!loginForm.checkValidity()) {
            return;
        } else {
            loginForm.submit();
        }
    });
});

    }
}

customElements.define('auth-form', AuthForm);