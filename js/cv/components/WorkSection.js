import { createCollapse } from "./Collapse.js";

export function renderWorkSection(container, workExperiences) {
  const { cvWrapper, content } = createCollapse("Work Experience");

  workExperiences.forEach(job => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h4>${job.title}</h4>
      <h5>${job.city} || ${job.start} - ${job.end}</h5>
      <ul>${job.info.map(i => `<li>${i}</li>`).join("")}</ul>
    `;
    content.appendChild(article);
  });

  container.appendChild(cvWrapper);
}