const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const isTurkish = document.documentElement.lang === "tr";

if (menuToggle && navMenu) {
  const setMenu = (open) => {
    body.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? (isTurkish ? "Menüyü kapat" : "Close menu") : (isTurkish ? "Menüyü aç" : "Open menu"));
  };

  menuToggle.addEventListener("click", () => setMenu(!body.classList.contains("nav-open")));

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelectorAll("[data-form-ready]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const requiredFields = Array.from(form.querySelectorAll("[required]"));
    let valid = true;

    requiredFields.forEach((field) => {
      const empty = !field.value.trim();
      const badEmail = field.type === "email" && field.value.trim() && !emailPattern.test(field.value.trim());
      const invalid = empty || badEmail;
      field.setAttribute("aria-invalid", String(invalid));
      if (invalid) valid = false;
    });

    if (!status) return;

    if (!valid) {
      status.textContent = document.documentElement.lang === "tr"
        ? "Lütfen zorunlu alanları ve e-posta formatını kontrol edin."
        : "Please check required fields and email format.";
      status.className = "form-status is-error";
      return;
    }

    status.textContent = document.documentElement.lang === "tr"
      ? "Form doğrulandı. Backend bağlantısı eklendiğinde bu bilgiler güvenli şekilde gönderilecektir."
      : "The form is validated. Once a backend is connected, these details can be submitted securely.";
    status.className = "form-status is-success";
    form.reset();
    requiredFields.forEach((field) => field.removeAttribute("aria-invalid"));
  });
});
