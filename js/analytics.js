/* =========================================
   ANALYTICS.JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       REVENUE CHART
    ===================================== */

    const revenueCanvas =
        document.getElementById("analyticsRevenueChart");


    if (revenueCanvas) {

        new Chart(revenueCanvas, {

            type: "line",

            data: {

                labels: [
                    "1 Aug",
                    "5 Aug",
                    "10 Aug",
                    "15 Aug",
                    "20 Aug",
                    "25 Aug",
                    "30 Aug"
                ],

                datasets: [

                    {
                        label: "Revenue",

                        data: [
                            9200,
                            11400,
                            12800,
                            10500,
                            14800,
                            16200,
                            19350
                        ],

                        borderColor: "#6c5ce7",

                        backgroundColor:
                            "rgba(108, 92, 231, 0.08)",

                        borderWidth: 3,

                        fill: true,

                        tension: 0.4,

                        pointRadius: 3,

                        pointHoverRadius: 6

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
       ORDERS CHART
    ===================================== */

    const ordersCanvas =
        document.getElementById("ordersChart");


    if (ordersCanvas) {

        new Chart(ordersCanvas, {

            type: "bar",

            data: {

                labels: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],

                datasets: [

                    {
                        label: "Orders",

                        data: [
                            120,
                            168,
                            142,
                            190,
                            214,
                            260,
                            242
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
        document.getElementById("categoryChart");


    if (categoryCanvas) {

        new Chart(categoryCanvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Electronics",
                    "Fashion",
                    "Home",
                    "Beauty",
                    "Sports"
                ],

                datasets: [

                    {

                        data: [
                            42,
                            21,
                            16,
                            12,
                            9
                        ],

                        backgroundColor: [
                            "#6c5ce7",
                            "#5a9cf5",
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

                cutout: "68%",

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

});
