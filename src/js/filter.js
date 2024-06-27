const servicesOptions = Array.from(document.getElementsByClassName('service-option'));
const cleanFilters = document.getElementById('clean-filters');
const slideLeft = document.getElementById('slide-left');
const slideRight = document.getElementById('slide-right');
const scrollContainer = document.getElementById('services-filters');
const priceSort = document.getElementById('price-sort');
const priceSortText = document.getElementById('price-sort-text');
const priceSortOptions = document.getElementById('price-sort-options');
const sortArrow = document.getElementById('sort-arrow');
const sortCheap = document.getElementById('sort-cheap');
const sortExpensive = document.getElementById('sort-expensive');
const gridMode = document.getElementById('grid-mode');
const colMode = document.getElementById('column-mode');
const locSearch = document.getElementById('loc_search');
const locOptions = document.getElementById('loc_group');
const locOptionsArray = document.querySelectorAll('#loc_group li');
const locName = document.getElementById('loc_name');
const filterForm = document.getElementById('filterForm');
const calendar =  filterForm.querySelector('#calendar');
const prevMonthElement = calendar.querySelector('#prevMonth');
const nextMonthElement = calendar.querySelector('#nextMonth');
const calendarErrorMessage = calendar.querySelector('#calendar-error');
const datesError = filterForm.querySelector('.dates-error-message');
const checkInDateInput = filterForm.querySelector('#check-in-date');
const checkOutDateInput = filterForm.querySelector('#check-out-date');
const results = document.getElementById('results');
const servicesPopup = document.getElementById('services-popup');
const cleanServices = document.getElementById('clean-services');
const showResults = document.getElementById('show-results');
const goBack = document.getElementById('go-back');
const openServices = document.getElementById('open-services');
const goBackFilters = document.getElementById('go-back-filters');
const showResultsFilters = document.getElementById('show-results-filters');
const openFilters = document.getElementById('open-filters');
const filtersPopup = document.getElementById('filters-popup');
const filtersContainer = document.getElementById('filters-container');
const resetFilters = document.getElementById('reset-filters');
const hotelCards = document.getElementsByClassName('hotel-card');

Array.from(hotelCards).forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = 'hotel.html';
  });
});

//choosing services

const serviceOptions = document.querySelectorAll('.service-option');

function handleServiceOptionClick(event) {
    const selectedOption = event.target;
    const optionText = selectedOption.textContent.trim(); 

    const isAlreadyChosen = document.getElementById('choosen-services').querySelector(`.service-option[data-text="${optionText}"]`);
    
    if (!isAlreadyChosen) {
        selectedOption.classList.add('active-service');

        const duplicateOption = document.createElement('a');
        duplicateOption.href = "#"; 
        duplicateOption.className = 'service-option'; 
        duplicateOption.setAttribute('data-text', optionText);
        duplicateOption.textContent = optionText;

        document.getElementById('choosen-services').appendChild(duplicateOption);
    }
}

serviceOptions.forEach(option => {
    option.addEventListener('click', handleServiceOptionClick);
});


//scroll left/right

slideLeft.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 450;
})

slideRight.addEventListener('click', () => {
    scrollContainer.scrollLeft += 450;
})

//choosing price sorting

priceSort.addEventListener('click', () => {
    priceSortOptions.classList.toggle('hidden');
    sortArrow.classList.toggle('rotate-180');
})

sortCheap.addEventListener('click', () => {
    priceSortText.textContent = "Від дешевих";
    priceSortOptions.classList.add('hidden');
    sortArrow.classList.remove('rotate-180');
}) 

sortExpensive.addEventListener('click', () => {
    priceSortText.textContent = "Від дорогих";
    priceSortOptions.classList.add('hidden');
    sortArrow.classList.remove('rotate-180');
}) 

//location field options

locSearch.addEventListener('click', () => {
    locOptions.classList.remove('hidden');
})

locOptionsArray.forEach(option => {
    option.addEventListener('click', () => {
        const locationName = option.querySelector('div').textContent;
        locName.textContent = locationName;
        locSearch.querySelector('input').value = option.dataset.location;
        locOptions.classList.add('hidden');
    })
});

document.addEventListener('click', (event) => {
  if (!locOptions.contains(event.target) && !locSearch.contains(event.target)) {
    locOptions.classList.add('hidden');
  }
});

//calendar

checkInDateInput.addEventListener('click', () => {
    calendar.classList.remove('!hidden');
    checkInDateInput.focus();
    // checkInDateInput.classList.add('active-outline');
    // checkOutDateInput.classList.remove('active-outline');
});

checkOutDateInput.addEventListener('click', () => {
    calendar.classList.remove('!hidden');
    checkOutDateInput.focus();
    // checkOutDateInput.classList.add('active-outline');
    // checkInDateInput.classList.remove('active-outline');
});

document.addEventListener('click', (event) => {
    if (!calendar.contains(event.target) && !checkInDateInput.contains(event.target) && !checkOutDateInput.contains(event.target)) {
        calendar.classList.add('!hidden');
    }
});

const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
let prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

renderMonth(prevMonthElement, prevMonthIndex, prevYear);
renderMonth(nextMonthElement, currentMonth, currentYear);

let mouseHoveredDate = null;

function renderMonth(container, month, year) {
    const monthName = months[month];
    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    container.querySelector('.month-name').textContent = `${monthName} ${year}`;

    const dateContainer = container.querySelector('.date');
    dateContainer.innerHTML = '';

    for (let i = 0; i < firstDayIndex; i++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = '';
        dateContainer.appendChild(dateDiv);
    }

    for (let i = 1; i <= totalDays; i++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = i;
        dateContainer.appendChild(dateDiv);

        dateDiv.addEventListener('click', (event) => {
        const clickedDate = new Date(year, month, i);
        const yearString = clickedDate.getFullYear().toString();
        const monthString = (clickedDate.getMonth() + 1).toString().padStart(2, '0');
        const dateString = clickedDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${dateString}.${monthString}.${yearString}`;

            if (!checkInDateInput.value || checkOutDateInput.value) {
            document.querySelectorAll('.selected-date').forEach(selectedDate => {
                selectedDate.classList.remove('selected-date');
            });
            checkInDateInput.value = formattedDate;
            checkOutDateInput.value = '';
            dateDiv.classList.add('selected-date');
            // checkOutDateInput.classList.add('active-outline');
            // checkInDateInput.classList.remove('active-outline');
        
        } else if (!checkOutDateInput.value) {
            const checkOutDate = new Date(year, month, i);
            const checkInDate = new Date(checkInDateInput.value.split('.').reverse().join('-'));

            if (checkOutDate > checkInDate) {
            
                checkOutDateInput.value = formattedDate;
                dateDiv.classList.add('selected-date');
                calendarErrorMessage.classList.add('hidden');
                calendar.classList.add('!hidden');
                // checkOutDateInput.classList.remove('active-outline');
            } else {
                calendarErrorMessage.classList.remove('hidden');
            }
        }
        });
    }
}

document.querySelectorAll('.calendar .date').forEach(dateContainer => {
    dateContainer.addEventListener('mouseover', (event) => {
        const checkInDateInput = document.querySelector('#check-in-date');
        const checkInDate = checkInDateInput.value;
        const checkOutDateInput = document.querySelector('#check-out-date');
        const checkOutDate = checkOutDateInput.value;
        const hoveredDateDiv = event.target;
        const year = parseInt(hoveredDateDiv.closest('.month').querySelector('.month-name').textContent.split(' ')[1]);
        const monthIndex = months.indexOf(hoveredDateDiv.closest('.month').querySelector('.month-name').textContent.split(' ')[0]);
        const day = parseInt(hoveredDateDiv.textContent);
        const hoveredDate = new Date(year, monthIndex, day);
        highlightDateRange(checkInDate, checkOutDate, hoveredDate);
    });
});

function highlightDateRange(checkinDate, checkOutDate, hoverDate) {
    const checkin = new Date(checkinDate.split('.').reverse().join('-'));
    const dateContainers = document.querySelectorAll('.calendar .date');
    dateContainers.forEach(dateContainer => {
        dateContainer.childNodes.forEach(dateElement => {
            const year = parseInt(dateContainer.closest('.month').querySelector('.month-name').textContent.split(' ')[1]);
            const monthIndex = months.indexOf(dateContainer.closest('.month').querySelector('.month-name').textContent.split(' ')[0]);
            const day = parseInt(dateElement.textContent);
            const currentDate = new Date(year, monthIndex, day);
            if (checkin <= currentDate && currentDate <= hoverDate) {
                dateElement.classList.add('bg-orange-100');
            } else {
                dateElement.classList.remove('bg-orange-100');
            }
        });
    });
}

const prevBtn = filterForm.querySelector('.prevMonthBtn');
const nextBtns = filterForm.querySelectorAll('.nextMonthBtn');

prevBtn.addEventListener('click', () => {
    if (currentMonth !== new Date().getMonth()) {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
    }

    prevBtn.disabled = currentMonth === new Date().getMonth();

    prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
    prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    renderMonth(prevMonthElement, prevMonthIndex, prevYear);
    renderMonth(nextMonthElement, currentMonth, currentYear);
});

nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
    prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    renderMonth(prevMonthElement, prevMonthIndex, prevYear);
    renderMonth(nextMonthElement, currentMonth, currentYear);
    prevBtn.disabled = false;
});
})   

//guests counter

const guestsCounter = document.getElementById('guests-counter');
const guestsInput = document.getElementById('inp_guest');
const guestsField = document.getElementById('guests-field');

guestsField.addEventListener('click', ()=> {
    guestsCounter.classList.toggle('hidden');
})

document.addEventListener('click', (event) => {
  if (!guestsCounter.contains(event.target) && !guestsField.contains(event.target)) {
    guestsCounter.classList.add('hidden');
  }
});

let adults = 1;
let children = 0;
let infants = 0;
let pets = 0;

function initCounter(form) {

    form.querySelector('#increase-adults').addEventListener('click', () => {
        if (adults < 5) {
            adults++;
            updateCounter(form);
        }
    });

    form.querySelector('#decrease-adults').addEventListener('click', () => {
        if (adults > 0) {
            adults--;
            updateCounter(form);
        }
    });

    form.querySelector('#increase-children').addEventListener('click', () => {
        if (children < 5) {
            children++;
            updateCounter(form);
        }
    });

    form.querySelector('#decrease-children').addEventListener('click', () => {
        if (children > 0) {
            children--;
            updateCounter(form);
        }
    });

    form.querySelector('#increase-infants').addEventListener('click', () => {
        if (infants < 5) {
            infants++;
            updateCounter(form);
        }
    });

    form.querySelector('#decrease-infants').addEventListener('click', () => {
        if (infants > 0) {
            infants--;
            updateCounter(form);
        }
    });

    form.querySelector('#increase-pets').addEventListener('click', () => {
        if (pets < 5) {
            pets++;
            updateCounter(form);
        }
    });

    form.querySelector('#decrease-pets').addEventListener('click', () => {
        if (pets > 0) {
            pets--;
            updateCounter(form);
        }
    });

}

function updateCounter(form) {
        form.querySelector('#adults').innerText = adults;
        form.querySelector('#children').innerText = children;
        form.querySelector('#infants').innerText = infants;
        form.querySelector('#pets').innerText = pets;

        let totalGuests = adults + children;
        let totalGuestsText = '';

        if (totalGuests > 1) {
            totalGuestsText += `${totalGuests} Гостей`;
        } else if (totalGuests === 1) {
            totalGuestsText += `${totalGuests} Гість`;
        }
        if (infants > 1) {
            totalGuestsText += `, ${infants} Немовлят`;
        } else if (infants === 1) {
            totalGuestsText += `, ${infants} Немовля`;
        }
        if (pets > 1) {
            totalGuestsText += `, ${pets} Домашніх улюбленців`;
        } else if (pets === 1) {
            totalGuestsText += `, ${pets} Домашній улюбленець`;
        }

        form.querySelector('#inp_guest').innerText = totalGuestsText;
    }

initCounter(filterForm);
updateCounter(filterForm);

//accordion

const accordions = document.querySelectorAll('.filter-accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('active')) {
      accordion.classList.remove('active');
      accordion.nextElementSibling.classList.add('hidden');
      accordion.querySelector('img').classList.remove('rotate-180');
    } else {
      accordion.classList.add('active');
      accordion.nextElementSibling.classList.remove('hidden');
      accordion.querySelector('img').classList.add('rotate-180');
    }
  });
});

// switching mode

colMode.addEventListener('click', () => {
    results.classList.remove('column-mode');
    results.classList.add('grid-mode');
})

gridMode.addEventListener('click', () => {
    results.classList.remove('grid-mode');
    results.classList.add('column-mode');
})

//map

const closeMap = document.getElementById('close-map');
const openMap = document.getElementById('open-map');
const mapOverlay = document.getElementById('map-overlay');

const defaultCoordinates = [48.42992, 23.69376];
const multipleCoordinates = [
  [48.42992, 23.69376],
  [48.43012, 23.69476],
  [48.42952, 23.69276],
  [48.43032, 23.69576]
]; 

let mapFilter;
let markers = [];

// async function fetchCoordinates() {
//     try {
//         let response = await fetch(''); // Add your API endpoint here
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         let data = await response.json();
//         return [data.latitude, data.longitude];
//     } catch (error) {
//         console.error('Error fetching coordinates:', error);
//         return defaultCoordinates; // Fallback to default coordinates on error
//     }
// }

openMap.addEventListener('click', async () => {
  mapOverlay.classList.remove('hidden');

  if (!mapFilter) {
    mapFilter = L.map('map-filter').setView(defaultCoordinates, 19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapFilter);

    multipleCoordinates.forEach((coordinate) => {
      const marker = L.marker(coordinate).addTo(mapFilter);
      markers.push(marker);
    });
  } else {
    mapFilter.setView(defaultCoordinates, 19);
    markers.forEach((marker) => {
      marker.setLatLng(defaultCoordinates);
    });
  }
});

closeMap.addEventListener('click', () => {
    mapOverlay.classList.add('hidden');
});

//services popup


cleanServices.addEventListener('click', function() {
    servicesOptions.forEach(option => {
        option.classList.remove('active-service');
    });
});

showResults.addEventListener('click', () => {
    servicesPopup.classList.add('hidden');
})

goBack.addEventListener('click', () => {
    servicesPopup.classList.add('hidden');
})

openServices.addEventListener('click', () => {
    servicesPopup.classList.remove('hidden');
})

openFilters.addEventListener('click', () => {
    filtersPopup.classList.remove('hidden');
    filtersPopup.classList.add('filters-popup');
    filtersContainer.classList.remove('md:hidden');
    filtersContainer.classList.remove('sm:hidden');
})

goBackFilters.addEventListener('click', () => {
    filtersPopup.classList.add('hidden');
    filtersPopup.classList.remove('filters-popup');
    filtersContainer.classList.add('md:hidden');
    filtersContainer.classList.add('sm:hidden');
})

showResultsFilters.addEventListener('click', () => {
    filtersPopup.classList.add('hidden');
    filtersPopup.classList.remove('filters-popup');
    filtersContainer.classList.add('md:hidden');
    filtersContainer.classList.add('sm:hidden');
})

function resetFormAndCheckboxes() {
    filterForm.reset();
    locName.textContent = 'Колочава';
    filterForm.querySelector('#inp_guest').innerText = '1 Гість';

    adults = 1;
    children = 0;
    infants = 0;
    pets = 0;
    updateCounter(filterForm);

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    document.querySelector('#min-price').value = '';
    document.querySelector('#max-price').value = '';
}

resetFilters.addEventListener('click', () => {
    resetFormAndCheckboxes();
})

cleanFilters.addEventListener('click', function() {
    servicesOptions.forEach(option => {
        option.classList.remove('active-service');
    });
    document.getElementById('choosen-services').textContent = '';
    resetFormAndCheckboxes();
});

const goBackMap = document.getElementById('go-back-map');
goBackMap.addEventListener('click', () => {
    mapOverlay.classList.add('hidden');
})

//pagination

const totalPages = 25;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prev').addEventListener('click', () => changePage(currentPage - 1));
    document.getElementById('next').addEventListener('click', () => changePage(currentPage + 1));
    generatePagination();
    window.addEventListener('resize', generatePagination);
});

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    generatePagination();
}

function generatePagination() {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';

    const width = window.innerWidth;
    let maxVisibleElements;

    if (width < 576) {
        maxVisibleElements = 5;
    } else if (width < 1024) {
        maxVisibleElements = 8;
    } else {
        maxVisibleElements = 10;
    }

    let startPage, endPage;

    if (totalPages <= maxVisibleElements) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const sidePages = Math.floor((maxVisibleElements - 3) / 2);
        if (currentPage <= sidePages + 1) {
            startPage = 1;
            endPage = maxVisibleElements - 2;
        } else if (currentPage >= totalPages - sidePages) {
            startPage = totalPages - maxVisibleElements + 3;
            endPage = totalPages;
        } else {
            startPage = currentPage - sidePages + 1;
            endPage = currentPage + sidePages - 1;
        }
    }

    const addDot = (where) => {
        const dots = document.createElement('span');
        dots.className = 'page-number disabled';
        dots.textContent = '...';
        if (where === 'start') {
            pageNumbers.insertBefore(dots, pageNumbers.firstChild.nextSibling);
        } else {
            pageNumbers.appendChild(dots);
        }
    };

    if (startPage > 1) {
        pageNumbers.appendChild(createPageElement(1));
        addDot('start');
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.appendChild(createPageElement(i));
    }

    if (endPage < totalPages) {
        addDot('end');
        pageNumbers.appendChild(createPageElement(totalPages));
    }

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = currentPage === totalPages;
}

function createPageElement(page) {
    const pageElement = document.createElement('span');
    pageElement.className = `page-number ${page === currentPage ? 'active' : ''}`;
    pageElement.textContent = page;
    pageElement.addEventListener('click', () => changePage(page));
    return pageElement;
}
