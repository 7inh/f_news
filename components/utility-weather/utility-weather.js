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

// Handle change days
const days = document.querySelectorAll('.weather__content-days--item');
days.forEach((day) => {
  day.addEventListener('click', () => {
    document
      .querySelector('.weather__content-days--item.active')
      .classList.remove('active');
    day.classList.add('active');
  });
});

//------ Chart precipitation

// define
const DATA_TIME = [
  '15:00',
  '18:00',
  '21:00',
  '00:00',
  '03:00',
  '06:00',
  '09:00',
  '12:00',
];

const DATA_PRECIPITATION = [93, 19, 24, 43, 34, 31, 58, 77];

Highcharts.chart('precipitation-chart', {
  chart: {
    type: 'area',
    backgroundColor: '#2b2b2b',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: DATA_TIME,
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
      data: DATA_PRECIPITATION,
      zones: [
        {
          value: 100,
        },
      ],
    },
  ],
});

// Chart temperature

Highcharts.chart('temperature-chart', {
  chart: {
    type: 'areaspline',
    zooming: {
      type: 'xy',
    },
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['17:00', '20:00', '23:00', '02:00', '05:00', '09:00'],
    crosshair: true,
    title: {
      text: '',
    },
  },
  yAxis: {
    title: {
      text: '',
    },
    labels: {
      enabled: false,
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
