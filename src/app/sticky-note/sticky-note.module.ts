import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyNoteComponent } from './sticky-note.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TextGrabberDirective } from './directives/text-grabber/text-grabber.directive';



@NgModule({
  declarations: [TextAreaComponent,StickyNoteComponent,TextGrabberDirective],
  imports: [
    CommonModule,
    DragDropModule,
    OverlayModule,

  ],
  exports:[TextAreaComponent,StickyNoteComponent]
})
export class StickyNoteModule { }
