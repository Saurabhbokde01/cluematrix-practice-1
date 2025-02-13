document.addEventListener("DOMContentLoaded", function () {
    const domainServices = document.querySelector(".domain-services");
    const services = Array.from(document.querySelectorAll(".service"));
    let currentIndex = 0;
    const visibleCount = 3; // Show only 3 services at a time

    function slideServices() {
        // Slide the first service out smoothly
        services[currentIndex].style.transform = "translateX(-120%)";
        services[currentIndex].style.opacity = "0";

        setTimeout(() => {
            // Move the first service to the end
            domainServices.appendChild(services[currentIndex]);

            // Reset its style
            services[currentIndex].style.transform = "translateX(0)";
            services[currentIndex].style.opacity = "1";

            // Update index
            currentIndex = (currentIndex + 1) % services.length;
        }, 600); // Matches the transition duration
    }

    // Auto slide every 3 seconds
    setInterval(slideServices, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-trust");
    const trusts = document.querySelectorAll(".slider-trust div");
    let trustWidth = trusts[0].offsetWidth + 20; // Includes margin gap
    let currentIndex = 0;

    function slideTrusts() {
        slider.style.transition = "transform 0.8s ease-in-out"; // Smoother transition
        slider.style.transform = `translateX(-${trustWidth}px)`;

        setTimeout(() => {
            // Move first trust to the end without noticeable reset
            slider.appendChild(slider.firstElementChild);
            
            // Reset transformation for seamless transition
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
        }, 800); // Matches transition duration
    }

    // Auto slide every 2.5 seconds
    setInterval(slideTrusts, 2500);
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Open Sidebar
    menuBtn.addEventListener("click", function () {
        sidebar.classList.add("show");
    });

    // Close Sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("show");
        }
    });
});


