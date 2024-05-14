document.addEventListener("DOMContentLoaded", function () {
  const hotelPhotos = document.getElementById('hotel-photos');
  const sliderOverlay = document.getElementById('slider-overlay');
  const photosPopup = document.getElementById('photos-popup');

  hotelPhotos.addEventListener('click', () => {
    sliderOverlay.classList.remove('hidden');
  })

  let slideIndex = 1;
  showSlides(slideIndex);

  document.getElementById("next-btn").addEventListener("click", function () {
    plusSlides(1);
  });

  document.getElementById("prev-btn").addEventListener("click", function () {
    plusSlides(-1);
  });

  const thumbnails = document.querySelectorAll(".demo");
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentSlide(index + 1);
    });
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dots-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dots-active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
    
  const closeSlider = document.getElementById('close-slider');
  closeSlider.addEventListener('click', () => {
    sliderOverlay.classList.add('hidden');
  })
  
  sliderOverlay.addEventListener('click', (e) => {
    if (!photosPopup.contains(e.target)) {
      sliderOverlay.classList.add('hidden');
    }
  })

  photosPopup.addEventListener('touchstart', handleTouchStart, false);
  photosPopup.addEventListener('touchmove', handleTouchMove, false);
  photosPopup.addEventListener('touchend', handleTouchEnd, false);

  let startX, startY, endX, endY;
  let swipeThreshold = 50; 

  function handleTouchStart(event) {
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
  }

  function handleTouchMove(event) {
    endX = event.touches[0].pageX;
    endY = event.touches[0].pageY;
  }

  function handleTouchEnd(event) {
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);
    if (deltaX > swipeThreshold && deltaY < swipeThreshold) {
      if (endX > startX) {
        plusSlides(-1); 
      } else {
        plusSlides(1); 
      }
    }
  }
  
  const closeMap = document.getElementById('close-map');
  const openMap = document.getElementById('open-map');
  const mapOverlay = document.getElementById('map-overlay');
  const hotelLocation = document.querySelector('.hotel-location');

  openMap.addEventListener('click', () => {
    mapOverlay.classList.remove('hidden');
  })

  hotelLocation.addEventListener('click', () => {
    mapOverlay.classList.remove('hidden');
  })

  closeMap.addEventListener('click', () => {
    mapOverlay.classList.add('hidden');
  })

  const closeReviews = document.getElementById('close-reviews');
  const reviewsOverlay = document.getElementById('reviews-overlay');
  const reviewsPopup = document.getElementById('reviews-popup');
  closeReviews.addEventListener('click', () => {
    reviewsOverlay.classList.add('hidden');
  })

  reviewsOverlay.addEventListener('click', (e) => {
    if (!e.target.contains.reviewsPopup) {
      reviewsOverlay.classList.add('hidden');
    }
  })

  const rating = document.getElementById('rating');
  rating.addEventListener('click', () => {
    reviewsOverlay.classList.remove('hidden');
  })

  const bookingFormOverlay = document.getElementById('booking-form-overlay');
  const openBookingOverlay = document.getElementById('open-booking-overlay');
  const bookingPanel = document.getElementById('bottom-booking-panel');
  const closeBookingForm = document.getElementById('close-booking-form');

  openBookingOverlay.addEventListener('click', () => {
    bookingFormOverlay.classList.remove('hidden');
    bookingPanel.classList.add('hidden');
  })

  closeBookingForm.addEventListener('click', () => {
    bookingFormOverlay.classList.add('hidden');
    bookingPanel.classList.remove('hidden');
  })

  const openServicesBtn = document.getElementById('open-services-btn');
  const servicesHidden = document.getElementById('services-hidden');
  openServicesBtn.addEventListener('click', () => {
      servicesHidden.classList.toggle('hidden');
      if (!servicesHidden.classList.contains('hidden')) {
          openServicesBtn.innerHTML = `Показати менше <span><</span>`;
      } else { openServicesBtn.innerHTML = `Показати більше <span>></span>`;}
  })

  const openServicesMapBtn = document.getElementById('open-services-map');
  const servicesMapHidden = document.getElementById('services-hidden-map');
  openServicesMapBtn.addEventListener('click', () => {
      servicesMapHidden.classList.toggle('hidden');
      if (!servicesMapHidden.classList.contains('hidden')) {
          openServicesMapBtn.innerHTML = `Згорнути <span><</span>`;
      } else { openServicesMapBtn.innerHTML = `Показати більше <span>></span>`;}
  })

  const allBtn = document.querySelector('.all-btn');
  const cleanBtn = document.querySelector('.clean-btn');
  const checkboxes = document.querySelectorAll('.checkbox-wrapper input[type="checkbox"]');

  allBtn.addEventListener('click', function() {
      checkboxes.forEach(function(checkbox) {
          checkbox.checked = true;
          checkbox.parentElement.classList.add('active-wrapper');
      });
  });

  cleanBtn.addEventListener('click', function() {
      checkboxes.forEach(function(checkbox) {
          checkbox.checked = false;
          checkbox.parentElement.classList.remove('active-wrapper');
      });
  });

  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          if (this.checked) {
              this.parentElement.classList.add('active-wrapper');
          } else {
              this.parentElement.classList.remove('active-wrapper');
          }
      });
  });
});

