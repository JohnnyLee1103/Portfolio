let mybutton = document.getElementById("btn-back-to-top");
let ticking = false; // Flag to prevent excessive function calls

// Optimized scroll event listener
window.addEventListener("scroll", function () {
    if (!ticking) {
        requestAnimationFrame(() => {
            scrollFunction();
            ticking = false;
        });
        ticking = true;
    }
});

function scrollFunction() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Only change the style if necessary
    if (scrollTop > 20 && mybutton.style.display !== "block") {
        mybutton.style.display = "block";
    } else if (scrollTop <= 20 && mybutton.style.display !== "none") {
        mybutton.style.display = "none";
    }
}

// Back to top button functionality
mybutton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optimized smooth scroll for "scroll down" link
const scrollDownLink = document.getElementById('scroll-down-link');
scrollDownLink.addEventListener('click', function (e) {
    e.preventDefault();
    
    const content = document.getElementById('content');
    const destination = content.getBoundingClientRect().top + window.scrollY + window.innerHeight;

    window.scrollTo({ top: destination, behavior: 'smooth' });
});
