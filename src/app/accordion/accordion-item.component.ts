import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('258ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({
        transform: 'rotate(0)'
      })),
      state('rotated', style({
        transform: 'rotate(180deg)'
      })),
      transition('default<=>rotated', animate('200ms'))
    ])
  ]
})

export class AccordionItemComponent implements OnInit {
  @Input() title!: string
  showBody = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.showBody = !this.showBody;
  }
}
