const form = document.getElementById('guide-form');
const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('success-popup');
const closeBtn = document.getElementById('close-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  } else {
    overlay.style.display = 'block';
    const outsideClickHandler = (e) => {
      if (!popup.contains(e.target)) {
        document.removeEventListener('click', outsideClickHandler);
        form.submit();
        window.location.href = '/';
      }
    };
    document.addEventListener('click', outsideClickHandler);
    closeBtn.addEventListener('click', () => {
      document.removeEventListener('click', outsideClickHandler);
      overlay.style.display = 'none';
      form.submit();
      window.location.href = '/';
    });
    setTimeout(() => {
      document.removeEventListener('click', outsideClickHandler);
      overlay.style.display = 'none';
      form.submit();
      window.location.href = '/';
    }, 7000); 
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
