import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { StickyNoteService } from '../sticky-note/sticky-note.service';

@Component({
  selector: 'app-custom-components',
  templateUrl: './custom-components.component.html',
  styleUrls: ['./custom-components.component.scss']
})
export class CustomComponentsComponent {
  status: any;
  constructor(private stickyNoteService: StickyNoteService){}
    @ViewChild(
    'StickyNoteTemplate',
    {
      read: ViewContainerRef
    }
  )
  stickyNoteTemplate!: ViewContainerRef;
  
    title = 'components';
    availableItems: any[] = [];
    selectedItems: any[] = [];
    currentSelectItems: any[] = [];
  
    ngOnInit() {
      this._listenOpenStickyNotes();
      this.availableItems = [
        { id: '1', name: 'Item 1'},
        { id: '2', name: 'Item 2'},
        { id: '3', name: 'Item 3'},
        { id: '4', name: 'Item 4'},
        { id: '5', name: 'Item 5'},
        { id: '6', name: 'Item 6'},
      ]
    }
  
    List = [
      { title: 'Slide 1' },
      { title: 'Slide 2' },
      { title: 'Slide 3' },
    ]
    slides: carouselCards[] = [
      {
        header: 'Bots Up',
        description: 'Create chatbots for WhatsApp & Website without any coding',
      },
      {
        header: 'TDS Payments',
        description: 'Automate all your TDS tax payments.'
  
      },
      {
        header: 'Open Store',
        description: 'take your business online',
      },
      {
        header: 'Payout Links ',
        description: " Don't have the account numbers of your vendor? Now payout to your vendors by just using email/mobile number"
  
      },
      {
        header: 'Expense Cards',
        description: 'take your business online',
      },
    ]
  
    onItemsMoved(event: { selected: any[]; }): void {
      this.currentSelectItems = event.selected;
    }
    private _listenOpenStickyNotes(): void {
      this.stickyNoteService.open(() => this.stickyNoteTemplate);
    }
    public delete(){
      this.stickyNoteTemplate.clear()
    }
                      
  }

  interface carouselCards {
    header: string;
    description: string;
  }  