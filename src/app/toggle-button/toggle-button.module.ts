import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchComponent } from './switch.component';
import { ToggleComponent } from './toggle.component';
import { ToggleButtonComponent } from './toggle-button.component';



@NgModule({
  declarations: [ToggleComponent,SwitchComponent,ToggleButtonComponent],
  imports: [
    CommonModule,
  ],
  exports:[ToggleButtonComponent]
})
export class ToggleButtonModule { }
