// ai

// Language toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    const langButtons = document.querySelectorAll(".lang-btn");
    const currentPage = window.location.pathname;

    // Determine current language based on the page
    const currentLang = currentPage.includes("en.html") ? "en" : "fr";

    // Update active button state on page load
    langButtons.forEach((btn) => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Add click event listeners to language buttons
    langButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const targetLang = this.dataset.lang;

            // Don't reload if already on the correct language
            if (targetLang === currentLang) {
                return;
            }

            // Determine target page
            let targetPage;
            if (targetLang === "fr") {
                targetPage = "index.html";
            } else if (targetLang === "en") {
                targetPage = "en.html";
            }

            // Navigate to the target page
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});
