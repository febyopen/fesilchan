import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrainComponent } from './terrain.component';

const routes: Routes = [
  {
    path:'',component:TerrainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrainRoutingModule { }
