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
// Переход на страницу фракции
function goFaction(faction) {
  window.location.href = "faction.html?f=" + faction;
}

// Звук атмосферы
const audio = new Audio("https://actions.google.com/sounds/v1/alarms/industrial_alarm.ogg");

function playSound() {
  audio.volume = 0.2;
  audio.play();
}
