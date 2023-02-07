import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-identificator-cell',
  templateUrl: './identificator-cell.component.html',
  styleUrls: ['./identificator-cell.component.scss']
})
export class IdentificatorCellComponent {
  @Input() value: number;
}
