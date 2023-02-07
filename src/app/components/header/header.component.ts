import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesDataService } from 'src/app/services/messages-data.service';
import { ModalService } from 'src/app/services/modal.service';
import { SearchService } from 'src/app/services/search-service.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ModalService]
})
export class HeaderComponent {

  faMagnifyingGlass = faMagnifyingGlass;

  constructor(
    private messagesData: MessagesDataService,
    public modal: ModalService,
    public searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  searchMessage() {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { page: 1 }, 
        replaceUrl: true
    });

    this.messagesData.updateMessagesList();
  }

}
