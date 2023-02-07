import { Injectable } from '@angular/core';
import TableConfig from 'src/tableconfig.json';
import { tableCellConfig } from '../models/tableConfig';

const typesCol = new Set(["id", "delbutton", "username", "message", "datetime"]);

@Injectable({
  providedIn: 'root'
})
export class TableConfigService {

  private _defaultConfig: tableCellConfig[] = [
    {
        "type": "id",
        "viewTitle": "ID"
        
    },
    {
        "type": "delbutton",
        "viewTitle": ""
        
    },
    {
        "type": "username",
        "viewTitle": "Имя"
        
    },
    {
        "type": "message",
        "viewTitle": "Сообщение"
        
    },
    {
        "type": "datetime",
        "viewTitle": "Время"
        
    }
  ];

  constructor() { }

  getConfig() {
    try {
      console.log('test');

      if (!TableConfig) 
        throw new Error();

      if(!TableConfig.find(item => item.type == 'delbutton'))
        throw new Error();

      if(TableConfig.length < 2 || TableConfig.length > 5)
        throw new Error();

      if(!TableConfig.find(item => typesCol.has(item.type)))
        throw new Error();

      if(!TableConfig.map(item => item.type)
          .find((type, indexType, arrayTypes) => arrayTypes.indexOf(type) == arrayTypes.lastIndexOf(type)))
        throw new Error();
      
      return TableConfig;
    } catch {
      return this._defaultConfig;
    }
  }
}
