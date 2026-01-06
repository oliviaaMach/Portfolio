export function createCollapse(title) {
    const cvWrapper = document.createElement('section');

    const button = document.createElement('button');
    button.className ="cv-toggle";
    button.textContent = title;

    const content = document.createElement("div");
    content.className = "cv-content";
    content.style.maxHeight = "0px";

    button.addEventListener("click", () => {
        const isOpen = content.classList.toggle("open");
        content.style.maxHeight = isOpen
        ? content.scrollHeight + "px"
        : "0px";
    });

    cvWrapper.append(button, content);
    return { cvWrapper, content };
}
