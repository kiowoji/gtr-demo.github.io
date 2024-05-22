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
