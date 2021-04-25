/********************************00  */
//Slider Heading

function sliderHeading() {
  const sliderHeadingItems = [
    {
      img: `${pathAssets}/images/default.jpg`,
      alt: "",
    },
    {
      img: `${pathAssets}/images/default.jpg`,
      alt: "",
    },
    {
      img: `${pathAssets}/images/default.jpg`,
      alt: "",
    },
    {
      img: `${pathAssets}/images/default.jpg`,
      alt: "",
    },
  ];
  const heading = {
    title: "Landing Page",
    subtitle:
      "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated",
  };
  let templatesliderHeading = `
    <div class="sliderHeading__wrapper">
    <div class="sliderHeading__text anime">
        <div class="sliderHeading__title">${heading.title}</div>
        <div class="sliderHeading__subtitle">${heading.subtitle}</div>
    </div>
    <div class="sliderHeading__slider swiper-container anime">
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination"></div>
        <div class="sliderHeading__arrows">   
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    </div>`;
  document
    .querySelector(".sliderHeading")
    .insertAdjacentHTML("beforeend", templatesliderHeading);
  sliderHeadingItems.forEach(function (el) {
    let templateSlider = `
        <div class="swiper-slide">
        <figure class="sliderHeading__image anime">
            <img src="${el.img}" alt="" />
        </figure>
        </div>`;
    document
      .querySelector(".sliderHeading .swiper-wrapper")
      .insertAdjacentHTML("beforeend", templateSlider);
  });
  var mySwiper = new Swiper(".sliderHeading .swiper-container", {
    //Optional parameter
    loop: true,
    speed: 500,

    //If we need pagination
    pagination: {
      el: ".sliderHeading .swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".sliderHeading .swiper-button-next",
      prevEl: ".sliderHeading .swiper-button-prev",
    },
  });
}
sliderHeading();
