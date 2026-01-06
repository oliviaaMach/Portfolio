import { smoothScroll } from "./smoothScroll.js";
import { cardSwiper } from "./projects/swiper.js";
import { myProjects } from "./projects/newCard.js";
import { hamburgerToggle } from "./hamburgerToggle.js";

import { workExperiences } from "./cv/data/workData.js";
import { educations } from "./cv/data/educationData.js";
import { skills } from "./cv/data/skillsData.js";
import { renderWorkSection } from "./cv/components/WorkSection.js";
import { renderEducationSection } from "./cv/components/EducationSection.js";
import { renderSkillsSection } from "./cv/components/SkillsSection.js";

const cvContainer = document.getElementById("cv");

renderWorkSection(cvContainer, workExperiences);
renderEducationSection(cvContainer, educations);
renderSkillsSection(cvContainer, skills);


const menu = hamburgerToggle('.hamburger', '.nav');
const swiperWrapper = document.querySelector('#projects .swiper-wrapper');

myProjects.forEach(project => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.appendChild(project.render());
    swiperWrapper.appendChild(slide);
});

smoothScroll(menu.closeMenu);
cardSwiper();