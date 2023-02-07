import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { NicknameCellComponent } from './components/nickname-cell/nickname-cell.component';
import { MessageCellComponent } from './components/message-cell/message-cell.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { DateCellComponent } from './components/date-cell/date-cell.component';
import { IdentificatorCellComponent } from './components/identificator-cell/identificator-cell.component';
import { DelbuttonCellComponent } from './components/delbutton-cell/delbutton-cell.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActiveMessageComponent } from './components/active-message/active-message.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { EditMessageComponent } from './components/edit-message/edit-message.component';
import { SubStrHighlightComponent } from './components/sub-str-highlight/sub-str-highlight.component';
import { DelConfirmComponent } from './components/del-confirm/del-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    MessagesListComponent,
    ModalComponent,
    NicknameCellComponent,
    MessageCellComponent,
    MessageItemComponent,
    DateCellComponent,
    IdentificatorCellComponent,
    DelbuttonCellComponent,
    ActiveMessageComponent,
    CreateMessageComponent,
    EditMessageComponent,
    SubStrHighlightComponent,
    DelConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
