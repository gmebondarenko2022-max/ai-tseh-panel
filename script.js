const statusToggle = document.querySelector("#status-toggle");
const statusCard = document.querySelector(".status-card");
const statusText = document.querySelector("#status-text");
const statusDescription = document.querySelector("#status-description");

statusToggle.addEventListener("change", () => {
  const isReady = statusToggle.checked;

  statusCard.classList.toggle("is-ready", isReady);
  statusText.textContent = isReady ? "Готово к следующему шагу" : "В работе";
  statusDescription.textContent = isReady
    ? "Можно переходить к следующей задаче."
    : "Первый проект уже начал свой путь.";
});
