function chooseFaction(faction) {
  let text = "";

  if (faction === "Скиталец") {
    text = "Ты выбрал путь выживания и исследования.";
  }

  if (faction === "Падальщик") {
    text = "Ты выбрал силу, контроль и хаос.";
  }

  if (faction === "Гвардия") {
    text = "Ты выбрал порядок и контроль Сектора.";
  }

  document.getElementById("factionResult").innerText = text;
}