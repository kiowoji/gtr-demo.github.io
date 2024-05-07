new Splide('.splide', {
    direction: 'ltr' | 'rtl',
    type: 'loop',
    perPage: 1,
    drag: true,
    autoplay: true,
    interval: 3800,
    speed: 800,
    mediaQuery: 'min',
    breakpoints: {
		1440: {
			destroy: true,
		},
    } 
}).mount();