import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMessage } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesServerService {
    constructor(private http: HttpClient) { }

    getListMessages() {
      return this.http.get<IMessage[]>(`http://localhost:3000/messages`);
    }

    deleteMessageServer(idMessage: number) {
      return this.http.delete(`http://localhost:3000/messages/${idMessage}`);
    }

    editMessageServer(idMessage: number, target: string, value: string | number) {
      return this.http.patch(`http://localhost:3000/messages/${idMessage}`, { [target]: value });
    }

    addNewMessageServer(username: string, message: string, datetime: string) {
      return this.http.post(`http://localhost:3000/messages`, { username, datetime, message });
    }

    searchMessageServer(searchStr: string) {
      return this.http.get(`http://localhost:3000/messages`, { params: { 'q': searchStr } });
    }
}
