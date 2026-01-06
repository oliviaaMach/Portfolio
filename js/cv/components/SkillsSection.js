import { createCollapse } from "./Collapse.js";

export function renderSkillsSection(container, skills) {
  const { cvWrapper, content } = createCollapse("Skills");

  const ul = document.createElement("ul");
  skills.forEach(skill => {
    ul.innerHTML += `<li>${skill.name}</li>`;
  });

  content.appendChild(ul);
  container.appendChild(cvWrapper);
}