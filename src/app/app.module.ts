import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { GaugeComponent } from './gauge/gauge.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxGaugeModule ],
  declarations: [ AppComponent, HelloComponent, GaugeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
