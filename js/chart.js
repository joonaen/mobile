const data = {
    labels:  [
    '2011년','2012년','2013년','2014년','2015년','2016년','2017년','2018년','2019년','2020년','2021년','2022년'],
    datasets: [{
      label: '전문기관점검',
      data: [208, 250, 328, 352, 281,238,273,188,118,73,63,96],
      backgroundColor: [
        '#ccc'
      ]
    },
    {
        label: '본사점검',
        data: [39,65,151,228,220,305,329,365,403,257,182,289],
        backgroundColor: [
          'rgb(255,0,16)'
        ]
      }
    ]
    
  };
        
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  const myChart = new Chart(
        document.getElementById('myChart'),
        config
  );
