const form = document.getElementById('guide-form');
const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
const overlay = document.getElementById('overlay');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  } else {
    overlay.style.display = 'block';
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
