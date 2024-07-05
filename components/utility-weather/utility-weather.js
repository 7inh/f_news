Highcharts.chart('container-chart', {
  chart: {
    type: 'areaspline',
    zooming: {
      type: 'xy',
    },
  },
  title: {
    text: 'Dự báo thời tiết',
  },
  xAxis: {
    categories: ['17:00', '20:00', '23:00', '02:00', '05:00', '09:00'],
    crosshair: true,
    title: {
      text: 'Time',
    },
  },
  yAxis: {
    title: {
      text: 'Nhiệt độ (°C)',
    },
  },
  plotOptions: {
    areaspline: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, 'rgba(253, 214, 99, 0.4)'],
          [1, 'rgba(255, 214, 99, 0.5)'],
        ],
      },
      marker: {
        radius: 5,
      },
      lineWidth: 3,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  series: [
    {
      name: 'Nhiệt độ',
      data: [0, 30, 20, 15, 5, 35],
      tooltip: {
        valueSuffix: ' độ C',
      },
      color: '#FFCC02',
      dataLabels: {
        enabled: true,
        format: '{y}°C',
        style: {
          color: 'gray',
          fontWeight: 'bold',
          textOutline: 'none',
        },
        y: -10,
      },
    },
  ],
});
