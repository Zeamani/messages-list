import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { ActiveMessageService } from 'src/app/services/active-message.service';
import { MessagesDataService } from 'src/app/services/messages-data.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss']
})
export class EditMessageComponent implements OnInit {

  textMessage: string;
  @Input() optionalFunc: Function;
  @Input() activeMessage: IMessage | null;

  constructor(
    public messageData: MessagesDataService
  ) {}

  ngOnInit(): void {
    this.textMessage = this.activeMessage?.message as string;
  }

  editMessage() {
    this.messageData.editMessage(this.activeMessage?.id as number, "message", this.textMessage);
    if(this.activeMessage)
      this.activeMessage.message = this.textMessage;
    if(this.optionalFunc) this.optionalFunc();
  }

}
