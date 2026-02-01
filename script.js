const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("msg");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 100);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 200);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  msg.innerHTML = `<h4 id="msg">
                        I knew that. 😂😂<br>
                        Love You Too baby ❤️❤️
                    </h4>`;

    yesBtn.style.visibility = "hidden";
    noBtn.style.visibility = "hidden";

    let aud = new Audio("./audio/music.mp3")
    aud.play()
});
