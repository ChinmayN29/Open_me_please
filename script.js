document.addEventListener("DOMContentLoaded", function () {

  /* ========== PASTEL COLORS (TOP — NO TDZ) ========== */

  var pastelColors = [
    "#ffe4ec", // pink
    "#e8f5e9", // green
    "#e3f2fd", // blue
    "#fffde7", // yellow
    "#f3e5f5"  // lavender
  ];

  function changeBackground() {
    var random =
      pastelColors[Math.floor(Math.random() * pastelColors.length)];
    document.body.style.backgroundColor = random;
  }

  /* ========== INTRO PAGES ========== */

  var introPages = [
    "Hey 👀",
    "I have something important to ask you 💭",
    "But before that…",
    "I hope this makes you smile 😊"
  ];

  var pageIndex = 0;
  var isTyping = false;

  var textEl = document.getElementById("text");
  var nextBtn = document.getElementById("nextBtn");

  function typeText(text) {
    isTyping = true;
    textEl.textContent = "";
    var i = 0;

    var interval = setInterval(function () {
      textEl.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        isTyping = false;
      }
    }, 50);
  }

  function loadPage() {
    typeText(introPages[pageIndex]);
  }

  // FIRST LOAD
  loadPage();
  changeBackground();

  nextBtn.addEventListener("click", function () {
    if (isTyping) return;

    pageIndex++;
    changeBackground();

    if (pageIndex < introPages.length) {
      loadPage();
    } else {
      showValentinePage();
    }
  });

  /* ========== FINAL PAGE ========== */

  function showValentinePage() {
    document.getElementById("introContainer").classList.add("hidden");
    document.getElementById("valentineSection").classList.remove("hidden");
    changeBackground();
  }

  /* ========== YES / NO LOGIC ========== */

  var yesBtn = document.getElementById("yesBtn");
  var noBtn = document.getElementById("noBtn");
  var message = document.getElementById("message");

  var yesSize = 18;
  var noSize = 18;

  var cuteMessages = [
    "Are you sure? 🥺",
    "Think again 💭",
    "I’ll wait 💕",
    "You’re breaking my heart 😢",
    "Okay last chance 😭"
  ];

  noBtn.addEventListener("click", function () {
    yesSize += 6;
    noSize = Math.max(8, noSize - 2);

    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = noSize + "px";

    message.textContent =
      cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
  });

  yesBtn.addEventListener("click", function () {
    message.textContent =
      "YAYYY!!! 💖🥹 You just made me the happiest!";
  });

  /* ========== FLOATING HEARTS ========== */

  var heartsContainer = document.getElementById("hearts-container");

  function createHeart() {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💓";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
      4 + Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 7000);
  }

  setInterval(createHeart, 400);

});
