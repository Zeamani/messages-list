import { Component, Input } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { ActiveMessageService } from 'src/app/services/active-message.service';
import { MessagesDataService } from 'src/app/services/messages-data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-del-confirm',
  templateUrl: './del-confirm.component.html',
  styleUrls: ['./del-confirm.component.scss'],
  providers: [ModalService]
})
export class DelConfirmComponent {
  @Input() cancelFunc: Function;
  @Input() idMessage: number;

  constructor(
    public activeMessageServ: ActiveMessageService,
    public messagesData: MessagesDataService
  ) {}

  deleteMessage() {
    this.activeMessageServ.clearActiveMessage();
    
      
    
    this.messagesData.deleteMessage(this.idMessage);
  }
}
