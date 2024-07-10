// Handle change tabs
const tabs = document.querySelectorAll('.chart__tabs-item');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    document
      .querySelector('.chart__tabs-item.active')
      .classList.remove('active');
    tab.classList.add('active');

    const target = tab.getAttribute('data-tab');

    document
      .querySelector('.chart__view-item.active')
      .classList.remove('active');
    document
      .querySelector('.chart__view-item[data-tab=' + target + ']')
      .classList.add('active');
  });
});

Highcharts.chart('precipitation-chart', {
  chart: {
    type: 'area',
    backgroundColor: '#2b2b2b',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      '15:00',
      '18:00',
      '21:00',
      '00:00',
      '03:00',
      '06:00',
      '09:00',
      '12:00',
    ],
    crosshair: true,
    labels: {
      style: {
        color: 'black',
      },
    },
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: '',
    },
    labels: {
      enabled: false,
    },
    gridLineColor: '#444444',
  },
  tooltip: {
    valueSuffix: '%',
    backgroundColor: '#333333',
    borderColor: '#BBBBBB',
    style: {
      color: 'white',
    },
  },
  plotOptions: {
    area: {
      step: 'center',
      dataLabels: {
        enabled: true,
        format: '{y}%',
        style: {
          color: 'black',
          textOutline: 'none',
        },
      },
      fillOpacity: 0.6,
      lineWidth: 2,
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: 'Lượng mưa',
      data: [93, 19, 24, 43, 34, 31, 58, 77],
      zones: [
        {
          value: 100,
        },
      ],
    },
  ],
});
