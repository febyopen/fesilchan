import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartJsService } from './chart-js.service';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit {
  chart: any = [];
  result: any;
  coinPrice: any;
  coinName: any;
  constructor(private service: ChartJsService) {}

  ngOnInit() {
  //   this.chart = new Chart('canvas', {
  //     type: 'bar',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [
  //         {
  //           label: '# of Votes',
  //           data: [12, 19, 3, 5, 2, 3],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // }
  this.service.cryptoData().subscribe((res) => {
    this.result = res;

    this.coinPrice = this.result.data.coins.map((coins: any) => coins.price);
    this.coinName = this.result.data.coins.map((coins: any) => coins.name);
    console.log(this.coinPrice);
    console.log(this.coinName);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.coinName,
        datasets: [
          {
            data: this.coinPrice,
            borderColor: '#3e95cd',
            label: 'Coin Price',
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderWidth: 3
          },
        ],
      },
    });
  });
}
}