import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-cell',
  templateUrl: './message-cell.component.html',
  styleUrls: ['./message-cell.component.scss']
})
export class MessageCellComponent {
  @Input() value: string;

  constructor() {}
}
