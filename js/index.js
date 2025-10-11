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



//collapsible menu in CV

document.querySelectorAll('.collapsible-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;

    btn.classList.toggle("active");


    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});