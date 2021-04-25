const pathAssets = "assets";

window.addEventListener("load", (event) => {
  //Anime Module
  // let delay = 1;
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animeModules");
      }
    });
  });

  function animeModules(){
      document.querySelectorAll('section').forEach(el =>observer.observe(el))
      document.querySelectorAll('footer').forEach(el =>observer.observe(el))
      document.querySelectorAll('header').forEach(el =>observer.observe(el))
  }
  animeModules();
});
