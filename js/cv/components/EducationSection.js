import { createCollapse } from "./Collapse.js";

export function renderEducationSection(container, educations) {
  const { cvWrapper, content } = createCollapse("Education");

  educations.forEach(ed => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h4>${ed.program}</h4>
      <h5>${ed.school}, ${ed.city} || ${ed.start} – ${ed.end}</h5>
      <ul>${ed.info.map(i => `<li>${i}</li>`).join("")}</ul>
    `;
    content.appendChild(article);
  });

  container.appendChild(cvWrapper);
}