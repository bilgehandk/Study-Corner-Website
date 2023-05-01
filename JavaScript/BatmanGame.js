const batman = document.getElementById("batman");
const sam = document.getElementById("sam");

function jump() {
  if (batman.classList != "jump") {
    batman.classList.add("jump");

    setTimeout(function () {
      batman.classList.remove("jump");
    }, 300);
  }
}

function reset_animation() {
    var rest = document.getElementById('sam');
    rest.style.animationName = "none";
    requestAnimationFrame(() => {
        setTimeout(() => {
          rest.style.animationName = "block"
        }, 100);
      });
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let batmanTop = parseInt(window.getComputedStyle(batman).getPropertyValue("top"));

  // get current cactus X position
  let samLeft = parseInt(
    window.getComputedStyle(sam).getPropertyValue("left")
  );

  // detect collision
  if (samLeft < 50 && samLeft > 0 && batmanTop >= 140) {
    // collision
    alert("Game Over!");
    reset_animation();
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});