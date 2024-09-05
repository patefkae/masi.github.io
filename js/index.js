window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];
  
  function init() {
    box.addEventListener("click", openBox, false);
  }
  
  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }
  
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 4) {
      reveal();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  function reveal() {
    document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
    playFireworkSound();
    loop();
    launchConfetti();
  }

  function playFireworkSound() {
    var sound = document.getElementById("firework-sound");
    sound.play();
  }

  function launchConfetti() {
    for (var i = 0; i < 100; i++) {
      createConfetti();
    }
  }

  function createConfetti() {
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    document.getElementById('confetti-wrapper').appendChild(confetti);

    setTimeout(function() {
      confetti.remove();
    }, 3000);
  }

  init();
};

// Existing firework logic...
