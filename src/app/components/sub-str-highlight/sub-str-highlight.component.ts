import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-sub-str-highlight',
  templateUrl: './sub-str-highlight.component.html',
  styleUrls: ['./sub-str-highlight.component.scss']
})
export class SubStrHighlightComponent implements OnInit {
  @Input() str: string;
  modifingStr: string[] = [];
  isFoundStr: boolean = false;

  constructor(public searchServ: SearchService) {}

  ngOnInit(): void {
    this.isFoundStr = !!this.searchServ.searchStr && this.str.includes(this.searchServ.searchStr);
    if(this.isFoundStr) {
      const subStrPosition = this.str.indexOf(this.searchServ.searchStr);
      this.modifingStr[0] = this.str.slice(0, subStrPosition);
      this.modifingStr[1] = this.str.slice(subStrPosition, subStrPosition + this.searchServ.searchStr.length);
      this.modifingStr[2] = this.str.slice(subStrPosition + this.searchServ.searchStr.length);
    }
  }
}
