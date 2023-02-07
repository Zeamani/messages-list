import { Component, createComponent, EnvironmentInjector, Injector, OnInit, ViewContainerRef, createEnvironmentInjector, ApplicationRef, Input, ViewEncapsulation } from '@angular/core';
import { MessagesDataService } from 'src/app/services/messages-data.service';
import { IMessage } from 'src/app/models/message';
import { ActiveMessageService } from 'src/app/services/active-message.service';
import { TableConfigService } from 'src/app/services/table-config.service';
import { tableCellConfig } from 'src/app/models/tableConfig';


@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesListComponent implements OnInit {
  

  tableConfig: tableCellConfig[];

  @Input() messagesList: IMessage[];
  @Input() activeMessage: IMessage | null;

  constructor(
    public messagesData: MessagesDataService,
    public activeMessageServ: ActiveMessageService,
    public tableConfigServ: TableConfigService
  ) {

  }

  ngOnInit(): void {
    this.tableConfig = this.tableConfigServ.getConfig();
  }

  
  
}
