import {Component, Input} from '@angular/core';

@Component({
  selector: 'header-icon',
  template: `
    <div class="header-icon icons8-{{iconName}}" [class.disabled]="disabled"></div>`
})
export class HeaderIconComponent {

  @Input() iconName: string;
  @Input() disabled: boolean

  constructor() {
  }

}
