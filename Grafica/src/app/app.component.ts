import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grafica';

  single: any[] =
    [
      {
        "name": "Germany",
        "value": 40632,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "United States",
        "value": 5000,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "France",
        "value": 36745,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "United Kingdom",
        "value": 36240,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Spain",
        "value": 33000,
        "extra": {
          "code": "es"
        }
      },

    ];
  multi: any[];

  view: any[] = [700, 400];

  // options tabla 1
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = true;
  colorScheme = {
    domain: ['orange', 'yellow', 'red', 'purple', 'grey']
  };

  // options tabla 2

  single2: any[] = [

    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 730
        },
        {
          "name": "2011",
          "value": 894
        },
        {
          "name": "1990",
          "value": 620
        }
        ,
        {
          "name": "2012",
          "value": 620
        }
        ,
        {
          "name": "2014",
          "value": 620
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 309
        },
        {
          "name": "2011",
          "value": 311
        },
        {
          "name": "1990",
          "value": 250
        },
        {
          "name": "2012",
          "value": 620
        }
        ,
        {
          "name": "2014",
          "value": 625
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 500
        },
        {
          "name": "2011",
          "value": 580
        },
        {
          "name": "1990",
          "value": 580
        },
        {
          "name": "2012",
          "value": 450
        }
        ,
        {
          "name": "2014",
          "value": 770
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "2010",
          "value": 620
        },
        {
          "name": "2011",
          "value": 580
        },
        {
          "name": "1990",
          "value": 570
        },
        {
          "name": "2012",
          "value": 900
        }
        ,
        {
          "name": "2014",
          "value": 690
        }
      ]
    }
  ]

  view2: any[] = [700, 400];

  showXAxis2: boolean = true;
  showYAxis2: boolean = false;
  gradient2: boolean = false;
  showLegend2: boolean = false;
  showXAxisLabel2: boolean = false;
  xAxisLabel2: string = 'ejeX';
  showYAxisLabel2: boolean = false;
  yAxisLabel2: string = 'ejeY';

  colorScheme2 = {
    domain: ['orange', 'yellow', 'red', 'purple', 'grey']
  };



  /// Lineas 

  single3: any[] = [
    {
      "name": "Luxembourg",
      "series": [
        {
          "value": 6821,
          "name": "2016-09-21T05:13:15.904Z"
        },
        {
          "value": 2679,
          "name": "2016-09-22T15:00:51.286Z"
        },
        {
          "value": 6436,
          "name": "2016-09-12T20:51:31.517Z"
        },
        {
          "value": 5546,
          "name": "2016-09-21T03:42:53.321Z"
        },
        {
          "value": 6308,
          "name": "2016-09-23T01:46:20.254Z"
        }
      ]
    },
    {
      "name": "Bahamas",
      "series": [
        {
          "value": 4379,
          "name": "2016-09-21T05:13:15.904Z"
        },
        {
          "value": 3542,
          "name": "2016-09-22T15:00:51.286Z"
        },
        {
          "value": 6348,
          "name": "2016-09-12T20:51:31.517Z"
        },
        {
          "value": 3408,
          "name": "2016-09-21T03:42:53.321Z"
        },
        {
          "value": 5544,
          "name": "2016-09-23T01:46:20.254Z"
        }
      ]
    },
    {
      "name": "Heard Island and Mcdonald Islands",
      "series": [
        {
          "value": 2897,
          "name": "2016-09-21T05:13:15.904Z"
        },
        {
          "value": 6624,
          "name": "2016-09-22T15:00:51.286Z"
        },
        {
          "value": 2578,
          "name": "2016-09-12T20:51:31.517Z"
        },
        {
          "value": 3980,
          "name": "2016-09-21T03:42:53.321Z"
        },
        {
          "value": 4433,
          "name": "2016-09-23T01:46:20.254Z"
        }
      ]
    },
    {
      "name": "Cayman Islands",
      "series": [
        {
          "value": 3940,
          "name": "2016-09-21T05:13:15.904Z"
        },
        {
          "value": 5008,
          "name": "2016-09-22T15:00:51.286Z"
        },
        {
          "value": 4905,
          "name": "2016-09-12T20:51:31.517Z"
        },
        {
          "value": 5326,
          "name": "2016-09-21T03:42:53.321Z"
        },
        {
          "value": 5641,
          "name": "2016-09-23T01:46:20.254Z"
        }
      ]
    },
    {
      "name": "Israel",
      "series": [
        {
          "value": 4566,
          "name": "2016-09-21T05:13:15.904Z"
        },
        {
          "value": 6513,
          "name": "2016-09-22T15:00:51.286Z"
        },
        {
          "value": 4372,
          "name": "2016-09-12T20:51:31.517Z"
        },
        {
          "value": 4705,
          "name": "2016-09-21T03:42:53.321Z"
        },
        {
          "value": 6503,
          "name": "2016-09-23T01:46:20.254Z"
        }
      ]
    }
  ];

  view3: any[] = [700, 400];
  legend3: boolean = false;
  showLabels3: boolean = true;
  animations3: boolean = true;
  xAxis3: boolean = true;
  yAxis3: boolean = true;
  showYAxisLabel3: boolean = true;
  showXAxisLabel3: boolean = true;
  timeline3: boolean = true;

  colorScheme3 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }





}
