const batman = document.getElementById("batman");
const sam = document.getElementById("sam");
let score = 0;
const scoreElement = document.getElementById("score");

function updateScore() {
  score += 1;
  scoreElement.textContent = score;
}

// Oyun döngüsünde, skoru güncelleyen yerde aşağıdaki fonksiyonu çağırabilirsiniz:
// updateScore();

// Skoru sıfırlamak için kullanabileceğin bir fonksiyon da aşağıdaki gibi olabilir:
function resetScore() {
  score = 0;
  scoreElement.textContent = score;
}
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
  let samLeft = parseInt(window.getComputedStyle(sam).getPropertyValue("left"));

  // detect collision
  if (samLeft < 50 && samLeft > 0 && batmanTop >= 140) {
    // collision
    alert("Game Over!");
    reset_animation();
    resetScore(); // Skoru sıfırla
  } else {
    updateScore(); // Skoru güncelle
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});