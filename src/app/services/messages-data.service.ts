import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from '../models/message';
import { MessagesServerService } from './messages-server.service';
import { SearchService } from './search-service.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesDataService {
  messagesList$ = new BehaviorSubject<IMessage[]  | any>([]);

  constructor(
    private messageServ: MessagesServerService,
    public searchServ: SearchService
  ) {
    this.updateMessagesList();
  }

  deleteMessage(idMessage: number) {
    this.messageServ.deleteMessageServer(idMessage).subscribe(
      () => {
        this.updateMessagesList();
      }
    );
  }

  editMessage(idMessage: number, target: string, value: string | number) {
    this.messageServ.editMessageServer(idMessage, target, value).subscribe(
      () => {
        this.updateMessagesList();
      }
    );
  }

  addNewMessage(username: string, message: string, datetime: string) {
    this.messageServ.addNewMessageServer(username, message, datetime).subscribe(
      () => {
        this.updateMessagesList();
      }
    );
  }

  updateMessagesList() {
    if(this.searchServ.getSearchStr().length > 0) {
      this.messageServ.searchMessageServer(this.searchServ.getSearchStr()).subscribe(
        (list) => {
          this.messagesList$.next(list);
        }
      );
    } else {
      this.messageServ.getListMessages().subscribe(
        (list) => {
          this.messagesList$.next(list);
        }
      );
    }
  }
}
