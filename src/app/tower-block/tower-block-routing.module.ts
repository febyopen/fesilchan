import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerBlockComponent } from './tower-block.component';

const routes: Routes = [
{  path:'',component: TowerBlockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TowerBlockRoutingModule { }
