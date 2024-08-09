import eyeIcon from '/src/public/images/main-cards/icon-eye-off.svg';
import coinIcon from '/src/public/images/main-cards/icon-coins.svg';
import phoneIcon from '/src/public/images/main-cards/icon-phone.svg';
import mapIcon from '/src/public/images/icon-map.svg';
import likeIcon from '/src/public/images/hotel/heart.svg';
import hotelImg from '/src/public/images/hotel/376862503.webp';

// mock data
const hotels = [
  {
    id: 1,
    image: `${hotelImg}`,
    name: "Еко-садиба «Васкул»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["pool", "forest"]
  },
  {
    id: 2,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["hotel"]
  },
  {
    id: 3,
    image: `${hotelImg}`,
    name: "Готель «Mineral»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["pool", "forest"]
  },
  {
    id: 4,
    image: `${hotelImg}`,
    name: "Еко-садиба «Васкул»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["hostel"]
  },
  {
    id: 5,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["hotel"]
  },
  {
    id: 6,
    image: `${hotelImg}`,
    name: "Еко-садиба «Васкул»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["hostel"]
  },
  {
    id: 7,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["pool", "forest"]
  },
  {
    id: 8,
    image: `${hotelImg}`,
    name: "Еко-садиба «Васкул»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["forest"]
  },
  {
    id: 9,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["pool", "hotel"]
  },
  {
    id: 10,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["pool", "forest"]
  },
  {
    id: 11,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["hotel"]
  },
  {
    id: 12,
    image: `${hotelImg}`,
    name: "Гостинний двір «Лісова казка в лісі»",
    url: "./hotel.html",
    address: "с. Лумшори, вул. Лугова, 5, Закарпатська область, Україна",
    phone: "+380969036281",
    price: "від 1070 ₴ / ніч",
    services: ["forest", "hotel"]
  }
];

const hotelCardsContainer = document.querySelector('.hotel-cards');
const iconsGroup = document.getElementsByClassName('icons-group');
const iconsGroupArray = Array.from(iconsGroup);

// fetch and display hotels
async function displayHotels(service = '') {
    try {
    // let url = '';
    // if (service) {
    //   url = `?service=${service}`;
    // }
    // const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch hotels');
    // }
    // const data = await response.json();
    // const hotels = data.hotels;
    hotelCardsContainer.innerHTML = '';
    hotels.forEach(hotel => {
      const hotelCard = document.createElement('div');
      hotelCard.classList.add('hotel-card');

      hotelCard.innerHTML = `
        <img src=${likeIcon} alt="like" class="like-icon">
        <img src="${hotel.image}" alt="img" class="hotel-img">
        <div class="hotel-title">
          <a href="${hotel.url}">${hotel.name}</a>
        </div>
        <div class="flex flex-row justify-start">
          <img src=${mapIcon} alt="icon" class="object-contain">
          <div class="hotel-address">${hotel.address}</div>
        </div>
        <div class="hotel-phone">
          <img src=${phoneIcon} alt="icon" class="object-contain">
          <div class="phone-overflow">${hotel.phone}</div>
          <img src=${eyeIcon} alt="eye" class="eye-icon">
        </div>
        <div class="flex flex-row justify-start">
          <img src="${coinIcon}" alt="icon" class="object-contain">
          <div class="text-base text-secondary pl-2">${hotel.price}</div>
        </div>
      `;

      hotelCardsContainer.appendChild(hotelCard);
    });
      attachCardListeners();
  } catch (error) {
    console.error('Error displaying hotels:', error);
  }
}

function attachCardListeners() {
  const overlay = document.getElementById("auth-overlay");
  const likeButtons = document.querySelectorAll(".like-icon");
  const hotelCards = document.querySelectorAll(".hotel-card");
  const tourCards = document.querySelectorAll(".tour-card");

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", function(event) {
      overlay.classList.remove("hidden");
      event.stopPropagation();
    });
  });

  hotelCards.forEach((hotelCard) => {
    hotelCard.addEventListener("click", function() {
      const hotelUrl = hotelCard.querySelector('.hotel-title a').href;
      window.location.href = hotelUrl;
    });
  });

  tourCards.forEach((tourCard) => {
    tourCard.addEventListener("click", function() {
      const tourUrl = tourCard.querySelector('.tour-title a').href;
      window.location.href = tourUrl;
    });
  });
}

displayHotels();

iconsGroupArray.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active-group')) {
      const service = item.dataset.service;
      console.log(service);
      displayHotels(service);
    }
  });
});

