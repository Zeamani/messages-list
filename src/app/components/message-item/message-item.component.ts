import { ApplicationRef, Component, createComponent, EnvironmentInjector, Input, OnInit, Renderer2, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { tableCellConfig } from 'src/app/models/tableConfig';
import { MessagesDataService } from 'src/app/services/messages-data.service';
import { TableConfigService } from 'src/app/services/table-config.service';
import { DateCellComponent } from '../date-cell/date-cell.component';
import { DelbuttonCellComponent } from '../delbutton-cell/delbutton-cell.component';
import { IdentificatorCellComponent } from '../identificator-cell/identificator-cell.component';
import { MessageCellComponent } from '../message-cell/message-cell.component';
import { NicknameCellComponent } from '../nickname-cell/nickname-cell.component';

function getComponent(key: string) {
  switch(key) {
    case "username": 
      return NicknameCellComponent;

    case "message": 
      return MessageCellComponent;

    case "datetime": 
      return DateCellComponent;

    case "delbutton": 
      return DelbuttonCellComponent;

    case "id": 
      return IdentificatorCellComponent;

    default:
      return IdentificatorCellComponent;
  }
}

type types = NicknameCellComponent | MessageCellComponent | DateCellComponent | IdentificatorCellComponent;

@Component({
  selector: 'app-message-item',
  template: '',
  styleUrls: ['./message-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageItemComponent implements OnInit {

  @Input() messageItem: IMessage;
  tableConfig: tableCellConfig[]; 

  constructor(
    public messagesData: MessagesDataService,
    private viewContainerRef: ViewContainerRef,
    private environmentInjector: 	EnvironmentInjector,
    private appRef: ApplicationRef,
    private renderer: Renderer2,
    public tableConfigServ: TableConfigService
  ) {}

  ngOnInit(): void {
    this.tableConfig = this.tableConfigServ.getConfig();

    const messageRow = this.viewContainerRef.element.nativeElement;

    this.tableConfig.forEach((col: tableCellConfig) => {

      const componentRef = createComponent(
        getComponent(col.type) as Type<types>,
        {
          environmentInjector: this.environmentInjector,
        }
      )

      if(col.type == 'delbutton') {
        componentRef.setInput('value', this.messageItem.id);
      } else {
        componentRef.setInput('value', Object.entries(this.messageItem).find(item => item[0] == col.type)?.[1]);
      }

      this.appRef.attachView(componentRef.hostView);

      this.renderer.addClass(componentRef.location.nativeElement, "table-cell");
      this.renderer.addClass(componentRef.location.nativeElement, col.type);
      
      this.renderer.appendChild(messageRow, componentRef.location.nativeElement);
    });
  }

}
