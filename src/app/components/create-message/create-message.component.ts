import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesDataService } from 'src/app/services/messages-data.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent {
  formCreate: FormGroup;
  @Input() optionalFunc: Function;

  constructor(
    private messagesData: MessagesDataService,
  ) {
    this._createForm();
  }

  private _createForm() {
    this.formCreate = new FormGroup({
      authorMessage: new FormControl<string>('', [
        Validators.required
      ]),
      textMessage: new FormControl<string>('', [
        Validators.required
      ]),
      dateMessage: new FormControl<string>('', [
        Validators.required
      ]),
      timeMessage: new FormControl<string>('', [
        Validators.required
      ])
    });
  }

  addNewMessage() {
    this.messagesData.addNewMessage(
      this.formCreate.value['authorMessage'], 
      this.formCreate.value['textMessage'], 
      this.formCreate.value['dateMessage'] + ' ' + this.formCreate.value['timeMessage']
    );
    if(this.optionalFunc) this.optionalFunc();
  }
}
