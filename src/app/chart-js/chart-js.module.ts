import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartJsRoutingModule } from './chart-js-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartJsRoutingModule,
    HttpClientModule
  ]
})
export class ChartJsModule { }
