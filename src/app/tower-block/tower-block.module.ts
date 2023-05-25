import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TowerBlockRoutingModule } from './tower-block-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TowerBlockRoutingModule,
    MatButtonModule
  ]
})
export class TowerBlockModule { }
