//  Automatic update the year
document.getElementById('year').textContent = new Date().getFullYear();


 
//Hamburger menu
const hamburger = document.getElementById("menuToggle")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

//smooth scroll to section
    function scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }

