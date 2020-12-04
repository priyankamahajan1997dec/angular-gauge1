import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  gaugeType = 'semi';
  gaugeThick = 12;
  gaugevalue = 499;
  gaugethresholds = {
            '0': {color: 'green'},
            '500': {color: 'orange'},
            '1000': {color: 'orangeRed'},
            '1500': {color: 'red'}
        };
  gaugemax = 2000;

  constructor() { 
    setInterval (() => {
            this.gaugevalue = Math.floor((Math.random() * 2000) + 1);
      }, 7000);
  }

  ngOnInit() {
  }

}