import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ActiveMessageService {

  activeMessage$ = new BehaviorSubject<IMessage | null>(null);

  constructor() { }

  changeActiveMessage(message: IMessage) {
    this.activeMessage$.next({ ...message });
  }

  clearActiveMessage() {
    this.activeMessage$.next(null);
  }
}
