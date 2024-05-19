document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("auth-overlay");
    const closeSignin = document.getElementById("close-auth");
    const likeButtons = document.querySelectorAll(".like-icon");
    const phoneInput = document.getElementById("auth-phone");
    const errorMessage = overlay.querySelector(".auth-error-message");
    const form = overlay.querySelector("form");

    function closeOverlay() {
        overlay.classList.add("hidden");
        form.reset();
    }

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
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            return;
        } else {
            // form.submit();
            window.location.href = "https://t.me/infoGoToRest";
            form.reset();
        }
    });

    phoneInput.addEventListener('input', function (event) {
        const inputValue = phoneInput.value.trim();

        if (!/^[0-9+\-()]{8,15}$/.test(inputValue)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    phoneInput.addEventListener('invalid', () => {
        errorMessage.style.display = 'block';
    });
});


