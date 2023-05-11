import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrelloComponent } from './trello.component';

const routes: Routes = [
  {
    path:'',component:TrelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrelloRoutingModule { }
