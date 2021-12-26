const siteContainer = document.querySelector('.site-container');

// Селект в Broadcasts
const selectBroadcasts = () => {
  const item = siteContainer.querySelector('.broadcasts-filter__select');
  const choices = new Choices(item, {
    searchEnabled: false,
    itemSelectText: '',
    sorter: function (a, b) {
    },
  });
};

selectBroadcasts();

// Слайдер в Gallery
const broadcastsSlider = siteContainer.querySelector('.broadcasts-swiper-container');
const mySwiperBroadcasts = new Swiper(broadcastsSlider, {
  slidesPerView: 3,
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  spaceBetween: 30,
  direction: 'horizontal',

  // pagination: {
  //   el: '.gallery-button__pagination',
  //   type: 'fraction',
  // },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // breakpoints: {
  //   300: {
  //     slidesPerView: 1,
  //     slidesPerColumn: 1,
  //     slidesPerGroup: 1,
  //   },
  //
  //   577: {
  //     slidesPerView: 2,
  //     slidesPerColumn: 2,
  //     spaceBetween: 36,
  //     slidesPerGroup: 2,
  //   },
  //
  //   769: {
  //     slidesPerView: 2,
  //     slidesPerColumn: 2,
  //     spaceBetween: 34,
  //     slidesPerGroup: 2,
  //   },
  //
  //   1025: {
  //     slidesPerView: 3,
  //     slidesPerColumn: 2,
  //     spaceBetween: 34,
  //     slidesPerGroup: 3,
  //   },
  //
  //   1411: {
  //     slidesPerView: 3,
  //     slidesPerColumn: 2,
  //     spaceBetween: 45,
  //     slidesPerGroup: 3,
  //   },
  // }
});