const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#siteSearch");
const searchMessage = document.querySelector("#searchMessage");

function searchPortal() {
  if (!searchInput || !searchMessage) return;

  const term = searchInput.value.trim();

  if (!term) {
    searchMessage.textContent = "Digite um assunto para realizar uma busca.";
    return;
  }

  searchMessage.textContent =
    `A busca por "${term}" será conectada ao conteúdo do portal em uma próxima etapa.`;
}

if (searchButton) {
  searchButton.addEventListener("click", searchPortal);
}

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchPortal();
    }
  });
}
