import { Component, Input } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./toggle-button.scss']
})
export class SwitchComponent  {
  @Input() on: boolean | undefined;
  @Input() className: string | undefined;
}
