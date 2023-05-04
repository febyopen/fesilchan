import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DragAndDropComponent } from './drag-and-drop.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DragAndDropComponent
  ]
})
export class DragAndDropModule { }
