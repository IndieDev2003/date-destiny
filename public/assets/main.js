const button = document.querySelector(".hover-button");
let currentX = 0;
let currentY = 0;

button.addEventListener("mouseover", () => {
  const buttonWidth = button.clientWidth;
  const buttonHeight = button.clientHeight;

  // Define the range for movement
  const moveRange = 300; // Maximum distance to move in pixels

  // Calculate new position within a small range
  const x = Math.random() * moveRange - moveRange / 9;
  const y = Math.random() * moveRange - moveRange / 5;

  // Apply the transform property to move the button
  currentX += x;
  currentY += y;

  // Ensure the button stays within the viewport bounds
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  currentX = Math.max(0, Math.min(currentX, maxX));
  currentY = Math.max(0, Math.min(currentY, maxY));

  button.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

function showModal() {
  new bootstrap.Modal(document.getElementById("dateModal")).show();
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#E6E6FA", "#9370DB", "#8A2BE2"],
  });
}




function revealWhyMe() {
  const whyMeContent = document.getElementById("whyMeContent");
  const surpriseBox = document.querySelector(".surprise-box");

  surpriseBox.style.transform = "scale(0)";
  setTimeout(() => {
    surpriseBox.style.display = "none";
    whyMeContent.style.display = "block";
    gsap.from("#whyMeContent .why-me-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, 300);

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#E6E6FA", "#9370DB", "#8A2BE2"],
  });
}

// document.getElementById('dateForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   const date = document.getElementById('date').value;
//   const time = document.getElementById('time').value;
//   const message = document.getElementById('message').value;

//   let responseMessage = `I'm so excited for our date on ${date} at ${time}, Ayushi!`;
//   if (message) {
//     responseMessage += ` And thank you for letting me know: "${message}". I'll keep that in mind.`;
//   }
//   responseMessage += " I can't wait to see you and hear you play!";

//   alert(responseMessage);
//   bootstrap.Modal.getInstance(document.getElementById('dateModal')).hide();

//   // Trigger a bigger confetti celebration
//   var end = Date.now() + (5 * 1000);
//   var colors = ['#E6E6FA', '#9370DB', '#8A2BE2'];

//   (function frame() {
//     confetti({
//       particleCount: 2,
//       angle: 60,
//       spread: 55,
//       origin: { x: 0 },
//       colors: colors
//     });
//     confetti({
//       particleCount: 2,
//       angle: 120,
//       spread: 55,
//       origin: { x: 1 },
//       colors: colors
//     });

//     if (Date.now() < end) {
//       requestAnimationFrame(frame);
//     }
//   }());
// });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add parallax effect
window.addEventListener("scroll", function () {
  var parallaxElements = document.getElementsByClassName("parallax");
  for (var i = 0; i < parallaxElements.length; i++) {
    var windowScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    var elementOffset = parallaxElements[i].offsetTop;
    var currentElementOffset = elementOffset - windowScrollTop;
    var parallaxDist = currentElementOffset;
    var parallaxSpeed = 0.5;
    parallaxElements[i].style.backgroundPositionY =
      -(parallaxDist * parallaxSpeed) + "px";
  }
});

// Heart trail effect
document.addEventListener("mousemove", function (e) {
  var heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.color = "#9370DB";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  document.querySelector(".heart-trail").appendChild(heart);

  gsap.to(heart, {
    y: -100,
    alpha: 0,
    duration: 2,
    ease: "power2.out",
    onComplete: function () {
      heart.remove();
    },
  });
});

// Music note animation
function createMusicNote() {
  const musicNotes = ["♪", "♫", "♩", "♬", "♭", "♮"];
  const note = document.createElement("div");
  note.className = "music-note";
  note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
  note.style.left = Math.random() * window.innerWidth + "px";
  note.style.top = window.innerHeight + "px";
  document.querySelector(".music-notes").appendChild(note);

  gsap.to(note, {
    y: -window.innerHeight,
    x: "random(-50, 50)",
    rotation: "random(-90, 90)",
    opacity: 0,
    duration: "random(3, 6)",
    ease: "power1.out",
    onComplete: () => {
      note.remove();
    },
  });
}

setInterval(createMusicNote, 300);

// Playlist functionality
function playSong(songSrc, songTitle) {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.src = songSrc;
  audioPlayer.play();
}
