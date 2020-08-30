import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebServiceService } from './web-service.service';
import { DataRx } from '../models/data-rx';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url: string;
  constructor(
    private http: HttpClient,
    private servidor: WebServiceService
  ) {
    this.url = servidor.getUrl()
  }

  insert(endPoint: string, dataInsert: object): Array<any> {
    let returndata: Array<any> = [];
    this.http.post<DataRx>(`${this.url}${endPoint}`, dataInsert);
    return returndata
  }

}
