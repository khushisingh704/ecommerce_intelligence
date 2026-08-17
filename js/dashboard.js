// =========================================
// E-COMMERCE INTELLIGENCE DASHBOARD
// =========================================


// =========================================
// API URL
// =========================================

const API_URL = "http://127.0.0.1:5000";


// =========================================
// FORMAT CURRENCY
// =========================================

function formatCurrency(value) {

    return new Intl.NumberFormat("en-IN", {

        style: "currency",

        currency: "INR",

        maximumFractionDigits: 0

    }).format(value);

}


// =========================================
// FORMAT NUMBER
// =========================================

function formatNumber(value) {

    return new Intl.NumberFormat("en-IN")
        .format(value);

}


// =========================================
// LOAD SUMMARY
// =========================================

async function loadSummary() {

    try {

        const response = await fetch(
            `${API_URL}/api/summary`
        );


        if (!response.ok) {

            throw new Error(
                "Unable to fetch summary data"
            );

        }


        const data = await response.json();


        console.log(
            "Summary data:",
            data
        );


        // Find dashboard cards

        const revenueElement =
            document.getElementById(
                "totalRevenue"
            );


        const ordersElement =
            document.getElementById(
                "totalOrders"
            );


        const customersElement =
            document.getElementById(
                "totalCustomers"
            );


        const averageElement =
            document.getElementById(
                "averageOrderValue"
            );


        // Update values

        if (revenueElement) {

            revenueElement.textContent =
                formatCurrency(
                    data.total_revenue
                );

        }


        if (ordersElement) {

            ordersElement.textContent =
                formatNumber(
                    data.total_orders
                );

        }


        if (customersElement) {

            customersElement.textContent =
                formatNumber(
                    data.total_customers
                );

        }


        if (averageElement) {

            averageElement.textContent =
                formatCurrency(
                    data.average_order_value
                );

        }


    } catch (error) {

        console.error(
            "Summary API error:",
            error
        );

    }

}


// =========================================
// LOAD MONTHLY SALES
// =========================================

async function loadMonthlySales() {

    try {

        const response = await fetch(
            `${API_URL}/api/monthly-sales`
        );


        if (!response.ok) {

            throw new Error(
                "Unable to fetch monthly sales"
            );

        }


        const data = await response.json();


        console.log(
            "Monthly sales:",
            data
        );


        // Get chart canvas

        const chartCanvas =
            document.getElementById(
                "revenueChart"
            );


        if (!chartCanvas) {

            console.error(
                "Revenue chart canvas not found."
            );

            return;

        }


        // Create labels

        const labels = data.map(
            item => item.month
        );


        // Create revenue values

        const revenueValues = data.map(
            item => item.revenue
        );


        // Create Chart.js chart

        new Chart(

            chartCanvas,

            {

                type: "line",

                data: {

                    labels: labels,

                    datasets: [

                        {

                            label: "Revenue",

                            data: revenueValues,

                            tension: 0.4,

                            fill: true

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

                            beginAtZero: true

                        }

                    }

                }

            }

        );


    } catch (error) {

        console.error(
            "Monthly sales API error:",
            error
        );

    }

}


// =========================================
// LOAD PRODUCTS
// =========================================

async function loadProducts() {

    try {

        const response = await fetch(
            `${API_URL}/api/products`
        );


        const data =
            await response.json();


        console.log(
            "Products:",
            data
        );


    } catch (error) {

        console.error(
            "Products API error:",
            error
        );

    }

}


// =========================================
// LOAD CATEGORIES
// =========================================

async function loadCategories() {

    try {

        const response = await fetch(
            `${API_URL}/api/categories`
        );


        const data =
            await response.json();


        console.log(
            "Categories:",
            data
        );


    } catch (error) {

        console.error(
            "Categories API error:",
            error
        );

    }

}


// =========================================
// INITIALIZE DASHBOARD
// =========================================

async function initializeDashboard() {

    console.log(
        "Initializing E-commerce Intelligence Dashboard..."
    );


    await loadSummary();

    await loadMonthlySales();

    await loadProducts();

    await loadCategories();


    console.log(
        "Dashboard data loaded successfully."
    );

}


// =========================================
// START
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    initializeDashboard
);
