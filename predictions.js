/* =========================================
   AI PREDICTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    const forecastCanvas =
        document.getElementById("salesForecastChart");


    if (!forecastCanvas) {
        return;
    }


    new Chart(forecastCanvas, {

        type: "line",


        data: {

            labels: [

                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"

            ],


            datasets: [


                /* HISTORICAL */

                {

                    label: "Actual Sales",

                    data: [

                        520000,
                        550000,
                        580000,
                        610000,
                        640000,
                        680000,
                        720000,
                        760000,
                        null,
                        null,
                        null,
                        null

                    ],

                    borderColor: "#6c5ce7",

                    backgroundColor: "rgba(108,92,231,0.08)",

                    borderWidth: 2,

                    tension: 0.4,

                    fill: true,

                    pointRadius: 3

                },


                /* PREDICTION */

                {

                    label: "Predicted Sales",

                    data: [

                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        760000,
                        790000,
                        820000,
                        850000,
                        890000

                    ],

                    borderColor: "#20b486",

                    backgroundColor: "rgba(32,180,134,0.06)",

                    borderWidth: 2,

                    borderDash: [6, 5],

                    tension: 0.4,

                    fill: true,

                    pointRadius: 3

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            interaction: {

                mode: "index",

                intersect: false

            },


            plugins: {

                legend: {

                    position: "top",

                    align: "end",

                    labels: {

                        boxWidth: 10,

                        padding: 15,

                        font: {

                            size: 9

                        }

                    }

                }

            },


            scales: {

                y: {

                    beginAtZero: false,


                    ticks: {

                        font: {

                            size: 9

                        },


                        callback: function(value) {

                            return "₹" +
                                (value / 100000) +
                                "L";

                        }

                    },


                    grid: {

                        color: "#f0f0f3"

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


});