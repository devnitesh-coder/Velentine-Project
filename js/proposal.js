// proposal.js

const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const message = params.get("msg");
const isCreator = params.get("creator");

// Redirect if invalid
if (!name || !message) {
  window.location.href = "index.html";
}

// Elements
const nameHeading = document.querySelector(".heart h1");
const msgText = document.getElementById("msg");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const copyBtn = document.getElementById("copyLinkBtn");
const copyStatus = document.getElementById("copyStatus");

// Inject content
nameHeading.innerText = `hey, ${name}`;
msgText.innerText = message;

// Show copy button ONLY for creator
if (isCreator === "true") {
  copyBtn.style.display = "block";
} else {
  copyBtn.style.display = "none";
}

// Copy clean link (without creator flag)
copyBtn.addEventListener("click", () => {
  const cleanLink =
    `${window.location.origin}${window.location.pathname}` +
    `?name=${encodeURIComponent(name)}&msg=${encodeURIComponent(message)}`;

  navigator.clipboard.writeText(cleanLink).then(() => {
    copyStatus.innerText = "Link copied ❤️";
    setTimeout(() => (copyStatus.innerText = ""), 2000);
  });
});

// YES → success page
yesBtn.addEventListener("click", () => {
  window.location.href = `success.html?name=${encodeURIComponent(name)}`;
});

// NO button logic
function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
