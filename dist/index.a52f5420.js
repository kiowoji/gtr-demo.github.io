// mock data
const hotels = [
    {
        id: 1,
        hotelImgSrc: "public/images/hotel/376862503.webp",
        hotelName: "\u0415\u043A\u043E-\u0441\u0430\u0434\u0438\u0431\u0430 \xab\u0412\u0430\u0441\u043A\u0443\u043B\xbb",
        hotelUrl: "./hotel.html",
        hotelAddress: "\u0441. \u041B\u0443\u043C\u0448\u043E\u0440\u0438, \u0432\u0443\u043B. \u041B\u0443\u0433\u043E\u0432\u0430, 5, \u0417\u0430\u043A\u0430\u0440\u043F\u0430\u0442\u0441\u044C\u043A\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0423\u043A\u0440\u0430\u0457\u043D\u0430",
        hotelPhone: "+380969036281",
        hotelCoinsIconSrc: "public/images/main-cards/icon-coins.svg",
        hotelPrice: "\u0432\u0456\u0434 1070 \u20B4 / \u043D\u0456\u0447"
    },
    {
        id: 2,
        hotelImgSrc: "public/images/hotel/2021-08-22-scaled.webp",
        hotelName: "\u0413\u043E\u0441\u0442\u0438\u043D\u043D\u0438\u0439 \u0434\u0432\u0456\u0440 \xab\u041B\u0456\u0441\u043E\u0432\u0430 \u043A\u0430\u0437\u043A\u0430 \u0432 \u043B\u0456\u0441\u0456\xbb",
        hotelUrl: "./hotel.html",
        hotelAddress: "\u0441. \u041B\u0443\u043C\u0448\u043E\u0440\u0438, \u0432\u0443\u043B. \u041B\u0443\u0433\u043E\u0432\u0430, 5, \u0417\u0430\u043A\u0430\u0440\u043F\u0430\u0442\u0441\u044C\u043A\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0423\u043A\u0440\u0430\u0457\u043D\u0430",
        hotelPhone: "+380969036281",
        hotelCoinsIconSrc: "public/images/main-cards/icon-coins.svg",
        hotelPrice: "\u0432\u0456\u0434 1070 \u20B4 / \u043D\u0456\u0447"
    }
];
const hotelCardsContainer = document.querySelector(".hotel-cards");
// fetch and display hotels
function displayHotels() {
    try {
        // const response = await fetch(''); 
        // if (!response.ok) {
        //   throw new Error('Failed to fetch hotels');
        // }
        // const data = await response.json();
        // const hotels = data.hotels;
        hotels.forEach((hotel)=>{
            const hotelCard = document.createElement("div");
            hotelCard.classList.add("hotel-card");
            hotelCard.innerHTML = `
        <img src="public/images/hotel/heart.svg" alt="like" class="like-icon">
        <img src="${hotel.hotelImgSrc}" alt="img" class="hotel-img">
        <div class="hotel-title">
          <a href="${hotel.hotelUrl}">${hotel.hotelName}</a>
        </div>
        <div class="flex flex-row justify-start">
          <img src="public/images/icon-map.svg" alt="icon">
          <div class="hotel-address">${hotel.hotelAddress}</div>
        </div>
        <div class="hotel-phone">
          <img src="public/images/main-cards/icon-phone.svg" alt="icon">
          <div class="phone-overflow">${hotel.hotelPhone}</div>
          <img src="/src/public/images/main-cards/icon-eye-off.svg" alt="eye" class="eye-icon">
        </div>
        <div class="flex flex-row justify-start">
          <img src="${hotel.hotelCoinsIconSrc}" alt="icon">
          <div class="text-base text-secondary pl-2">${hotel.hotelPrice}</div>
        </div>
      `;
            hotelCardsContainer.appendChild(hotelCard);
        });
    } catch (error) {
        console.error("Error displaying hotels:", error);
    }
}
displayHotels();

//# sourceMappingURL=index.a52f5420.js.map
