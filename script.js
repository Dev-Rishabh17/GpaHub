

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header')
const subjectBoxes = document.querySelectorAll('.subjects-box');


document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    } else {
        console.error('Menu icon or navbar element not found in the DOM.');
    }
});


let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }
        });

        
        header.classList.toggle('sticky', window.scrollY > 100);
    }, 100); 
});


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


if (document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: [' बस पास हो जाऊ', '8+ CGPA', '9+ CGPA'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
}


if (document.querySelector('.multiple-text-about')) {
    const typedAbout = new Typed('.multiple-text-about', {
        strings: ['Full Stack Developer', 'Competitive Programmer', 'Tech Enthusiast'],  
        typeSpeed: 80, 
        backSpeed: 100, 
        loop: true, 
    });
}

// Scroll Reveal for About Section
function scrollReveal() {
    const aboutSection = document.querySelector('.about');
    const aboutImg = document.querySelector('.about-img');
    const aboutContent = document.querySelector('.about-content');
    
    // Options for the Intersection Observer
    const options = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add reveal class to elements when they come into view
                aboutImg.classList.add('reveal');
                aboutContent.classList.add('reveal');
                
                // Unobserve after animation to prevent retriggering
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Start observing the about section
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}



    
        // Add JavaScript to handle the hover effects
        document.addEventListener('DOMContentLoaded', function() {
            const subjectBoxes = document.querySelectorAll('.subjects-box');
            
            subjectBoxes.forEach(box => {
                // Add index to each list item for staggered animation
                const listItems = box.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    item.style.setProperty('--i', index);
                });
                
                // Mobile fallback - toggle on click
                box.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        this.classList.toggle('active');
                    }
                });
            });
        });

        // Mobile touch handling
document.querySelectorAll('.subjects-box').forEach(box => {
    box.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});
// Scroll Reveal Initialization
ScrollReveal().reveal('.about', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('.about-img', {
    delay: 500,
    duration: 1000,
    scale: 0.9
});

ScrollReveal().reveal('.about-content', {
    delay: 700,
    duration: 1000,
    distance: '30px',
    origin: 'right'
});

/* Add this JavaScript to your script file or in a <script> tag */
document.addEventListener('DOMContentLoaded', function() {
    const subjectBoxes = document.querySelectorAll('.subjects-box');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    subjectBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Close all other open panels first
            document.querySelectorAll('.subjects-box').forEach(b => {
                if (b !== box) b.classList.remove('active');
            });
            
            // Toggle current box
            box.classList.toggle('active');
            overlay.classList.toggle('active', box.classList.contains('active'));
        });
    });
    
    // Close panel when clicking overlay
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.subjects-box').forEach(b => {
            b.classList.remove('active');
        });
        overlay.classList.remove('active');
    });
    
    // Close panel when clicking close button
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.closest('.subjects-box').classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});

// Advanced Interactive Features
document.querySelectorAll('.subjects-box').forEach(box => {
    // Create web threads
    const threads = document.createElement('div');
    threads.className = 'web-threads';
    for(let i = 0; i < 8; i++) {
        const thread = document.createElement('div');
        thread.className = 'thread';
        thread.style.width = `${Math.random() * 50 + 30}px`;
        thread.style.height = `${Math.random() * 2 + 1}px`;
        thread.style.top = `${Math.random() * 100}%`;
        thread.style.left = `${Math.random() * 100}%`;
        thread.style.animationDelay = `${Math.random() * 2}s`;
        threads.appendChild(thread);
    }
    box.appendChild(threads);

    // Create particles
    const particles = document.createElement('div');
    particles.className = 'particles';
    box.appendChild(particles);

    // Mouse position tracking
    let mouseX = 0, mouseY = 0;
    
    box.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - box.getBoundingClientRect().left;
        mouseY = e.clientY - box.getBoundingClientRect().top;
        
        // Parallax effect
        const tiltX = (mouseY - 60) / 10;
        const tiltY = (mouseX - 60) / -10;
        box.querySelector('.letter-container').style.transform = 
            `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        
        // Dynamic particles
        if(particles.children.length < 20) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${mouseX}px`;
            particle.style.top = `${mouseY}px`;
            particle.style.width = `${Math.random() * 4 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
            particles.appendChild(particle);
            
            setTimeout(() => particle.remove(), 3000);
        }
    });

    // Physics-based animation
    let rotation = { x: 0, y: 0 };
    const updateRotation = () => {
        rotation.x += (0 - rotation.x) * 0.1;
        rotation.y += (0 - rotation.y) * 0.1;
        box.querySelector('.letter-container').style.transform = 
            `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
        requestAnimationFrame(updateRotation);
    };
    updateRotation();

    // Hover effects
    box.addEventListener('mouseenter', () => {
        rotation.x = -10;
        rotation.y = 10;
        box.style.zIndex = 100;
    });

    box.addEventListener('mouseleave', () => {
        rotation.x = 0;
        rotation.y = 0;
        box.style.zIndex = 1;
    });

    // Dynamic color adjustment
    box.addEventListener('mousemove', (e) => {
        const hue = (Math.atan2(e.clientY - window.innerHeight/2, 
                              e.clientX - window.innerWidth/2) * 180/Math.PI + 360) % 360;
        box.style.setProperty('--main-color', `hsl(${hue}, 70%, 75%)`);
    });
});

// Interactive background grid
const container = document.querySelector('.subject-container');
for(let i = 0; i < 100; i++) {
    const gridDot = document.createElement('div');
    gridDot.className = 'grid-dot';
    gridDot.style.left = `${Math.random() * 100}%`;
    gridDot.style.top = `${Math.random() * 100}%`;
    gridDot.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(gridDot);
}

// Mobile-First Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        // Touch event for mobile
        menuIcon.addEventListener('touchstart', (e) => {
            e.preventDefault();
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });

        // Click event for desktop fallback
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }
});

// Mobile-Optimized Scroll Handling
let lastScroll = 0;
window.addEventListener('scroll', () => {
    // Mobile-friendly header effect
    const currentScroll = window.scrollY;
    header.classList.toggle('sticky', currentScroll > 100);
    
    // Mobile section detection
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${sec.id}"]`).classList.add('active');
        }
    });

    // Mobile momentum scroll detection
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        // Handle scroll end logic if needed
    }, 100);
});

// Touch-Optimized Subject Boxes
document.addEventListener('DOMContentLoaded', function() {
    const subjectBoxes = document.querySelectorAll('.subjects-box');
    const overlay = document.querySelector('.overlay') || document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    subjectBoxes.forEach(box => {
        // Touch event handling
        box.addEventListener('touchstart', function(e) {
            e.preventDefault();
            document.querySelectorAll('.subjects-box').forEach(b => {
                if (b !== box) b.classList.remove('active');
            });
            box.classList.toggle('active');
            overlay.classList.toggle('active', box.classList.contains('active'));
        });

        // Click fallback for desktop
        box.addEventListener('click', function(e) {
            if (window.innerWidth > 768) {
                document.querySelectorAll('.subjects-box').forEach(b => {
                    if (b !== box) b.classList.remove('active');
                });
                box.classList.toggle('active');
                overlay.classList.toggle('active', box.classList.contains('active'));
            }
        });
    });

    // Overlay touch handling
    overlay.addEventListener('touchstart', function() {
        document.querySelectorAll('.subjects-box').forEach(b => {
            b.classList.remove('active');
        });
        overlay.classList.remove('active');
    });
});

// Mobile-Friendly Animations
if (window.matchMedia("(max-width: 768px)").matches) {
    ScrollReveal().reveal('.about, .about-img, .about-content', {
        reset: false,
        distance: '20px',
        duration: 800,
        delay: 100
    });

    // Simplify particle systems for mobile
    const particleLimit = window.innerWidth < 768 ? 20 : 50;
    document.querySelectorAll('.particles').forEach(container => {
        while (container.children.length > particleLimit) {
            container.lastChild.remove();
        }
    });
}

// Touch-Compatible Physics Effects
document.querySelectorAll('.subjects-box').forEach(box => {
    let touchTimeout;
    
    // Touch interaction
    box.addEventListener('touchstart', function(e) {
        const touch = e.touches[0];
        handleHoverEffects(touch.clientX, touch.clientY);
        
        touchTimeout = setTimeout(() => {
            box.classList.add('long-press');
        }, 500);
    });

    box.addEventListener('touchend', function() {
        clearTimeout(touchTimeout);
        box.classList.remove('long-press');
    });

    box.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        handleHoverEffects(touch.clientX, touch.clientY);
    });

    function handleHoverEffects(x, y) {
        const rect = box.getBoundingClientRect();
        const mouseX = x - rect.left;
        const mouseY = y - rect.top;
        
        // Mobile-optimized parallax
        const tiltX = (mouseY - 60) / 20; // Reduced sensitivity
        const tiltY = (mouseX - 60) / -20;
        const letter = box.querySelector('.letter-container');
        if (letter) {
            letter.style.transform = 
                `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.1)`;
        }
    }
});

// Mobile Viewport Height Fix
function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setVh);
setVh();