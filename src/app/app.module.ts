import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule  } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNetworkChartComponent } from './my-network-chart/my-network-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNetworkChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
