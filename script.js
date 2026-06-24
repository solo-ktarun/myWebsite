/* ==========================================================
   DIGITAL HEADQUARTERS
   TARUN KUMAR
========================================================== */


/* ==========================================================
   GSAP
========================================================== */

gsap.registerPlugin(ScrollTrigger);


/* ==========================================================
   GLOBAL
========================================================== */

const body = document.body;

const loader = document.querySelector(".loader");

const header = document.querySelector(".header");

const hero = document.querySelector(".hero");

const heroImage = document.querySelector(".hero-image");

const heroImageContainer =
document.querySelector(".hero-image-container");

const cursor = document.querySelector(".cursor");

const cursorDot =
document.querySelector(".cursor-dot");

const cursorRing =
document.querySelector(".cursor-ring");

const progress =
document.querySelector(".scroll-progress-bar");

const themeToggle =
document.querySelector(".theme-toggle");

const musicButton =
document.getElementById("music-toggle");

const soundtrack =
document.getElementById("soundtrack");


/* ==========================================================
   SPLIT TYPE
========================================================== */

const splitHero = new SplitType(

    ".hero-title",

    {

        types:"lines"

    }

);

const splitMission = new SplitType(

    ".mission-title",

    {

        types:"lines"

    }

);


/* ==========================================================
   LENIS
========================================================== */

const lenis = new Lenis({

    autoRaf: false,

    duration: 1.15,

    smoothWheel: true,

    wheelMultiplier: 1,

    touchMultiplier: 1

});


/* ==========================================================
   GSAP + LENIS
========================================================== */

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time)=>{

    lenis.raf(time * 1000);

});

gsap.ticker.lagSmoothing(0);

/* ==========================================================
   SCROLLTRIGGER PROXY
========================================================== */

ScrollTrigger.defaults({

    scroller: document.documentElement

});

ScrollTrigger.config({

    ignoreMobileResize: true

});

/* ==========================================================
   MASTER TIMELINE
========================================================== */

const master = gsap.timeline({

    defaults:{
        ease:"power3.out"
    }

});


/* ==========================================================
   INITIAL STATES
========================================================== */

gsap.set(".loader-logo",{

    y:40,
    opacity:0

});

gsap.set(".loader-tagline",{

    y:20,
    opacity:0

});

gsap.set(".loader-progress-bar",{

    width:"0%"

});


gsap.set(".navbar",{

    y:-80,
    opacity:0

});


gsap.set(".hero-eyebrow",{

    y:30,
    opacity:0

});


gsap.set(".title-line",{

    yPercent:110

});


gsap.set(".hero-description",{

    y:40,
    opacity:0

});


gsap.set(".hero-quote",{

    y:30,
    opacity:0

});


gsap.set(".stat-card",{

    y:40,
    opacity:0

});


gsap.set(".hero-actions .btn",{

    y:30,
    opacity:0

});


gsap.set(".hero-image-mask",{

    scale:1.18,
    opacity:0

});


gsap.set(".hero-glow",{

    opacity:0

});


gsap.set(".floating",{

    opacity:0,
    y:20

});


gsap.set(".scroll-indicator",{

    opacity:0,
    y:20

});


/* ==========================================================
   LOADER
========================================================== */

master

.to(".loader-logo",{

    y:0,
    opacity:1,
    duration:.9

})

.to(".loader-tagline",{

    y:0,
    opacity:1,
    duration:.6

},"-=.45")

.to(".loader-progress-bar",{

    width:"100%",
    duration:1.3,
    ease:"power2.inOut"

},"-=.2")

.to(".loader-content",{

    y:-40,
    opacity:0,
    duration:.8

},"+=.4")

.to(".loader",{

    opacity:0,
    duration:.8,

    onComplete(){

        loader.remove();

        initApp();

        ScrollTrigger.refresh();

    }

},"-=.2");


/* ==========================================================
   HERO
========================================================== */

master

.to(".navbar",{

    y:0,
    opacity:1,
    duration:.8

},"-=.4")

.to(".hero-eyebrow",{

    y:0,
    opacity:1,
    duration:.6

},"-=.45")

.to(".title-line",{

    yPercent:0,

    duration:1,

    stagger:.12

},"-=.25")

.to(".hero-description",{

    y:0,
    opacity:1,

    duration:.7

},"-=.55")

.to(".hero-quote",{

    y:0,
    opacity:1,

    duration:.6

},"-=.45")

.to(".stat-card",{

    y:0,
    opacity:1,

    duration:.55,

    stagger:.12

},"-=.4")

.to(".hero-actions .btn",{

    y:0,
    opacity:1,

    duration:.55,

    stagger:.08

},"-=.35")

.to(".hero-image-mask",{

    scale:1,
    opacity:1,

    duration:1.2,

    ease:"power4.out"

},"-=1")

.to(".hero-glow",{

    opacity:1,

    duration:1

},"-=.9")

.to(".floating",{

    opacity:1,
    y:0,

    duration:.7,

    stagger:.1

},"-=.75")

.to(".scroll-indicator",{

    opacity:1,
    y:0,

    duration:.6

},"-=.3");

/* ==========================================================
   AMBIENT ANIMATIONS
========================================================== */

function initAmbientAnimations(){

    /* ==========================================
       Background
    ========================================== */

    gsap.to(".gradient-1",{

        x:120,
        y:-80,

        duration:18,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".gradient-2",{

        x:-150,
        y:100,

        duration:22,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".gradient-3",{

        x:80,
        y:120,

        duration:20,

        yoyo:true,

        ease:"sine.inOut"

    });


    /* ==========================================
       SVG Rings
    ========================================== */

    gsap.to(".ring-1",{

        rotation:360,

        duration:40,

        ease:"none",

        transformOrigin:"50% 50%"

    });

    gsap.to(".ring-2",{

        rotation:-360,

        duration:65,

        ease:"none",

        transformOrigin:"50% 50%"

    });

    gsap.to(".ring-3",{

        rotation:360,

        duration:90,

        ease:"none",

        transformOrigin:"50% 50%"

    });


    /* ==========================================
       Glow Pulse
    ========================================== */

    gsap.to(".hero-glow",{

        scale:1.15,

        opacity:.25,

        duration:4,

        yoyo:true,

        ease:"sine.inOut"

    });


    /* ==========================================
       Hero Float
    ========================================== */

    gsap.to(".hero-image-container",{

        y:-15,

        duration:5,

        yoyo:true,

        ease:"sine.inOut"

    });


    /* ==========================================
       Floating Labels
    ========================================== */

    gsap.to(".floating-left",{

        y:-14,

        rotation:-2,

        duration:4,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".floating-right",{

        y:16,

        rotation:2,

        duration:5,

        yoyo:true,

        ease:"sine.inOut"

    });


    /* ==========================================
       Hero Particles
    ========================================== */

    gsap.utils.toArray(".hero-particles span")

    .forEach((particle)=>{

        gsap.to(particle,{

            x:"random(-40,40)",

            y:"random(-40,40)",

            scale:"random(.6,1.6)",

            opacity:"random(.2,1)",

            duration:"random(3,6)",


            yoyo:true,

            ease:"sine.inOut"

        });

    });


    /* ==========================================
       Scroll Indicator
    ========================================== */

    gsap.to(".scroll-wheel",{

        y:14,

        opacity:0,

        duration:1.2,

        ease:"power1.in"

    });

}

/* ==========================================================
   PREMIUM CURSOR
========================================================== */

function initCursor(){

    if(window.innerWidth <= 768) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let previousX = mouseX;
    let previousY = mouseY;

    const speed = 0.18;

    /* ==========================================
       Mouse Position
    ========================================== */

    window.addEventListener("mousemove",(e)=>{

        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.set(cursorDot,{
            x:mouseX,
            y:mouseY
        });

    });

    /* ==========================================
       Smooth Follow
    ========================================== */

    gsap.ticker.add(()=>{

        ringX += (mouseX-ringX)*speed;
        ringY += (mouseY-ringY)*speed;

        const velocityX = mouseX-previousX;
        const velocityY = mouseY-previousY;

        const velocity = Math.min(
            Math.sqrt(
                velocityX*velocityX +
                velocityY*velocityY
            ),
            40
        );

        previousX = mouseX;
        previousY = mouseY;

        const stretch = gsap.utils.mapRange(
            0,
            40,
            1,
            1.45,
            velocity
        );

        const angle = Math.atan2(
            velocityY,
            velocityX
        ) * 180 / Math.PI;

        gsap.set(cursorRing,{

            x:ringX,
            y:ringY,

            rotation:angle,

            scaleX:stretch,

            scaleY:1/stretch

        });

    });

    /* ==========================================
       Hover Targets
    ========================================== */

    const hoverTargets = document.querySelectorAll(

        "a, button, .card, .focus-card, .os-card, .note-card, .log-card, .principle-card"

    );

    hoverTargets.forEach((item)=>{

        item.addEventListener("mouseenter",()=>{

            cursor.classList.add("active");

            gsap.to(cursorRing,{

                width:80,
                height:80,

                duration:.25

            });

        });

        item.addEventListener("mouseleave",()=>{

            cursor.classList.remove("active");

            gsap.to(cursorRing,{

                width:44,
                height:44,

                duration:.25

            });

        });

    });

    /* ==========================================
       Mouse Down
    ========================================== */

    window.addEventListener("mousedown",()=>{

        gsap.to(cursorRing,{

            scale:.75,

            duration:.1,

            yoyo:true,

            repeat:1

        });

    });

}

/* ==========================================================
   MAGNETIC BUTTONS
========================================================== */

function initMagneticButtons() {

    const buttons = document.querySelectorAll(".magnetic");

    buttons.forEach((button) => {

        const moveX = gsap.quickTo(button, "x", {
            duration: 0.35,
            ease: "power2.out"
        });

        const moveY = gsap.quickTo(button, "y", {
            duration: 0.35,
            ease: "power2.out"
        });

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x =
                e.clientX - rect.left - rect.width / 2;

            const y =
                e.clientY - rect.top - rect.height / 2;

            moveX(x * 0.22);
            moveY(y * 0.22);

        });

        button.addEventListener("mouseleave", () => {

            moveX(0);
            moveY(0);

        });

    });

}

/* ==========================================================
   HERO PARALLAX
========================================================== */

function initHeroParallax() {

    const moveX = gsap.quickTo(heroImageContainer, "x", {
        duration: 0.6,
        ease: "power3.out"
    });

    const moveY = gsap.quickTo(heroImageContainer, "y", {
        duration: 0.6,
        ease: "power3.out"
    });

    const rotateX = gsap.quickTo(heroImageContainer, "rotationX", {
        duration: 0.6,
        ease: "power3.out"
    });

    const rotateY = gsap.quickTo(heroImageContainer, "rotationY", {
        duration: 0.6,
        ease: "power3.out"
    });

    const glowX = gsap.quickTo(".hero-glow", "x", {
        duration: 1,
        ease: "power3.out"
    });

    const glowY = gsap.quickTo(".hero-glow", "y", {
        duration: 1,
        ease: "power3.out"
    });

    hero.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        moveX(x * 20);
        moveY(y * 20);

        rotateY(x * 10);
        rotateX(-y * 10);

        glowX(x * 60);
        glowY(y * 60);

    });

}

/* ==========================================================
   SCROLLTRIGGER ENGINE
========================================================== */

function initScrollAnimations(){

    /* ==========================================
       Section Headings
    ========================================== */

    gsap.utils.toArray(".section-heading").forEach((heading)=>{

        const title = heading.querySelector(".section-title");
        const tag = heading.querySelector(".section-tag");
        const desc = heading.querySelector(".section-description");

        const tl = gsap.timeline({

            scrollTrigger:{
                trigger:heading,
                start:"top 80%",
                toggleActions:"play none none reverse"
            }

        });

        if(tag){

            tl.from(tag,{
                y:20,
                opacity:0,
                duration:.45
            });

        }

        if(title){

            tl.from(title,{
                y:60,
                opacity:0,
                duration:.7
            },"-=.2");

        }

        if(desc){

            tl.from(desc,{
                y:25,
                opacity:0,
                duration:.6
            },"-=.35");

        }

    });

    /* ==========================================
       Cards
    ========================================== */

    gsap.utils.toArray(
        ".focus-grid,.os-grid,.logs-grid,.notes-grid,.principles-grid"
    ).forEach((grid)=>{

        gsap.from(grid.children,{

            y:80,
            opacity:0,
            scale:.94,

            stagger:.12,

            duration:.8,

            ease:"power3.out",

            scrollTrigger:{
                trigger:grid,
                start:"top 75%"
            }

        });

    });

    /* ==========================================
       Contact
    ========================================== */

    gsap.from(".contact-content",{

        y:100,
        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".contact",
            start:"top 70%"
        }

    });

    /* ==========================================
       Footer
    ========================================== */

    gsap.from(".footer-content",{

        y:50,
        opacity:0,

        duration:.9,

        scrollTrigger:{
            trigger:"footer",
            start:"top 90%"
        }

    });

}

/* ==========================================================
   MISSION
========================================================== */

function initMission(){

    const lines = document.querySelectorAll(
        ".mission-title .line"
    );

    const tl = gsap.timeline({

        scrollTrigger:{

            trigger:".mission",

            start:"top top",

            end:"+=150%",

            scrub:4,

            pin:true

        }

    });

    tl.from(lines,{

        yPercent:120,

        opacity:0,

        stagger:.15

    });

    tl.to(".mission",{

        backgroundColor:"#101018"

    },0);

    tl.to(".mission-title",{

        scale:1.08

    },0);

}

/* ==========================================================
   CHAPTERS
========================================================== */

function initChapters(){

    gsap.utils.toArray(".chapter").forEach((chapter)=>{

        const image = chapter.querySelector(".chapter-image");
        const content = chapter.querySelector(".chapter-content");
        const marker = chapter.querySelector(".chapter-marker");

        const tl = gsap.timeline({

            scrollTrigger:{

                trigger:chapter,

                start:"top 70%",

                end:"bottom 60%",

                scrub:4

            }

        });

        if(marker){

            tl.from(marker,{

                scale:0,

                opacity:0,

                duration:.4

            });

        }

        if(image){

            tl.from(image,{

                x:-100,

                opacity:0,

                scale:1.15,

                duration:1

            },0);

        }

        if(content){

            tl.from(content,{

                x:100,

                opacity:0,

                duration:1

            },0);

        }

    });

}

/* ==========================================================
   JOURNEY
========================================================== */

function initJourney(){

    gsap.from(".timeline-item",{

        y:60,

        opacity:0,

        stagger:.25,

        duration:.8,

        scrollTrigger:{

            trigger:".journey",

            start:"top 70%"

        }

    });

}

function initNavigation(){

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(section=>{

        ScrollTrigger.create({

            trigger:section,

            start:"top center",

            end:"bottom center",

            onEnter(){

                update(section.id);

            },

            onEnterBack(){

                update(section.id);

            }

        });

    });

    function update(id){

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + id){

                link.classList.add("active");

            }

        });

    }

}

function initNavbar(){

const navbar = document.querySelector(".navbar");

ScrollTrigger.create({

    start:10,

    onToggle:self=>{

        gsap.to(navbar,{

            scale:self.isActive ? .92 : 1,

            height:self.isActive ? 62 : 72,

            duration:.35,

            overwrite:true

        });

    }

});

}

gsap.to(".scroll-progress-bar",{

    width:"100%",

    ease:"none",

    scrollTrigger:{

        scrub:true

    }

});

function initTheme(){

    themeToggle.addEventListener("click",()=>{

        body.classList.toggle("light");

        gsap.fromTo(

            body,

            {

                opacity:.96

            },

            {

                opacity:1,

                duration:.35

            }

        );

    });

}

function initMusic(){

    let playing=false;

    musicButton.addEventListener("click",()=>{

        if(!playing){

            soundtrack.volume=0;

            soundtrack.play();

            gsap.to(soundtrack,{

                volume:.35,

                duration:1.5

            });

        }

        else{

            gsap.to(soundtrack,{

                volume:0,

                duration:1,

                onComplete(){

                    soundtrack.pause();

                }

            });

        }

        playing=!playing;

        document

            .querySelector(".music-equalizer")

            .classList

            .toggle("active");

    });

}

function initApp(){

    initAmbientAnimations();

    initCursor();

    initMagneticButtons();

    initHeroParallax();

    initScrollAnimations();

    initMission();

    initChapters();

    initJourney();

    initNavigation();

    initNavbar();

    initTheme();

    initMusic();

}