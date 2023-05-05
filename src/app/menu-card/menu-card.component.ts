import { AfterViewInit, Component, Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { Book, FlipbookService, PageType } from '@labsforge/flipbook';
import * as $ from 'jquery';
import 'turn.js';


@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent  {
  currentPage: number=1;
 

  constructor(

  ) {
  }

  ngOnInit() {
  
  }

  public turnPage(pageIndex: number) {
    const pages = document.querySelectorAll('.page');
    const pageCount = pages.length;
  
    // Ensure pageIndex is valid and not equal to currentPage
    if (pageIndex >= 1 && pageIndex <= pageCount && pageIndex !== this.currentPage) {
      const currentPageIndex = this.currentPage - 1;
      const nextPageIndex = pageIndex - 1;
  
      const currentPage = pages[currentPageIndex] as HTMLElement;
      const nextPage = pages[nextPageIndex] as HTMLElement;
  
      // Determine the direction to turn the page
      const direction = nextPageIndex > currentPageIndex ? 'forward' : 'backward';
  
      // Set the z-index of the front and back pages
      currentPage.classList.remove('front');
      currentPage.classList.add('back');
      nextPage.classList.remove('back');
      nextPage.classList.add('front');
  
      // Animate the page turn
      const turnDuration = 1000;
      const turnTimingFunction = 'ease-in-out';
  
      if (direction === 'forward') {
        currentPage.style.transition = `transform ${turnDuration}ms ${turnTimingFunction}`;
        currentPage.style.transform = 'rotateY(-180deg)';
        nextPage.style.transition = `transform ${turnDuration}ms ${turnTimingFunction}`;
        nextPage.style.transform = 'rotateY(0deg)';
      } else {
        currentPage.style.transition = `transform ${turnDuration}ms ${turnTimingFunction}`;
        currentPage.style.transform = 'rotateY(-180deg)';
        nextPage.style.transition = `transform ${turnDuration}ms ${turnTimingFunction}`;
        nextPage.style.transform = 'rotateY(0deg)';
      }
  
      // Update the currentPage variable
      this.currentPage = pageIndex;
    }

  }


  
  
  }
