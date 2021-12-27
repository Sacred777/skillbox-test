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

// Слайдер в Broadcasts
const broadcastsSlider = siteContainer.querySelector('.broadcasts-swiper-container');
const mySwiperBroadcasts = new Swiper(broadcastsSlider, {
  slidesPerView: 3,
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  spaceBetween: 28,
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

// Слайдер в Playlists
const playlistsSlider = siteContainer.querySelector('.playlists-swiper-container');
const mySwiperPlaylists = new Swiper(playlistsSlider, {
  slidesPerView: 4,
  slidesPerColumnFill: 'row',
  slidesPerColumn: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  direction: 'horizontal',

  pagination: {
    el: 'playlists-button__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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

// Слайдер в Advertising смена картинок
const advertisingSlider = siteContainer.querySelector('.advertising-swiper-container');
const mySwiperAdvertising = new Swiper(advertisingSlider, {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  pagination: {
    el: false,
  },
  autoplay: {
    delay: 3000,
  },
});