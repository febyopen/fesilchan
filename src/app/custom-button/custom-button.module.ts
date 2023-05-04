import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';
import { ButtonClickDirective } from '../shared/directives/button-click.directive';



@NgModule({
  declarations: [CustomButtonComponent, ButtonClickDirective],
  imports: [
    CommonModule
  ],
  exports:[CustomButtonComponent]
})
export class CustomButtonModule { }
