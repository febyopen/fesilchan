import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardModule } from './board/board.module';
import { TrelloComponent } from './trello.component';
import { TrelloRoutingModule } from './trello-routing.module';


@NgModule({
  declarations: [TrelloComponent],
  imports: [
    CommonModule,
    BoardModule,
    TrelloRoutingModule,

  ],
  exports:[TrelloComponent]
})
export class TrelloModule { }
