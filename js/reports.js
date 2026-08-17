/* =========================================
   REPORTS
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       PERFORMANCE CHART
    ===================================== */

    const canvas =
        document.getElementById("reportPerformanceChart");


    if (canvas) {

        new Chart(canvas, {

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

                    {

                        label: "Revenue",

                        data: [

                            280000,
                            310000,
                            340000,
                            370000,
                            390000,
                            420000,
                            450000,
                            486000,
                            510000,
                            540000,
                            580000,
                            620000

                        ],

                        borderColor: "#6c5ce7",

                        backgroundColor:
                            "rgba(108,92,231,0.08)",

                        fill: true,

                        tension: 0.4,

                        borderWidth: 2,

                        pointRadius: 3

                    },


                    {

                        label: "Orders",

                        data: [

                            420,
                            460,
                            490,
                            520,
                            550,
                            590,
                            620,
                            680,
                            710,
                            750,
                            790,
                            840

                        ],

                        borderColor: "#20b486",

                        backgroundColor:
                            "rgba(32,180,134,0.05)",

                        fill: false,

                        tension: 0.4,

                        borderWidth: 2,

                        pointRadius: 3,

                        yAxisID: "ordersAxis"

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

                        beginAtZero: true,

                        grid: {

                            color: "#f0f0f3"

                        },

                        ticks: {

                            font: {

                                size: 9

                            },

                            callback: function(value) {

                                return "₹" +
                                    (value / 100000) +
                                    "L";

                            }

                        }

                    },


                    ordersAxis: {

                        position: "right",

                        beginAtZero: true,

                        grid: {

                            display: false

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
       PRINT REPORT
    ===================================== */

    const printButton =
        document.getElementById("printReportBtn");


    if (printButton) {

        printButton.addEventListener(
            "click",
            () => {

                window.print();

            }
        );

    }



    /* =====================================
       DOWNLOAD REPORT
    ===================================== */

    const downloadButton =
        document.getElementById("downloadReportBtn");


    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                const reportText = `

ECOM INTELLIGENCE
BUSINESS PERFORMANCE REPORT

Business Health Score: 86/100

Total Revenue: ₹48.6L
Total Orders: 8,642
Total Customers: 3,642
Average Order Value: ₹5,624

Customer Retention: 72.4%

Key Recommendations:

1. Focus on Electronics.
2. Improve Customer Retention.
3. Monitor Inventory.
4. Use AI Forecasts.

                `;


                const blob = new Blob(
                    [reportText],
                    {
                        type: "text/plain"
                    }
                );


                const url =
                    URL.createObjectURL(blob);


                const link =
                    document.createElement("a");


                link.href = url;

                link.download =
                    "ecom-intelligence-report.txt";


                link.click();


                URL.revokeObjectURL(url);

            }
        );

    }

});
