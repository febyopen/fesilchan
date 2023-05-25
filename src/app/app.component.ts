import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fesilchan';
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    event.preventDefault();
  }
  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  showSettings: boolean = true;
  isLoading?: boolean;

  
}
