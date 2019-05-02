import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
//import HighchartsDrillDown from "highcharts/modules/drilldown";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsNetworkgraph(Highcharts);
HighchartsExporting(Highcharts);
//HighchartsDrillDown(Highcharts);

@Component({
  selector: 'app-my-network-chart',
  templateUrl: './my-network-chart.component.html',
  styleUrls: ['./my-network-chart.component.scss']
})
export class MyNetworkChartComponent implements OnInit {

  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions; 

    constructor() {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
  }
    
  ngOnInit() {
    var myArray = []
        
    var tempObj = {
      Continents : 
      { Asia : {
          India : 1,
          China: 2 ,
          Japan : 3
        },
        Europe : {
          Sweden: 1,
          Norway : 2,
          Finland : 4,
          Denmark : 5
        },
        Africa : {
          Congo : 1,
          Kenya: 2,
          Zimbabwe : 3
        }
      }
    }

    function* dataGenerator(obj, parent?) {
      for(const [key, value] of Object.entries(obj)) {
         if(parent) yield [parent, key];
         if(typeof value === "object")
            yield* dataGenerator(value, key);
      }
   }
  
    const data = Array.from(dataGenerator(tempObj));        
    
    this.chartOptions = {
      chart: {
        type: "networkgraph",
        height: "100%"      
      },
      title: {
        text: "Network graph demo"
      },
      subtitle: {
        text: "A Force-Directed Network Graph in Highcharts"
      },
      plotOptions: {
        networkgraph: {
          keys: ["from", "to"],
          layoutAlgorithm: {
            enableSimulation:false
          }
        },
        /*series: {        
          cropThreshold : 3
        }*/
      },
      series: [
        {
          dataLabels: {
            enabled: true
          },
          data: data
        }
      ]
    };
    console.log(this.chartOptions);  
  }
  
}
