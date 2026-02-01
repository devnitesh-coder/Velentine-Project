// success.js

// Read name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// Agar name na ho → form page pe bhej do
if (!name) {
  window.location.href = "index.html";
}

let aud = new Audio("./audio/music.mp3")
aud.play()

// Inject name
const successName = document.getElementById("successName");
successName.innerText = `hey, ${name}`;
