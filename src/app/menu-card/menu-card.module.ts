import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './menu-card.component';
// import { FlipBookModule } from '@labsforge/flipbook';



@NgModule({
  declarations: [MenuCardComponent],
  imports: [
    CommonModule,
    // FlipBookModule,
  ],
  exports:[MenuCardComponent]
})
export class MenuCardModule { }
