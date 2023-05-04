import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable, OnDestroy,
  ViewContainerRef
} from '@angular/core';

import {Subject} from 'rxjs';
import { StickyNote } from './note-interface';
import { StickyNoteComponent } from './sticky-note.component';

@Injectable({providedIn: 'root'})
export class StickyNoteService implements OnDestroy {

  private noteSubject = new Subject<StickyNote>();
test?:string
  constructor(private componentFactory: ComponentFactoryResolver) {
  }

  public open(noteTemplateRef: () => ViewContainerRef): void {
    this.noteSubject.asObservable().subscribe(helpTextData => {
      const stickyNoteComponent = this.createNoteComponent(noteTemplateRef);
      stickyNoteComponent.instance.openNote(helpTextData);
    });
  }

  public initOpenNote(text: string, event: MouseEvent): void {
    this.noteSubject.next({
      content: text,
      coordinates: event
    });
  }

  private createNoteComponent(stickyNotesRef: () => ViewContainerRef): ComponentRef<StickyNoteComponent> {
    const factory = this.componentFactory.resolveComponentFactory(StickyNoteComponent);
    return stickyNotesRef().createComponent(factory);
  }

  ngOnDestroy(): void {
    this.noteSubject.unsubscribe();
  }
}
