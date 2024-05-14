document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("signin-overlay");
    const closeSignin = document.getElementById("close-signin");
    const likeButton = document.querySelector(".like-icon");
    const phoneInput = document.getElementById("auth-phone");
    const errorMessage = overlay.querySelector(".auth-error-message");
    const form = overlay.querySelector("form");

    function closeOverlay() {
        overlay.classList.add("hidden");
    }

    closeSignin.addEventListener("click", function() {
        closeOverlay();
    });

    window.addEventListener("click", function(event) {
        if (event.target === overlay) {
            closeOverlay();
        }
    });

    likeButton.addEventListener("click", function(event) {
        overlay.classList.remove("hidden");
        event.stopPropagation();
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            return;
        } else {
            form.submit();
            window.location.href="https://t.me/infoGoToRest"
        }
    });

    phoneInput.addEventListener('invalid', () => {
        errorMessage.style.display = 'block';
    });

    phoneInput.addEventListener('input', () => {
    if (!phoneInput.checkValidity()) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

});


