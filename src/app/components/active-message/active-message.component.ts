import { Component, Input } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-active-message',
  templateUrl: './active-message.component.html',
  styleUrls: ['./active-message.component.scss'],
  providers: [ModalService]
})
export class ActiveMessageComponent {
  @Input() activeMessage: IMessage;

  constructor(
    public modal: ModalService
  ) {}

}
