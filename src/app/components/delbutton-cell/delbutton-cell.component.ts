import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MessagesDataService } from 'src/app/services/messages-data.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActiveMessageService } from 'src/app/services/active-message.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-delbutton-cell',
  templateUrl: './delbutton-cell.component.html',
  styleUrls: ['./delbutton-cell.component.scss'],
  providers: [ModalService]
})
export class DelbuttonCellComponent {
  @Input() value: number;
  faTrashCan = faTrashCan;

  constructor(
    public modal: ModalService
  ) {

  }

  confirmDeleteMessage(event: Event) {
    event.stopPropagation();
    this.modal.open();
  }
}
