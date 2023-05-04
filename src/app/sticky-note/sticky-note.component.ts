import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';
import {ConnectedPosition, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { StickyNote } from './note-interface';
import { StickyNoteService } from './sticky-note.service';


@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent {

  @ViewChild(TemplateRef, { static: true })
  dialogTemplate!: TemplateRef<any>; 
  content?: SafeHtml;
  private overlayRef?: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private sanitizer: DomSanitizer,
    public sticky: StickyNoteService
  ) {
  }

  public openNote(stickyNote: StickyNote): void {
    this.content = this.validateHtmlContent(stickyNote.content);

    const portal = new TemplatePortal(this.dialogTemplate, this.viewContainerRef);

    const overlayConfig = {
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(stickyNote.coordinates)
        .withPositions([StickyNoteComponent.leftTopPosition()])
    };
    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.attach(portal);
  }

  private static leftTopPosition(): ConnectedPosition {
    return {
      originX: 'center',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'top'
    } as ConnectedPosition;
  }

  private validateHtmlContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
