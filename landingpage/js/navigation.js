/*********** */
//Main nav
function mainNav() {
  const mainNav = document.querySelector(".mainNav");
  const navLinks = [
    {
      name: "About Us",
      url: "about.html",
      id: "about",
    },
    {
      name: "Our Products",
      url: "products.html",
      id: "products",
    },
    {
      name: "Collection",
      url: "collection.html",
      id: "collection",
    },
    {
      name: "Contacts",
      url: "contacts.html",
      id: "contacts",
    },
  ];

  let templateNav = `
            <div class="mainNav__logo">
                <a href="#"><img src="${pathAssets}/images/logo-white.svg" alt=""></a>
            </div>
            <div class="mainNav__icon">
                <span></span>
            </div>
            <div class="mainNav__wrapper">
                <div class="mainNav__links">
                   
                </div>
            </div>`;

  document
    .querySelector(".mainNav")
    .insertAdjacentHTML("beforeend", templateNav);

  navLinks.forEach(function (el) {
    let template = `
            <a href="" class="mainNav__linkItem">${el.name}</a>`;
    document
      .querySelector(".mainNav__links")
      .insertAdjacentHTML("beforeend", template);
  });

  const logo = document.querySelector(".mainNav__logo img");

  if (mainNav.classList.contains("navDark")) {
    logo.src = `${pathAssets}/images/logo.svg`;
  }

  //Sticky Nav Bar

  window.onscroll = function () {
    getSticky();
  };

  function getSticky() {
    if (window.pageYOffset > 72) {
      mainNav.classList.add("navSticky");
      logo.src = `${pathAssets}/images/logo.svg`;
    } else {
      if (mainNav.classList.contains("navDark")) {
        mainNav.classList.remove("navSticky");
      } else {
        mainNav.classList.remove("navSticky");
        logo.src = `${pathAssets}/images/logo-white.svg`;
      }
    }
  }

  getSticky();

  //OPEN menu mobile
  const iconNav = document.querySelector(".mainNav__icon");
  iconNav.addEventListener("click", openNavMobile);

  function openNavMobile() {
    if (mainNav.classList.contains("navOpen")) {
      mainNav.classList.remove("navOpen");
      document.querySelector("body").style.overflowY = "initial";
      if (window.innerWidth < 799) {
        setTimeout(() => {
          document.querySelector(".mainNav .mainNav__wrapper").style.height =
            "auto";
        }, 600);
      }
    } else {
      mainNav.classList.add("navOpen");
      document.querySelector("body").style.overflowY = "hidden";
      if (window.innerWidth < 799) {
        document.querySelector(".mainNav .mainNav__wrapper").style.height =
          window.innerHeight + "px";
      }
    }
  }
}
mainNav();
