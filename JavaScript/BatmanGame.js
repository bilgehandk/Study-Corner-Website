const batman = document.getElementById("batman");
const sam = document.getElementById("sam");
let score = 0;
const scoreElement = document.getElementById("score");
let gameover = false;

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
    }, 1000);
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

function continueGame()
    {
      reset_animation();
      resetScore(); // Skoru sıfırla
      if(gameover == true){
      var restart = document.getElementById("restart");
      restart.style.display = 'none';
      var batman = document.getElementById('batman');
      batman.style.display = 'block';
      var joker = document.getElementById("sam");
      joker.style.display = 'block'; 
      gameover = false;
      }
    }

function showGameOver()
{
  var restart = document.getElementById("restart");
  restart.style.display = 'block';
  var rest = document.getElementById('sam');
  rest.style.animationName = "none";
  var batman = document.getElementById('batman');
  batman.style.display = 'none';
  var joker = document.getElementById("sam");
  joker.style.display = 'none';
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let batmanTop = parseInt(window.getComputedStyle(batman).getPropertyValue("top"));

  // get current cactus X position
  let samLeft = parseInt(window.getComputedStyle(sam).getPropertyValue("left"));

  // detect collision
  if (samLeft < 50 && samLeft > 0 && batmanTop >= 196) {
    // collision
    gameover = true;
    if(gameover === true)
    {
      showGameOver();
    }
    
    
  } else {
    if(gameover === false)
    updateScore(); // Skoru güncelle
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});