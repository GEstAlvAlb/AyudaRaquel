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
  gradient2: boolean = true;
  showLegend2: boolean = false;
  showXAxisLabel2: boolean = false;
  xAxisLabel2: string = 'ejeX';
  showYAxisLabel2: boolean = false;
  yAxisLabel2: string = 'ejeY';

  colorScheme2 = {
    domain: ['orange', 'yellow', 'red', 'purple', 'grey']
  };


  onSelect(event) {
    console.log(event);
  }

}
