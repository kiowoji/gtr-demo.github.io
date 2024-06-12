//icons slider

const iconsGroup = document.getElementsByClassName('icons-group');
const iconsGroupArray = Array.from(iconsGroup);

iconsGroupArray.forEach(item => {
  item.addEventListener('click', () => {
    iconsGroupArray.forEach(item => {
      item.classList.remove('active-group');
    });

    item.classList.add('active-group');
  });
});

const slideLeft = document.getElementById('slide-left');
const slideRight = document.getElementById('slide-right');
const scrollContainer = document.getElementById('scroll-container')

slideLeft.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 150;
})

slideRight.addEventListener('click', () => {
    scrollContainer.scrollLeft += 150;
})

//categories slider

const categories = document.getElementById('categories');
const categoryItems = document.querySelectorAll('.category-item');
const categoriesOptions = document.querySelectorAll('.categories-options');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

categoryItems.forEach((item) => {
    item.addEventListener('click', () => {
        categoriesOptions.forEach((option) => {
            option.classList.add('hidden');
        });
        categoryItems.forEach((item2) => {
            item2.classList.remove('active-item');
        });
        item.classList.add('active-item');
        const target = item.getAttribute('data-target');
        document.querySelector(target).classList.remove('hidden');
    });
});

arrowLeft.addEventListener('click', () => {
    categories.scrollLeft -= 150;
})

arrowRight.addEventListener('click', () => {
    categories.scrollLeft += 150;
})

const hotelCards = document.getElementsByClassName('hotel-card');

Array.from(hotelCards).forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = 'hotel.html';
  });
});

const locationCards = document.getElementsByClassName('location-img');

Array.from(locationCards).forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = '#';
  });
});

var button = document.querySelector(".button-up");
button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function() {
  button.classList.toggle("hidden", window.scrollY < 100);
});

//tours slider

const toursGroup = document.getElementsByClassName('tour-icons-group');
const toursGroupArray = Array.from(toursGroup);

 toursGroupArray.forEach(item => {
  item.addEventListener('click', () => {
     toursGroupArray.forEach(item => {
      item.classList.remove('active-group');
    });

    item.classList.add('active-group');
  });
});

const slideLeftTours = document.getElementById('tours-slide-left');
const slideRightTours = document.getElementById('tours-slide-right');
const scrollContainerTours = document.getElementById('tours-scroll-container')

slideLeftTours.addEventListener('click', () => {
  scrollContainerTours.scrollLeft -= 150;
})

slideRightTours.addEventListener('click', () => {
  scrollContainerTours.scrollLeft += 150;
})