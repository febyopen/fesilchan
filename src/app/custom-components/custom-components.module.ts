import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponentsRoutingModule } from './custom-components-routing.module';

import { CarouselModule } from '../carousels/carousel.module';
// import { FlipBookModule } from '@labsforge/flipbook';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomComponentsRoutingModule,
    CarouselModule,
    

  ],
  exports:[]
})
export class CustomComponentsModule { }
