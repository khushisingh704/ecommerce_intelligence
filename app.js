/* =========================================
   APP.JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.querySelector(".sidebar");

    /*
     * Mobile sidebar
     */

    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", () => {

            sidebar.classList.toggle("open");

        });

    }


    /*
     * Close sidebar when clicking a navigation link
     * on mobile.
     */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                sidebar.classList.remove("open");

            }

        });

    });


    /*
     * Export button
     */

    const exportBtn = document.getElementById("exportBtn");

    if (exportBtn) {

        exportBtn.addEventListener("click", () => {

            alert("Report export feature will be connected later.");

        });

    }


    /*
     * Date filter
     */

    const dateFilter = document.getElementById("dateFilter");

    if (dateFilter) {

        dateFilter.addEventListener("change", (event) => {

            console.log(
                "Selected period:",
                event.target.value,
                "days"
            );

        });

    }

});