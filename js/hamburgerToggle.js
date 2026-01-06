export function hamburgerToggle(hamburgerSelector, navSelector) {
    const hamburger = document.querySelector(hamburgerSelector);
    const nav = document.querySelector(navSelector);
    const body = document.body;

    if (!hamburger || !nav) {
        console.warn("Hamburger menu: element not found.");
        return;
    }

     function closeMenu() {
        if (hamburger) hamburger.classList.remove('active');
        if (nav) nav.classList.remove('open');
        if (body) body.classList.remove('no-scroll');
    }

    if (!hamburger || !nav) {
        console.warn("Hamburger menu: element not found. Using no-op closeMenu");
        return { closeMenu };
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        body.classList.toggle('no-scroll');
    });

    nav.addEventListener('click', (e) => {
        const btn = e.target.closest('li, a');
        if (!btn) return;
        // Om länken har data-target eller href - stäng menyn
        if (btn.dataset?.target || btn.getAttribute('href')) {
            closeMenu();
        }
    });

    return { closeMenu };
}
