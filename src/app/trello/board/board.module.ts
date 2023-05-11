import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { BoardItemComponent } from './board-item/board-item.component';


import { DialogModule } from '../components/dialog/dialog.module';
import { TasktItemComponent } from './task-item/taskl-item.component';
@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    TasktItemComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    DialogModule
  ], 
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
