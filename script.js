 const hero = document.getElementById("hero");
    const infoSection = document.getElementById("info");

    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;

      // Fade out hero slightly on scroll
      hero.style.opacity = 1 - scrollPos / 300;

      // Fade in info section
      const infoPos = infoSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (infoPos < windowHeight - 100) {
        infoSection.classList.add("fade-in");
      }
    });
	
	//slide in inmage
	
	const partnershipImage = document.querySelector(".partnership-image");

  window.addEventListener("scroll", () => {
    const imagePos = partnershipImage.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imagePos < windowHeight - 100) {
      partnershipImage.classList.add("slide-in");
    }
  });
  
  
  //google maps
  
   let map;
  async function initMap() {
    const position = { lat: 43.6485636, lng: -79.4493137 };

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position
    });

    new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "The Good Neighbour Espresso Bar"
    });
  }

  // Fade + zoom animation on scroll
  document.addEventListener("scroll", () => {
    const mapEl = document.getElementById("map");
    const mapPos = mapEl.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (mapPos < windowHeight - 100) {
      mapEl.classList.add("map-visible");
    }
  });
  
  // Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll effect
  });
}


// instagram images

window.addEventListener('scroll', () => {
      const section = document.querySelector('.instagram-section');
      const text = document.querySelector('.instagram-text');
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        section.classList.add('active');
        text.classList.add('active');
      }
    });
