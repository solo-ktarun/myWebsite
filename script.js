// ================================
// THEME TOGGLE
// ================================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.innerHTML = "☀️ Light Mode";
} else {
    themeToggle.innerHTML = "🌙 Dark Mode";
}


if(themeToggle) {
    
    themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {

        themeToggle.innerHTML = "☀️ Light Mode";
        localStorage.setItem("theme", "light");

    } else {

        themeToggle.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme", "dark");

    }

})
};

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

    if (mobileMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("show");

        menuBtn.innerHTML = "☰";
    });
});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.925;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================================
// CURSOR SPOTLIGHT
// ================================

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

const ring = document.querySelector('.cursor-ring');
const dot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {

    if(dot){

        dot.style.left =
            e.clientX + 'px';

        dot.style.top =
            e.clientY + 'px';

    }

    if(ring){

        ring.style.left =
            e.clientX + 'px';

        ring.style.top =
            e.clientY + 'px';

    }

});

const links = document.querySelectorAll('a, button');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        ring.classList.add('hover');
    });

    link.addEventListener('mouseleave', () => {
        ring.classList.remove('hover');
    });
});

// ================================
// HERO IMAGE 3D TILT
// ================================

const profileCard = document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener("mousemove", (e) => {

        const rect = profileCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 8;
        const rotateX = -((y - centerY) / centerY) * 8;

        profileCard.style.transform = `
            perspective(600px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });

    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform = `
            perspective(600px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

}

if (window.matchMedia("(pointer: fine)").matches) {
    // Cursor effect code here
}

// ================================
// FLOATING ANIMATION
// ================================

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    let offset = index * 1000;

    function animate() {

        const time = Date.now() / 1000;

        const movement = Math.sin(time + offset) * 8;

        card.style.transform = `translateY(${movement}px)`;

        requestAnimationFrame(animate);

    }

    animate();

});

// ================================
// PARALLAX HERO EFFECT
// ================================

const heroImageContainer =
    document.querySelector(".hero-image-container");

window.addEventListener("scroll", () => {

    if (!heroImageContainer) return;

    const scrollY = window.scrollY;

    heroImageContainer.style.transform =
        `translateY(${scrollY * 0.08}px)`;

});

const musicBtn = document.getElementById("music-toggle");
const musicText = document.getElementById("musicText");
const soundtrack = document.getElementById("soundtrack");
const musicEq = document.getElementById("musicEq");

musicBtn.addEventListener("click", () => {

    if (soundtrack.paused) {
        soundtrack.play();
        musicEq.classList.add("active");
        musicText.textContent ="♫ Playing";
        musicBtn.classList.add("playing");
    } else {
        soundtrack.pause();
        musicEq.classList.remove("active");
        musicText.textContent = "♫ Soundtrack";
        musicBtn.classList.remove("playing");
    }

    });

    soundtrack.addEventListener("ended", () => {
        musicEq.classList.remove("active");
        musicText.textContent = "♫ Soundtrack";
        musicBtn.classList.remove("playing");
    });

// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ================================
// ACTIVE NAV LINK
// ================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active-link");
        }

    });

});

const phrases = [
    "The long game is the only game.",
    "Building one chapter at a time.",
    "Learning through experience.",
    "Documenting the journey."
];

let phraseIndex = 0;
let charIndex = 0;

const typewriter =
    document.getElementById("typewriter");

function typeText() {

    const current =
        phrases[phraseIndex];

    typewriter.textContent =
        current.substring(0, charIndex);

    charIndex++;

    if (charIndex <= current.length) {

        setTimeout(typeText, 60);

    } else {

        setTimeout(() => {

            charIndex = 0;

            phraseIndex =
                (phraseIndex + 1) %
                phrases.length;

            typeText();

        }, 2000);

    }

}

typeText();

const currentHour =
    new Date().getHours();

if (!localStorage.getItem("theme")) {

    if (
        currentHour >= 7 &&
        currentHour < 19
    ) {

        document.body.classList.add("light");

    }

}

// ================================
// FUTURE READY
// ================================

// Reserved for:
// - Build Logs JSON
// - Field Notes JSON
// - Visitor Counter
// - Reading Status
// - Theme Sync
// - Analytics

/*
console.log(
    "Digital Headquarters Initialized 🚀"
);
*/