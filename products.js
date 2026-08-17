/* =========================================
   PRODUCT INTELLIGENCE
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       PRODUCT PERFORMANCE CHART
    ===================================== */

    const performanceCanvas =
        document.getElementById("productPerformanceChart");


    if (performanceCanvas) {

        new Chart(performanceCanvas, {

            type: "bar",

            data: {

                labels: [
                    "Headphones",
                    "Smart Watch",
                    "Shoes",
                    "Skin Care",
                    "Coffee Maker"
                ],

                datasets: [

                    {

                        label: "Revenue",

                        data: [
                            1684000,
                            1248000,
                            1036000,
                            784000,
                            572000
                        ],

                        backgroundColor: "#6c5ce7",

                        borderRadius: 6

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: "#f0f0f3"
                        },

                        ticks: {

                            font: {
                                size: 9
                            },

                            callback: function(value) {

                                if (value >= 100000) {

                                    return "₹" +
                                        (value / 100000) +
                                        "L";

                                }

                                return "₹" + value;

                            }

                        }

                    },

                    x: {

                        grid: {
                            display: false
                        },

                        ticks: {

                            font: {
                                size: 9
                            }

                        }

                    }

                }

            }

        });

    }



    /* =====================================
       CATEGORY CHART
    ===================================== */

    const categoryCanvas =
        document.getElementById("productCategoryChart");


    if (categoryCanvas) {

        new Chart(categoryCanvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Electronics",
                    "Fashion",
                    "Home",
                    "Beauty"
                ],

                datasets: [

                    {

                        data: [
                            46,
                            24,
                            17,
                            13
                        ],

                        backgroundColor: [
                            "#6c5ce7",
                            "#4b8df8",
                            "#20b486",
                            "#f4b740"
                        ],

                        borderWidth: 0

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "65%",

                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            boxWidth: 10,

                            padding: 15,

                            font: {
                                size: 9
                            }

                        }

                    }

                }

            }

        });

    }



    /* =====================================
       PRODUCT SEARCH + FILTER
    ===================================== */

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const productRows =
        document.querySelectorAll("#productTable tbody tr");


    function filterProducts() {

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();


        const selectedCategory =
            categoryFilter.value;


        productRows.forEach(row => {


            const productName =
                row.dataset.name.toLowerCase();


            const productCategory =
                row.dataset.category;


            const matchesSearch =
                productName.includes(searchValue);


            const matchesCategory =
                selectedCategory === "all" ||
                productCategory === selectedCategory;


            if (
                matchesSearch &&
                matchesCategory
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProducts
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterProducts
        );

    }


});