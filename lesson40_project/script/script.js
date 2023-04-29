var swiperMain = new Swiper(".mySwiper__main", {
    direction: "vertical",
    pagination: {
      el: ".mySwiper__main .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
    loop: true,
    
  });

  var swiper = new Swiper(".mySwiper__section", {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  input.onblur = function() {
    if (!input.value.includes('@')) { 
      input.classList.add('invalid');
      error.innerHTML = 'Please enter a correct email.'
    }
  };
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };


  function initMap() {
    let seattle = { lat: 47.666417676610614, lng: -122.41249736723638 };
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: seattle,
    });

    fetch("map-style.json")
      .then((response) => response.json())
      .then((data) => {
        map.setOptions({ styles: data });
      });
  }

