window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav"); 
    if (window.scrollY > 580 && window.scrollY<1220)
    {
        navbar.classList.add("nav-scrolled");
    }
    else {
        navbar.classList.remove("nav-scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navlinks");
    const menuLinks = document.querySelectorAll(".navlinks ul li a"); 

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("visited")) {
        localStorage.setItem("visited", "true");
        window.location.href = "loader.html";
    } else if (window.location.pathname.includes("loader.html")) {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else {
        localStorage.removeItem("visited");
    }
});
