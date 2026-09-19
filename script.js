// ============================
// START WEBSITE
// ============================

function startJourney() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("main-content").style.display = "block";

    const music = document.getElementById("music");

    music.play().catch(() => {
        console.log("Autoplay blocked by browser");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ============================
// PHOTO SLIDER
// ============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 3000);

// ============================
// LOVE LETTER TYPEWRITER
// ============================

const letterText = `

My Dearest Sehrish ❤️,

Today is not just another day. Today is the day when the most beautiful part of my life came into this world. ✨

Before you, life was ordinary. But after you became a part of my journey, every moment started feeling special, every smile became brighter, and every dream became more meaningful.

You are not just someone I love; you are the reason behind countless smiles, silent prayers, and beautiful memories.

When I think about happiness, I think of you.
When I think about love, I think of you.
When I think about my future, I see only you. ❤️

Your smile has the power to light up my darkest days, and your presence makes every moment feel magical.

On your special day, I pray that Allah fills your life with endless happiness, success, peace, and love.

Thank you for being my best friend, my greatest blessing, my comfort, my happiness, and the most precious person in my life.

I will always care for you.
I will always respect you.
And a part of my heart will always belong to you. ❤️

Happy Birthday, My Beautiful Sehrish Bakhsh 🎂✨

May this year bring you more joy than ever before, and may your smile never fade.

Forever grateful for every moment we share. ❤️

With all my love,

USMAN ALI ❤️

`;

let i = 0;

function typeWriter() {

    const target = document.getElementById("typewriter");

    if (!target) return;

    if (i < letterText.length) {

        target.innerHTML += letterText.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

// Start typewriter when page opens
setTimeout(typeWriter, 1500);

// ============================
// GIFT BOX OPEN
// ============================

function openGift() {

    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    launchConfetti();

}

// ============================
// CONFETTI EFFECT
// ============================

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.background =
            randomColor();

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);

    }

}

function randomColor() {

    const colors = [
        "#ff4d88",
        "#ffcc00",
        "#00c3ff",
        "#7d5fff",
        "#00d084",
        "#ff6b6b"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}

// ============================
// CREATE HEARTS
// ============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    let position = -20;

    const move = setInterval(() => {

        position += 2;

        heart.style.bottom = position + "px";

        if (position > window.innerHeight + 100) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}, 800);
