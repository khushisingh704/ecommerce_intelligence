/* =========================================
   CUSTOMER INTELLIGENCE
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       CUSTOMER SEGMENTATION CHART
    ===================================== */

    const chartCanvas =
        document.getElementById("customerSegmentChart");


    if (chartCanvas) {

        new Chart(chartCanvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Champions",
                    "Loyal",
                    "New",
                    "At Risk",
                    "Churn Risk"
                ],

                datasets: [

                    {

                        data: [
                            24,
                            31,
                            15,
                            18,
                            12
                        ],

                        backgroundColor: [
                            "#6c5ce7",
                            "#4b8df8",
                            "#20b486",
                            "#f4b740",
                            "#e85d75"
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

                            padding: 14,

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
       CUSTOMER SEARCH
    ===================================== */

    const searchInput =
        document.getElementById("customerSearch");

    const segmentFilter =
        document.getElementById("segmentFilter");

    const customerRows =
        document.querySelectorAll("#customerTable tbody tr");


    function filterCustomers() {

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();


        const selectedSegment =
            segmentFilter.value;


        customerRows.forEach(row => {

            const customerName =
                row.dataset.name.toLowerCase();


            const customerSegment =
                row.dataset.segment;


            const matchesSearch =
                customerName.includes(searchValue);


            const matchesSegment =
                selectedSegment === "all" ||
                customerSegment === selectedSegment;


            if (
                matchesSearch &&
                matchesSegment
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    }


    /* Search */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterCustomers
        );

    }


    /* Segment Filter */

    if (segmentFilter) {

        segmentFilter.addEventListener(
            "change",
            filterCustomers
        );

    }

});
