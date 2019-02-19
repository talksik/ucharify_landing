
var ctx = document.getElementById("gdpChart");

var gdpChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1970", "1980", "1990", "2000", "2010", "2020"],
        datasets: [{
            label: 'Percent of U.S. GDP involving Giving',
            data: [2, 4, 1, 6, 4, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 100
                }
            }]
        },
        legend: {
            labels: {
                defaultFontSize: 200
            }
        }
    }
});

var ctx_doughnut = document.getElementById("distributionChart");
var data_doughnut = {
    datasets: [{
        label: "Spending in sectors (billions)",
        data: [40, 20, 30],
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Hunger',
        'Education',
        'Disaster'
    ]
};

var myDoughnutChart = new Chart(ctx_doughnut, {
    type: 'doughnut',
    data: data_doughnut,
    options: {
        title: {
          display: true,
          text: 'Spending in different sectors (billions)'
        }
      }
});