import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchStr: string = '';

  getSearchStr() {
    return this.searchStr.trim();
  }

  constructor() { }
}
