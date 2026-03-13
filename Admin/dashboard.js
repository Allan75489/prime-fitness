// Espera a página carregar
document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("graficoAlunos");

    if (ctx) {

        new Chart(ctx, {
            type: "line",

            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],

                datasets: [{
                    label: "Novos alunos",
                    data: [12, 19, 8, 15, 10, 20],

                    borderColor: "#00d4ff",
                    backgroundColor: "rgba(0,212,255,0.2)",
                    tension: 0.3,
                    fill: true
                }]
            },

            options: {
                responsive: true,

                plugins: {
                    legend: {
                        labels: {
                            color: "#e5e7eb"
                        }
                    }
                },

                scales: {
                    x: {
                        ticks: {
                            color: "#9ca3af"
                        }
                    },

                    y: {
                        ticks: {
                            color: "#9ca3af"
                        }
                    }
                }
            }

        });

    }

});