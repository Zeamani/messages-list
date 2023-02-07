import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nickname-cell',
  templateUrl: './nickname-cell.component.html',
  styleUrls: ['./nickname-cell.component.scss']
})
export class NicknameCellComponent {
  @Input() value: string;
}
