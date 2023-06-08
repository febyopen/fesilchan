import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrelloModule } from './trello/trello.module';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
    { path: 'components', loadChildren: () => import('./custom-components/custom-components.module').then(m => m.CustomComponentsModule) },
    {
      path: 'trello', loadChildren: () => import('./trello/trello.module').then(m=>m.TrelloModule)
    },
    {
      path: 'tower-block', loadChildren: () => import('./tower-block/tower-block.module').then(m=>m.TowerBlockModule)
    },
    {
      path: 'chart', loadChildren: () => import('./chart-js/chart-js.module').then(m=>m.ChartJsModule)
    },
    {
      path: 'terrain', loadChildren: () => import('./terrain/terrain.module').then(m=>m.TerrainModule)
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
