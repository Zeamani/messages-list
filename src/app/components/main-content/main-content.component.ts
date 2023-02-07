import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/models/message';
import { MessagesDataService } from 'src/app/services/messages-data.service';
import { Location } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';
import { MessagesServerService } from 'src/app/services/messages-server.service';
import { ActiveMessageService } from 'src/app/services/active-message.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  providers: [ModalService]
})
export class MainContentComponent implements OnInit {

  isEditingMessage: boolean = false;
  textMessage: string;
  activeMessage: IMessage | null;

  page: number = 1;

  constructor(
    public messagesData: MessagesDataService,
    private router: Router,
    public modal: ModalService,
    public activeMessageServ: ActiveMessageService,
    private activatedRoute: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        if(params['page'])
          this.page = params['page'];
      }
    );

    this.activeMessageServ.activeMessage$.subscribe(
      message => {
        this.activeMessage = message;
      }
    );
  }

  pageChanged(pageNumber: number) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { page: pageNumber }, 
        replaceUrl: true
    });
    this.page = pageNumber;
  }
}
